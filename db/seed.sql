create table users (
	user_id serial primary key,
	user_first_name varchar(150) not null,
	user_last_name varchar(150) not null,
	user_email varchar(200) not null,
	user_hash text not null
);

create table expenses (
	exp_id serial primary key,
	exp_user_id integer references users(user_id),
	exp_category varchar(50) not null,
	exp_date timestamp not null,
	exp_name varchar(100) not null,
	exp_amount decimal not null,
	exp_memo varchar(100)
);

create table budget (
	budget_id serial primary key,
	budget_user_id integer references users(user_id),
	budget_income decimal,
	budget_expenses decimal
);

