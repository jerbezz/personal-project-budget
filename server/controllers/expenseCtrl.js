module.exports = {
    addExpense: async (req, res) => {
        const {category, date, name, amount, memo} = req.body
        const exp_user_id = req.session.user.id
        const db = req.app.get('db')
        const expArr = await db.createExp([exp_user_id, category, date, name, amount, memo])
            res.status(200).send(expArr)
    },
    getAllExpByUser: (req, res) => {
        const exp_user_id = req.session.user.id
        const db = req.app.get('db')
        db.getAllExpsByUser([exp_user_id])
        .then(expenses => {
            res.status(200).send(expenses)
        }).catch(err => {
            res.status(500).send(err, 'get exp error')
        })
    }
}

