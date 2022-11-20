<template>
    <div class="row justify-content-start align-items-start g-2">
        <div class="col">
          <h1>Product page</h1>
          <div class="row justify-content-star align-items-star g-2">
            <div class="col-6">
                <table-compo :products="products" @buyProduct="buy"></table-compo>
            </div>
            <div class="col-6">
                <table-compo></table-compo>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
import TableCompo from './TableCompo.vue';
import JsonService from '../services/JsonService.js';
import ProductClass from '../classes/ProductsClass.js';

export default {
    name: 'ProductPage',
    components:{
        TableCompo
    },
    data(){
        return{
            products: new Array(),
            shoppingList: new Map()
        }
    },
    methods:{
        loadProducts(){
            JsonService.getJson()
            .then((res)=>{
                // console.log(res);
                this.products = res.data;
                // console.log(this.products)
            })
            .catch((e)=>{
                console.log(e);
            })
        },
        buy(product){
            // console.log(`${product.pName}  ${product.price}`);
            // newProduct = new ProductClass(product)
            if(this.shoppingList.has(product.pId)){
                const selectedProduct = this.shoppingList.get(product.pId)
                // selectedProduct.amount +=1;
            }else{
                const selectedProduct = new ProductClass(product.pId, product.pName, product.price)
                this.shoppingList.set(product.pId, selectedProduct)
            }
            console.log(this.shoppingList)
        }
    },
    mounted(){
        this.loadProducts();
    }
}
</script>