const { User } = require('../db/models/index');
const bcrypt = require('bcrypt');
const sendMail = require('../utils/sendMail');
const registerTemplate = require('../templates/register');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    try {
        const { firstName, lastName, mail, password, passwordConfirm, roleId } = req.body;
        if (password != passwordConfirm) return res.status(400).send({ message: 'fail', data: 'Passwords do not match!' })

        const userExist = await User.findOne({ where: { mail: mail } });
        if (userExist) {
            return res.status(400).send({ message: 'fail', data: 'User is already registered!' })
        }


        const hashedPassword = bcrypt.hashSync(password, 12);
        const userCreation = await User.create({
            first_name: firstName,
            last_name: lastName,
            mail: mail,
            password: hashedPassword,
            userRoleId: roleId
        })

        const token = jwt.sign({ id: userCreation.id }, process.env.JWT_TOKEN);

        const options = {
            to: mail,
            subject: 'Register',
            html: registerTemplate(`http://localhost:8000/api/auth/user-verify?token=${token}`),
            from: 'info@emparazon.com',
            textEncoding: 'base64',

        };

        userCreation && await sendMail(options);
        return res.status(200).send({ message: 'success', data: 'User verification mail is sent.' })

    } catch (err) {
        console.log(err);
        res.status(400).send(err);
    }
}

exports.verify = async (req, res) => {
    try {
        const { token } = req.query;
        if (!token) return res.status(400).send(`<h1>Geçersiz token!</h1>`);
        const { id } = jwt.verify(token, process.env.JWT_TOKEN);
        if (!id) return res.status(400).send(`<h1>Geçersiz token!</h1>`);
        const user = await User.findOne({ where: { id: id } });
        if (!user) return res.status(400).send(`<h1>Kullanıcı bulunamadı!</h1>`);

        const cookieExpiry = new Date(Date.now() + 24 * 60 * 60 * 1000);
        // assign the cookie to the response
        res.cookie("token", token, {
            expires: cookieExpiry,
            httpOnly: true,
        });
        return res.redirect('http://localhost:3000/');
    } catch (err) {
        console.log(err);
        return res.status(400).send(err);
    }
}