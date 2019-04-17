module.exports = {
    addExpense: async (req, res) => {
        const {category, date, name, amount, memo} = req.body
        const exp_user_id = req.session.user.id
        console.log(req.session.user)
        const db = req.app.get('db')
        const expArr = await db.createExp([exp_user_id, category, date, name, amount, memo])
            res.status(200).send(expArr)
    },
    getAllExpByUser: async (req, res) => {
        const exp_user_id = req.session.user.id
        const db = req.app.get('db')
        const expenses = await db.getAllExpsByUser([exp_user_id])
        res.status(200).send(expenses)
    },
    editExp: (req, res) => {},
    deleteExp: async (req, res)=> {
        const {id} = req.params
        const exp_user_id = req.session.user.id
        const db = req.app.get('db')
        await db.deleteExp([id])
        const expense = await db.getAllExpsByUser(exp_user_id)
            res.status(200).send(expense)
      
    }
}

