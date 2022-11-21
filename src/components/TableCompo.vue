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
                    <th v-show="!shopFlag">Amount</th>
                    <th v-show="!shopFlag">Shippment</th>
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
                            <!-- 
                                I dont know why the options are not populating the select tag.
                                I tested the select and options outside the td and it was working
                             -->
                            <select v-model="selCity">
                                <option value="x.city" v-for="(x,idx) in cities" :key="idx">
                                    {{x.city}}
                                </option>
                            </select>
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
                    <tr>
                        <td colspan="3">Total: {{total}}</td>
                        <td colspan="4">
                            <button type="button" class="btn btn-outline-success" @click="checkout()">Checkout</button>
                        </td>
                    </tr>                    
                </tfoot>
        </table>
    </div>
    
</template>
<script>
export default {
    name:'TableCompo',
    props:['products','shopping','shopFlag','total', 'cities'],
    data(){
        return{
            shop:this.shopping,
            selCity:''
        }
    },
    methods:{
        buy(idx){
            this.$emit('buy',idx);
        },
        deletesh(pId){
            this.$emit('deletesh',pId);
        },
        checkout(){

            this.$emit('cartList', this.shop);
            // console.log('Information from TableCompo ')
            // console.log(this.shop)
            // this.$router.push('/cart')
        }
    }
}
</script>