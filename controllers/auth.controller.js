import { User } from "../models/User.js"

export const login = (req, res) => {
    // const errors = validationResult(req)

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

export const register = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = new User({ email: email, password: password })

    } catch (error) {
        
    }
}