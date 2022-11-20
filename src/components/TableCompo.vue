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
                    <th v-show="shopFlag" colspan="2">Price</th>
                    <th v-show="!shopFlag" colspan="1">Price</th>
                    <th v-show="!shopFlag">amount</th>
                    <th v-show="!shopFlag">Total</th>
                    <th v-show="!shopFlag">Tax</th>
                    <th v-show="!shopFlag">Option</th>
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
                    <tr  class="table-primary" v-for="(product,idx) in shopping" :key="idx" >
                        <td scope="row">{{product[1].pName}}</td>
                        <td>{{product[1].price}}</td>
                        <td>
                            {{product[1].amount}}
                        </td>
                        <td>
                            {{product[1].total()}}
                        </td>
                        <td>
                            {{product[1].totalWtax()}}
                        </td>
                        <td>
                            <button type="button" class="btn btn-outline-danger" @click="deletesh(product[1].pId)">X</button>
                        </td>
                    </tr>
                </tbody>
                <tfoot v-show="!shopFlag">
                    Total: {{total}}
                </tfoot>
        </table>
    </div>
    
</template>
<script>
export default {
    name:'TableCompo',
    props:['products','shopping','shopFlag','total'],
    data(){
        return{
            shop:this.shopping,
        }
    },
    methods:{
        buy(idx){
            this.$emit('buy',idx);
        },
        deletesh(pId){
            this.$emit('deletesh',pId);
        }
    }
}
</script>