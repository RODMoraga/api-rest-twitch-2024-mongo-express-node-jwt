import express from 'express'
import { body } from 'express-validator'
import { login, register } from '../controllers/auth.controller.js'
import { validationResultExpress } from '../middlewares/validationResultExpress.js'

const router = express.Router()

router.post('/login', [
    body('email', 'Formato del email es incorrecto')
        .trim()
        .isEmail()
        .normalizeEmail()
]
, validationResultExpress
, login)

router.post('/register', [
    body('email', 'Formato del email es incorrecto')
        .trim()
        .isEmail()
        .normalizeEmail(),
    body('password', 'Formato de password incorrecto')
        .trim()
        .isLength({ min: 8 })
        .custom((value, {req}) => {
            if (value !== req.body.repassword)
            {
                throw new Error('No coinciden las contraseñas');
            }
            return value
        })
]
, validationResultExpress
, register)

export default router