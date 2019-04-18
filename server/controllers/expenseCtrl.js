module.exports = {
    addExpense: async (req, res) => {
        // console.log(req.session)
        const {category, date, name, amount, memo} = req.body
        const exp_user_id = req.session.user.id
        console.log(req.session.user)
        const db = req.app.get('db')
        const expArr = await db.createExp([exp_user_id, category, date, name, amount, memo, exp_user_id])
            res.status(200).send(expArr)
    },
    getAllExpByUser: async (req, res) => {
        const exp_user_id = req.session.user.id
        const db = req.app.get('db')
        const expenses = await db.getAllExpsByUser([exp_user_id])
        res.status(200).send(expenses)
    },
    editExp: async (req, res) => {
        const {category, date, name, amount, memo} = req.body
        const {id} = req.params
        const exp_user_id = req.session.user.id
        const db = req.app.get('db')
        const update = await db.editExp([id, category, date, name, amount, memo, exp_user_id])
        res.status(200).send(update) 
    },
    deleteExp: async (req, res)=> {
        const {id} = req.params
        const exp_user_id = req.session.user.id
        const db = req.app.get('db')
        const expense = await db.deleteExp([id, exp_user_id])
        res.status(200).send(expense)
    }
}

