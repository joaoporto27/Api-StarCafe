const Cafe = require("../models/Cafe");
const CafeList = require("../models/ListaCafe");

const lista = new CafeList();

lista.addCafe(new Cafe('Café Expresso', 13.99));
lista.addCafe(new Cafe('Café Avelã', 20.99));
lista.addCafe(new Cafe('Café Brigadeiro', 19.99));
lista.addCafe(new Cafe('Café com Leite', 13.99));

const router = {
    addCafe: (req, res) => {
        try {
            const { produto, preco} = req.body;
            if(!produto || !preco) {
                throw new Error('Preencha todos os campos!');             }
            const coffee = new Cafe (produto, preco);
            lista.addCafe(coffee);
            res.status(200).json({message: 'Pedido feito com sucesso'});
        } catch (error) {
            res.status(400).json({message: "Erro ao adicionar pedido", error});
        }
    },

    getAllCafes:(req,res) => {
        try {
            const menu = lista.getAllCafes();
            res.status(200).json(menu);
        } catch (error) {
            res.status(404).json({message: 'Erro ao buscar menu', error});
        }
    },

    getCafeById: (req,res) => {
        try {
            const id = req.params.id;
            res.status(200).json(lista.getCafeById(id));
        } catch (error) {
            res.status(404).json({message: 'Erro ao buscar cafe por id', error});
        }
    },

    deleteCafe: (req, res) => {
        try {
            lista.deleteCafe(req.params.id);
            res.status(200).json({message: 'Pedido deletado com sucesso'})
        } catch (error) {
            res.status(404).json('Erro ao deletar pedido', error);
        }
    }
}

module.exports = router;