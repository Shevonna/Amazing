// Dependencies
var express = require("express");
var mysql = require("mysql");

// Create instance of express app.
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 7000;

// MySQL DB Connection Information (remember to change this with our specific credentials)
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Vonna123!",
  database: "bamazon"
});

// Initiate MySQL Connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// prompts
function findProduct() {
    inquirer
      .prompt([
        type: 'rawlist',
        name: 'prods',
        message: "What is the product id of the item yopu wish to purchace?",
        choices: [
            "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"

        ]
      ])
      .then(answers => {
        console.log(JSON.stringify(answers, null, '  '));
      });
    }

function buyProduct() {
    inquirer
      .prompt([
        type: 'input',
        name: 'prods',
        message: "How many units of the product you would like to buy?"
        ]
      )
      .then(answers => {
        console.log(JSON.stringify(answers, null, '  '));
      });
    }

// Routes
app.get("/bamazon", function(req, res) {
  connection.query("SELECT * FROM products", function(err, result) {
    var html = "<h1>products Ordered BY ID</h1>";

    html += "<ul>";

    for (var i = 0; i < result.length; i++) {
      html += "<li><p> ID: " + result[i].item_id + "</p>";
      html += "<p> Name: " + result[i].product_name + "</p>";
      html += "<p> Coolness Points: " + result[i].department_name + "</p>";
      html += "<p>Attitude: " + result[i].price + "</p></li>";
      html += "<p>Attitude: " + result[i].stock_quanity + "</p></li>";
    }

    html += "</ul>";

    res.send(html);
  });
});


// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
