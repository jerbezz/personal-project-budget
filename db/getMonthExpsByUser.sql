select * from expenses
where exp_date like '%-$1-%'
and exp_user_id = $2;
