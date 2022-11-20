<template>
    <div class="row justify-content-start align-items-start g-2">
        {{name}}
        <div class="col">
            <h1>Product page</h1>
            <div class="row justify-content-start align-items-start g-2">
                <div class="col-6">
                    <table-compo @buy="buy" :shopFlag="true" :products="products"></table-compo>
                </div>
                <div class="col-6">
                    <table-compo :shopFlag="false" :shopping="shoppingList"></table-compo>
                </div>
                    
            </div>
        </div>
    </div>
</template>
<script>
import TableCompo from './TableCompo.vue';
import JsonService from '../services/JsonService.js';
import ProductClass from '../classes/ProductClass.js';
export default {
    name:'ProductPage',
    components:{
        TableCompo
    },
    data(){
        return{
            products:new Array(),
            shoppingList:new Map(),
        }
    },
    methods:{
        loadProducts(){
            JsonService.getJson()
            .then((res)=>{
                this.products = res.data;
            })
            .catch((e)=>console.log(e));
        },
        buy(idx){
            let product = this.products[idx];
            let selectedProduct = null;
            if(this.shoppingList.has(product.pId)){
                selectedProduct = this.shoppingList.get(product.pId);
                selectedProduct.amount = selectedProduct.amount + 1;
            }else{
                selectedProduct = new ProductClass(product.pId,product.pName,product.price);
            }
            this.shoppingList.set(product.pId,selectedProduct);
            
        }
    },
    mounted(){
        this.loadProducts();
    }
}
</script>