var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "loja"
});

con.connect(function (erro) {
    if (erro) throw erro;
    var cmd = "INSERT INTO produto (codigo,descricao, preco) VALUES (?, ?, ?)";
    var dados = [15, 'Cama de solteiro', 250];
    con.query(cmd, dados, function (erro) {
        if (erro) throw erro;
        console.log("Inserido!");
        con.end();
    });
});