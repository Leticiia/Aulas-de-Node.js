var fs = require('fs');
var http = require("http");
var express = require('express');
var mysql = require('mysql');

var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });

// https://icons.getbootstrap.com/
var caneta = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16"><path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/></svg>';
var lixo = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16"><path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/></svg>';

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "loja"
});

con.connect(function (erro) {
    var servidor = app.listen(8080, function () {
        var porta = servidor.address().port;
        console.log("Servidor executando na porta % s", porta);
    });
    app.get('/', function (req, res) {
        fs.readFile('principal.html', function (erro, dado) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(dado);
            res.end();
        });
    });
    // Implementar o restante do programa
    // a partir deste ponto.
    app.get('/produtos', function (req, res) {
        fs.readFile('produtos.html',
            function (erro, dado) {
                con.query("SELECT * FROM produto",
                    function (erro, resultado) {
                        if (erro) throw erro;
                        var tabela = "<table class='tabletable - hover'>"
                            + "<tr class='table-primary'>"
                            + "<td>Operações</td><td>Código</td>"
                            + "<td>Descrição</td>"
                            + "<td>Preço</td></tr>";
                        for (var i = 0; i < resultado.length;
                            i++) {
                            tabela += "<tr><td>" +
                                "<a href='/editar-produto?cod=" +
                                resultado[i].codigo +
                                "' class='btn btn-primary btnsm'>" + caneta + "</a> " +
                                "<a href='/apagar-produto?cod=" +
                                resultado[i].codigo + "' class='btn btn-primary btnsm'>" + lixo + "</a></td>" +
                                "<td>" + resultado[i].codigo +
                                "</td>" +
                                "<td>" + resultado[i].descricao +
                                "</td>" +
                                "<td align='right'>" +
                                resultado[i].preco.toFixed(2) + "</td>";
                            "</tr>";
                        }
                        tabela += "</table>";
                        dado = dado.toString().replace(
                            "{{tabela}}", tabela);
                        res.writeHead(200, {
                            'Content-Type': 'text/html'
                        });
                        res.write(dado);
                        res.end();
                    });
            });
    });

    app.get('/novo-produto', function (req, res) {
        fs.readFile('novo-produto.html', function (erro, dado) {
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.write(dado);
            res.end();
        });
    });
    app.post('/incluir-produto', urlencodedParser,
        function (req, res) {
            var cmd = "INSERT INTO produto (codigo,  descricao, preco) VALUES(?, ?, ?)";
            var dados = [req.body.codigo, req.body.descricao, req.body.preco];
            con.query(cmd, dados, function (erro) {
                if (erro) throw erro;
                res.redirect('/produtos');
            });
        });
    app.get('/editar-produto', function (req, res) {
        fs.readFile('editar-produto.html', function (erro, dado) {
            var codigo = req.query.cod;
            var descricao;
            var preco;
            con.query("SELECT * FROM produto WHERE codigo=" + codigo, function (erro, resultado) {
                if (erro) throw erro;
                if (resultado.length > 0) {
                    descricao = resultado[0].descricao;
                    preco = resultado[0].preco.toFixed(2);
                }
                res.writeHead(200, { 'Content-Type': 'text/html' });
                dado = dado.toString().replace("{{codigo}}", codigo);
                dado = dado.toString().replace("{{descricao}}", descricao);
                dado = dado.toString().replace("{{preco}}", preco);
                res.write(dado);
                res.end();
            });
        });
    });
    app.post('/alterar-produto', urlencodedParser, function (req, res) {
        var cmd = "UPDATE produto SET descricao=?, preco=? WHERE codigo=?";
        var dados = [req.body.descricao, req.body.preco, req.body.codigo];
        con.query(cmd, dados, function (erro) {
            if (erro) throw erro;
            res.redirect('/produtos');
        });
    });
    app.get('/apagar-produto', function (req, res) {
        var codigo = req.query.cod; con.query("DELETE FROM produto WHERE codigo=" + codigo, function (erro, resultado) {
            if (erro) throw erro;
            res.redirect('/produtos');
        });

        //aqui começa cliente
    });
    app.get('/clientes', function (req, res) {
        fs.readFile('clientes.html',
            function (erro, dado) {
                con.query("SELECT * FROM cliente",
                    function (erro, resultado) {
                        if (erro) throw erro;
                        var tabela = "<table class='tabletable - hover'>"
                            + "<tr class='table-primary'>"
                            + "<td>Operações</td><td>CPF</td>"
                            + "<td>Nome</td>"
                            + "<td>Telefone</td></tr>";
                        for (var i = 0; i < resultado.length;
                            i++) {
                            tabela += "<tr><td>" +
                                "<a href='/editar-cliente?cpf=" +
                                resultado[i].cpf +
                                "' class='btn btn-primary btnsm'>" + caneta + "</a> " +
                                "<a href='/apagar-cliente?cpf=" +
                                resultado[i].cpf + "' class='btn btn-primary btnsm'>" + lixo + "</a></td>" +
                                "<td>" + resultado[i].cpf +
                                "</td>" +
                                "<td>" + resultado[i].nome +
                                "</td>" +
                                "<td align='right'>" +
                                resultado[i].telefone + "</td>";
                            "</tr>";
                        }
                        tabela += "</table>";
                        dado = dado.toString().replace(
                            "{{tabela}}", tabela);
                        res.writeHead(200, {
                            'Content-Type': 'text/html'
                        });
                        res.write(dado);
                        res.end();
                    });
            });
    });

    app.get('/novo-cliente', function (req, res) {
        fs.readFile('novo-cliente.html', function (erro, dado) {
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.write(dado);
            res.end();
        });
    });
    app.post('/incluir-cliente', urlencodedParser,
        function (req, res) {
            var cmd = "INSERT INTO cliente (cpf,  nome, telefone) VALUES(?, ?, ?)";
            var dados = [req.body.cpf, req.body.nome, req.body.telefone];
            con.query(cmd, dados, function (erro) {
                if (erro) throw erro;
                res.redirect('/clientes');
            });
        });
    app.get('/editar-cliente', function (req, res) {
        fs.readFile('editar-cliente.html', function (erro, dado) {
            var cpf = req.query.cpf;
            var nome;
            var telefone;
            con.query("SELECT * FROM cliente WHERE cpf='" + cpf+"'", function (erro, resultado) {
                if (erro) throw erro;
                if (resultado.length > 0) {
                    nome = resultado[0].nome;
                    telefone = resultado[0].telefone;
                }
                res.writeHead(200, { 'Content-Type': 'text/html' });
                dado = dado.toString().replace("{{cpf}}", cpf);
                dado = dado.toString().replace("{{nome}}", nome);
                dado = dado.toString().replace("{{telefone}}", telefone);
                res.write(dado);
                res.end();
            });
        });
    });
    app.post('/alterar-cliente', urlencodedParser, function (req, res) {
        var cmd = "UPDATE cliente SET nome=?, telefone=? WHERE cpf=?";
        var dados = [req.body.nome, req.body.telefone, req.body.cpf];
        con.query(cmd, dados, function (erro) {
            if (erro) throw erro;
            res.redirect('/clientes');
        });
    });
    app.get('/apagar-cliente', function (req, res) {
        var cpf = req.query.cpf; con.query("DELETE FROM cliente WHERE cpf='" + cpf+"'", function (erro, resultado) {
            if (erro) throw erro;
            res.redirect('/clientes');
        });
    });

});