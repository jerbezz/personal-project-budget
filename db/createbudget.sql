insert into budget (
    budget_user_id,
    budget_income,
    budget_expenses
)   values (
    $1,
    $2,
    $3
);
select * from budget
where budget_user_id = $4;