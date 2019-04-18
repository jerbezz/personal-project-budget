update expenses
set exp_category = $2,
exp_date = $3,
exp_name = $4,
exp_amount = $5,
exp_memo = $6 
where exp_id = $1;

select * from expenses
where exp_user_id = $7;


