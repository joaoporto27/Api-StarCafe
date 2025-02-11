const { v4: uuid4 } = require("uuid");

class Cafe {
    constructor(produto, preco) {
        this.id = uuid4();
        this.produto = produto;
        this.preco = preco;
    }
}

module.exports = Cafe;