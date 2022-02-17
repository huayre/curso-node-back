const jwt = require('jsonwebtoken');

function generateJWT(idUser) {
   const token = jwt.sign({user_id : idUser}, process.env.JWT_SECRET,{
       expiresIn : '12h'
   });
   return token
}
module.exports = {
    generateJWT : generateJWT
}