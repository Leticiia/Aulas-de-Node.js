var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",

    database: "loja"
});
con.connect(function (erro) {
    if (erro) throw erro;
    var cmd = "DELETE FROM produto Where codigo =?";
    var dados = [10];

    con.query(cmd, dados, function (erro) {
        if (erro) throw erro;
        console.log("Produto Apagado!");
        con.end();
    });

});