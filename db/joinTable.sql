select e.exp_id, e.exp_user_id, e.exp_category, e.exp_date, e.exp_name, e.exp_amount, e.exp_memo, u.user_id, u.user_first_name, u.user_last_name
from expenses e
join users u on e.exp_user_id = u.user_id
where exp_user_id = $1;