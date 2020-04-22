const Strategy = require('passport-local').Strategy
const User = require('../database/Models/User')

module.exports =  new Strategy({
    usernameField: 'login',
    passwordField: 'password',
    session: false
},
function (username, password, done) {
    
    User.findOne({
        cpf: username
    }, function (err, user) {
        if (err) {
            return done(err);
        }
        if (!user) {
            return done(null, false);
        }
        if (user.password !== password) {
            return done(null, false);
        }
        return done(null, user);
    });
}
)
