module.exports = {
    addExpense: async (req, res) => {
        const {category, date, name, amount, memo} = req.body
        const {exp_user_id} = req.session.user.user_id
        const db = req.app.get('db')
        const expArr = await db.createExp([exp_user_id, category, date, name, amount, memo])
            res.status(200).send(expArr)
    }
}