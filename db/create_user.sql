insert into users
(
    user_first_name,
    user_last_name,
    user_email,
    user_hash
)
values
(
    $1,
    $2,
    $3,
    $4
)
returning user_id, user_first_name, user_last_name, user_email;