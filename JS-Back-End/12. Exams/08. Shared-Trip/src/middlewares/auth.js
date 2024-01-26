const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { TOKEN_SECRET, COOKIE_NAME } = require('../config');
const userService = require('../services/user');

module.exports = () => (req, res, next) => {
    if (parseToken(req, res)) {
        req.auth = {
            async register(email, gender, password) {
                const token = await register(email, gender, password);
                res.cookie(COOKIE_NAME, token);
            },
            async login(email, password) {
                const token = await login(email, password);
                res.cookie(COOKIE_NAME, token);
            },
            logout() {
                res.clearCookie(COOKIE_NAME);
            },
        };

        next();
    }
};

async function register(email, gender, password) {
}

async function login(email, password) {
}

function generateToken(userData) {
    return jwt.sign(
        {
            _id: userData._id,
            email: userData.email,
            gender: userData.gender
        },
        TOKEN_SECRET
    );
}

function parseToken(req, res) {
}