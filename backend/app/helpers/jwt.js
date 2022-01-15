const jwt = require('jsonwebtoken');

function generateJWT(idUser) {
   const token = jwt.sign({user_id : idUser}, process.env.JWT_SECRET,{
       expiresIn : '1h'
   });
   return token
}
module.exports = {
    generateJWT : generateJWT
}