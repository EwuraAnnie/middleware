const login = (req, res) => {
    res.send("Login successful..!!");
};

const register = (req, res) => {
    res.send("Registration succcessful..!!");
};

module.exports = {
    login,
    register,
};