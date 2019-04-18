delete from expenses
where exp_id = $1;
select *
from expenses
where exp_user_id = $2;