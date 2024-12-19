import { validationResult } from "express-validator"

export const login = (req, res) => {
    const errors = validationResult(req)

    if (!errors.isEmpty())
    {
        return res.status(400).json({
            errors: errors.array()
        })
    }

    console.log(req.body)
    
    res.json({
        message: 'Login'
    })
}

export const register = (req, res) => {
    const errors = validationResult(req)

    if (!errors.isEmpty())
    {
        return res.status(400).json({
            errors: errors.array()
        })
    }
    
    console.log(req.body)
    
    res.json({
        message: 'Register'
    })
}