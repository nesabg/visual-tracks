export const validation = (type, field) => {

    const emailRegex = new RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,5})+$/)
    const passRegex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/)

    const messages = {
        email: "Not valid email",
        password: "Password must have be 8 character and have at least 1 Uppercase letter, 1 Lowercase letter, 1 number, 1 special character"
    }
    
    const solver = (condition, message) => {
        return condition ? { err: false, message: null} : { err: true, message}
    }

    const types = {
        email: (field, type) => solver(emailRegex.test(field), messages[type]),
        password: (field, type) => solver(passRegex.test(field), messages[type]),
    }

    return types[type](field, type)
}