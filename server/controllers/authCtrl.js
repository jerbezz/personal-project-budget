const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) => {
        const { firstName, lastName, email, password } = req.body
        const db = req.app.get('db')
        const userArr = await db.find_user_by_email([email])
        if (userArr[0]){
            return res.status(200).send({message: 'Email already in use'})
        }
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        let newUserArr = await db.create_user([firstName, lastName, email, hash])
        req.session.user = {firstName: newUserArr[0].user_first_name, lastName: newUserArr[0].user_last_name, email: newUserArr[0].user_email, id: newUserArr[0].user_id};
        res.status(200).send({
            message: 'logged in',
            userData: req.session.user,
            loggedIn: true
        })
      },
    login: async (req, res) => {
        const {email, password} = req.body
        const db = req.app.get('db')
        const userAcc = await db.find_user_by_email([email])
        if (!userAcc[0]) {
            return res.status(200).send({message: 'account not found'})
        }
        let result = bcrypt.compareSync(password, userAcc[0].user_hash)
        if(!result){
            return res.status(200).send({message: 'incorrect password'})
        }
        req.session.user = {firstName: userAcc[0].user_first_name, lastName: userAcc[0].user_last_name, email: userAcc[0].user_email, id: userAcc[0].user_id}
        res.status(200).send({
            message: 'log in successful',
            userData: req.session.user,
            loggedIn: true
        })
    },
    logout: (req, res) => {
        req.session.destroy()
        res.redirect('http://localhost:3000/#/')
    },
    userData: (req, res) => {
        if(req.session.user) res.status(200).send(req.session.user)
      else res.status(401).send('please log in');
    }
}
