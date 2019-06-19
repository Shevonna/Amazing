-- Created the DB "wizard_schools_db" (only works on local connections)
CREATE DATABASE bamazon;
USE bamazon;

-- Created the table "schools" 
CREATE TABLE products (
  item_id int AUTO_INCREMENT,
  product_name varchar (30) NOT NULL,
  department_name varchar (20) NOT NULL,
  price int (30) NOT NULL,
  stock_quanity int (30) NOT NULL,
  PRIMARY KEY (item_id)
);

  -- Inserted a set of records into the table
 INSERT INTO products (product_name, department_name, price, stock_quanity) 
 VALUE ("ice cream", "cold", 10, 30);

 INSERT INTO products (product_name, department_name, price, stock_quanity) 
 VALUE ("popsicle", "cold", 15, 30);

 INSERT INTO products (product_name, department_name, price, stock_quanity) 
 VALUE ("sorbet", "cold", 5, 30);

 INSERT INTO products (product_name, department_name, price, stock_quanity) 
 VALUE ("gelato", "cold", 20, 30);

 INSERT INTO products (product_name, department_name, price, stock_quanity) 
 VALUE ("snow cone", "cold", 10, 30);

 INSERT INTO products (product_name, department_name, price, stock_quanity) 
 VALUE ("apple pie", "warm", 10, 30);

 INSERT INTO products (product_name, department_name, price, stock_quanity) 
 VALUE ("apple pie", "warm", 5, 30);

 INSERT INTO products (product_name, department_name, price, stock_quanity) 
 VALUE ("peach cobbler", "warm", 15, 30);

 INSERT INTO products (product_name, department_name, price, stock_quanity) 
 VALUE ("cake", "warm", 5, 30);

 INSERT INTO products (product_name, department_name, price, stock_quanity) 
 VALUE ("blooper pie", "warm", 10, 30);
 

 