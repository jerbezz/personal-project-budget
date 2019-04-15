CREATE TABLE "user" (
	"user_id" serial NOT NULL,
	"user_first_name" varchar(100) NOT NULL,
	"user_last_name" varchar(100) NOT NULL,
	"user_email" varchar(150) NOT NULL,
	"user_hash" TEXT NOT NULL,
	CONSTRAINT user_pk PRIMARY KEY ("user_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "expenses" (
	"exp_id" serial NOT NULL,
	"exp_user_id" integer NOT NULL,
	"exp_category" varchar(50) NOT NULL,
	"exp_date" TIMESTAMP NOT NULL,
	"exp_name" varchar(100) NOT NULL,
	"exp_amount" DECIMAL NOT NULL,
	"exp_memo" varchar(100),
	CONSTRAINT expenses_pk PRIMARY KEY ("exp_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "budget" (
	"budget_id" serial NOT NULL,
	"budget_user_id" integer NOT NULL,
	"budget_income" DECIMAL,
	"budget_expenses" DECIMAL,
	CONSTRAINT budget_pk PRIMARY KEY ("budget_id")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "expenses" ADD CONSTRAINT "expenses_fk0" FOREIGN KEY ("exp_user_id") REFERENCES "user"("user_id");

ALTER TABLE "budget" ADD CONSTRAINT "budget_fk0" FOREIGN KEY ("budget_user_id") REFERENCES "user"("user_id");



