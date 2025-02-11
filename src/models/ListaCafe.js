const { error } = require("console");

class CafeList {
    constructor() {
        this.cafes = [];
    }

    addCafe(cafe) {
        this.cafes.push(cafe);
    }

    getAllCafes (){
        return this.cafes;
    } 

    getCafeById(id) {
        const cafe = this.cafes.find(cafe => cafe.id == id);
        if (!cafe){
            throw new Error("Pedido não encontrado");
        }
        return cafe;
    }

    updateCafe(id, updateData){
        const cafe = this.getCafeById(id);
        Object.assign(cafe, updateData);
        return cafe;
    }

    deleteCafe(id) {
        this.cafes = this.cafes.filter(cafe => cafe.id != id);
    }

}

module.exports = CafeList;