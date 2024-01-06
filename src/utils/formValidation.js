export function checkValidate(email, password){
    let validateEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    let validatePassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    
    if(!validateEmail) return "Email is not valid"
    if(!validatePassword) return "Password is not valid"

    return null

}
