
const validateBodyElements = (bodyArray) => {
    return function (req, res, next) {
        let properties = Object.keys(req.body);
        if (bodyArray.length) {
            bodyArray.map((el) => {
                if (!properties.includes(el)) return res.status(400).send({ message: 'fail', data: 'Invalid input!' })
            })
        }
        next();
    }
}

module.exports = validateBodyElements;