let mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "test",
  port: 3306,
  insecureAuth: true,
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  const sql = "INSERT into abc values ?";
  var values = [
    ["John", "F", "3334"],
    ["Peter", "M", "322545"],
    ["Amy", "M", "2455434"],
    ["Hannah", "M", "656"],
    ["Michael", "F", "35$4554"],
  ];
  con.query(sql, [values], function (err, rows) {
    if (err) throw err;
    console.log(rows.affectedRows);
  });

  con.query("SELECT * from abc", function (err, rows) {
    if (err) throw err;

    console.log(rows[0].name);
  });
});
