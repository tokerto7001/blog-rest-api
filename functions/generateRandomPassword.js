const generateRandomPassword = () => {
    const numbers = "1234567890";
    let newPassword = ''
    for (let i = 0; i <= 8; i++) {
        newPassword += numbers[Math.floor(Math.random() * 10)];
    };
    return newPassword;
}
module.exports = generateRandomPassword;