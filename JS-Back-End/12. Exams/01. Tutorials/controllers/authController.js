const router = require('express').Router();
const { body, validationResult } = require('express-validator');
const { isGuest } = require('../middlewares/guards');

router.get('/register', isGuest(), (req, res) => {
    res.render('register');
});

router.post('/register', isGuest(),
    body('username')
        .isLength({ min: 5 }).withMessage('Username must be at least 5 characters long.').bail()
        .isAlphanumeric().withMessage('Username may contain only English letters and digits.'),
    body('password')
        .isLength({ min: 5 }).withMessage('Password must be at least 5 characters long.').bail()
        .isAlphanumeric().withMessage('Password may contain only English letters and digits.'),
    body('rePass').custom((value, { req }) => {
        if (value != req.body.password) {
            throw new Error ('Passwords don\'t match.');
        }
        return true;
    }),
    async (req, res) => {
        const { errors } = validationResult(req);
        
        try {
            if (errors.length > 0) {
                throw new Error(Object.values(errors).map(e => e.msg).join('\n'));
            }

            await req.auth.register(req.body.username, req.body.password);

            res.redirect('/');
        } catch (err) {
            console.log(err.message)
            const ctx = {
                errors: err.message.split('\n'),
                userData: {
                    username: req.body.username
                }
            }
            res.render('register', ctx);
        }
    }
);

module.exports = router;