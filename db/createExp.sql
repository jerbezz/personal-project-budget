insert into expenses (
    exp_user_id,
    exp_category,
    exp_date,
    exp_name,
    exp_amount,
    exp_memo
) values (
    $1,
    $2,
    $3,
    $4,
    $5,
    $6
);
select *
from expenses
where exp_user_id = $7;
