module.exports = {
    addBudget: async (req, res) => {
        const {budgetIncome, budgetExpenses} = req.body
        const budget_user_id = req.session.user.id
        const db = req.app.get('db')
        const newBudget = await db.createBudget([budget_user_id, budgetIncome, budgetExpenses, budget_user_id])
        res.status(200).send(newBudget)
    },

    getBudgetByUser: async (req, res) => {
        const budget_user_id = req.session.user.id
        const db = req.app.get('db')
        const budget = await db.getBudgetsByUser([budget_user_id])
        res.status(200).send(budget)
    }
}