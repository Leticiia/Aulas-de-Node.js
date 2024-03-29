const MongoClient =
    require('mongodb').MongoClient;
const url = 'mongodb://127.0.0.1:27017';
const cliente = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
async function aplicarDesconto() {
    try {
        await cliente.connect();
        console.log("Conectado!");
        const banco = cliente.db('loja');
        await banco.collection('produtos').updateMany(
                { preco: { $gt: 2000.00 } },
                { $mul: { preco: 0.9 } }
            );
    }
    finally {
        console.log("Alterado!");
        await cliente.close();
    }
};

aplicarDesconto();

