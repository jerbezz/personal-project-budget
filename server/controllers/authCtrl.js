const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) => {
        const { firstName, lastName, email, password } = req.body;
        const db = req.app.get('db');
        const userArr = await db.find_user_by_email([email])
        if (userArr[0]){
            return res.status(200).send({message: 'Email already in use'})
        }
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        let newUserArr = await db.create_user([user_first_name, user_last_name, user_email, hash])
        req.session.user = {id: newUserArr[0].user_id, firstName: newUserArr[0].user_first_name, lastName: newUserArr[0].user_last_name, email: newUserArr[0].user_email,};
        res.status(200).send({
            message: 'logged in',
            userData: req.session.user,
            loggedIn: true
        })
      },
    login: (req, res) => {}
}