const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://127.0.0.1:27017';
const cliente = new MongoClient(url, {
 useNewUrlParser: true, 
 useUnifiedTopology: true });

 async function inserir() {
    try {
    await cliente.connect();
    console.log("Conectado!");
    const banco = cliente.db('loja');
    await banco.collection('produtos').insertOne({ codigo: 10, descricao: 'Lava Louças', preco: 2500});
    }
    
    finally {
    console.log("Inserido!");
    await cliente.close();
    }
   }
   inserir();