// const mysql = require('mysql2');

// const db = mysql.createConnection({
//     host: '<DB-PRIVATE-IP>',
//     user: 'admin',
//     password: '<password>',
//     database: 'ecommerce'
// });

// db.connect(err => {
//     if (err) throw err;
//     console.log('Connected to DB');
// });

exports.addUser = (req, res) => {
    const { name, email } = req.body;
    console.log(`User received: ${name}, ${email}`);
    res.send({ message: 'User added (DB disabled)', name, email });
  };
  
  exports.getUsers = (req, res) => {
    res.json([{ id: 1, name: 'John Doe' }]);  // Simple response
  };
  
  
  
