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
                            <select v-model="selCity">
                                <option value="" disabled="disabled">Select city</option>
                                <option v-for="(c, idx) in cities" :key="idx" :value="c.prov">{{c.prov}}, {{c.city}}</option>
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
                    <!-- informations are being erased after leaving the page -->
                </tbody>
                <tfoot v-show="!shopFlag">
                    <tr>
                        <td colspan="4">Total: {{this.shipTax + total}}</td>
                        <td colspan="3">
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
            selCity:'',
            shipTax:0   
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
            this.$router.push('/cart')
        }
    },
    watch:{
        selCity(){
            if(this.selCity=="ON"){
                this.shipTax = 50
            }
            if(this.selCity=="AB"){
                this.shipTax = 20
            }
            if(this.selCity=="BC"){
                this.shipTax = 0
            }
            this.$emit('calshipTax', this.shipTax)
        }
    }
}
</script>