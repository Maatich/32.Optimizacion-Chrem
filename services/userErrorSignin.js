export const generateUserErrorSignin = (user) => {
    return `
    Alguno de los campos para crear el usuario no es valido:
    Lista de campos requeridos:
    Tu dirección de email es incorrecta. La dirección ${user.email}, 
    no corresponde a un usuario existente o tu contraseña es incorrecta.`
}