const welcome = (req, res) => {
    res.send("<h1>Hello There, You Are Welcome!</h1>");
};

const greet = (req, res) => {
    res.send("<h1>Hello, Everyone!!!</h1>");
};

const protected = (req, res) => {
    res.send("<h1>You can see this because you are authenticated..</h1>");
};

module.exports = {
    welcome,
    greet,
    protected,
};