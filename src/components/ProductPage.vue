<template>
    <div class="row justify-content-start align-items-start g-2">
        <!-- {{name}} -->
        <div class="col">
            <h1>Product page</h1>
            <div class="row justify-content-start align-items-start g-2">
                <div class="col-4">
                    <table-compo @buy="buy" :shopFlag="true" :products="products" :cities="cities"></table-compo>
                </div>
                <div class="col-8">
                    <table-compo @deletesh="deleteEv" :total="total" :shopFlag="false" :shopping="shoppingList" @cartList="updateCart"></table-compo>
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
    props:['shopping', 'cartList'],
    data(){
        return{
            products:new Array(),
            shoppingList:new Map(),
            total:0,
            cities: new Array(),
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
        loadCities(){
            JsonService.loadCities()
            .then((res)=>{
                this.cities = res.data;
            })
            .catch((e)=>{
                console.log('Error loading cities.json')
                console.log(e)
            })
        },
        calTotal(){
            this.total = 0;
            this.shoppingList.forEach((product)=>{
                this.total += product.totalWtax();
            })
            this.total = this.total.toFixed(2)
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
            this.calTotal();   
        },
        deleteEv(pId){
            this.shoppingList.delete(pId);
            this.calTotal();
        },
        updateCart(cartList){
            this.shoppingList = cartList
            this.$emit('newCart', cartList)
            // console.log('Information from ProductPage: ')
            // console.log(cartList)
        }
    },
    mounted(){
        this.loadProducts();
        this.loadCities();
    }
}
</script>