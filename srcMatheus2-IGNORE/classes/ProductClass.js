class ProductClass{
    pId;
    pName;
    price;
    amount;
    tax = 0.1;
    constructor(pId,pName,price){
        this.pId = pId;
        this.pName = pName;
        this.price = price;
        this.amount = 1;
    }
    total(){
        return this.price * this.amount;
    }
    totalWtax(){
        return this.total() + (this.total()*this.tax);
    }
    get amount(){
        return parseInt(this.amount);
    }
    set amount(newAmount){
        this.amount = newAmount;
    }
    toObject(){
        return {
            pId:this.pId,
            pName:this.pName,
            price:this.price,
            amount:this.amount
        }
    }
}

export default ProductClass;