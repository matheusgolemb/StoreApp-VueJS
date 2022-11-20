<template>
    <div class="table-responsive">
        <table class="table table-striped
        table-hover	
        table-borderless
        table-primary
        align-middle">
            <thead class="table-light">
                <tr>
                    <th>Product Name</th>
                    <th colspan="2">Price</th>
                </tr>
                </thead>
                <tbody v-if="shopFlag" class="table-group-divider">
                    <tr  class="table-primary" v-for="(product,idx) in products" :key="idx" >
                        <td scope="row">{{product.pName}}</td>
                        <td>{{product.price}}</td>
                        <td>
                            <button type="button" class="btn btn-outline-primary" @click="buy(idx)">Buy</button>
                        </td>
                    </tr>
                </tbody>
                <tbody v-else class="table-group-divider">
                    <tr  class="table-primary" v-for="(product,idx) in shoppingList" :key="idx" >
                        <td>{{product[1].pId}}</td>
                        <td scope="row">{{product[1].pName}}</td>
                        <td>{{product[1].price}}</td>
                        <td>
                            <button type="button" class="btn btn-outline-primary" @click="buy(idx)">Buy</button>
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    
                </tfoot>
        </table>
    </div>
    
</template>
<script>
export default {
    name:'TableCompo',
    props:['products','shopping','shopFlag'],
    data(){
        return{
            shop:''
        }
    },
    methods:{
        buy(idx){
            this.$emit('buy',idx);
        }
    }
}
</script>