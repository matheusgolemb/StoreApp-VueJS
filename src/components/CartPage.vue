<template>
    <div>
        <h1>Shopping Cart page</h1>
        <!-- {{shoppingList}} -->
        <div class="table-responsive">
            <table class="table table-striped
            table-hover	
            table-borderless
            table-primary
            align-middle">
                <thead class="table-light">
                    <tr>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Amount</th>
                        <th>Total</th>
                        <th>Shippment</th>
                        <th>Tax</th>
                        <th>Option</th>
                    </tr>
                    </thead>
                    <tbody class="table-group-divider">
                        <tr  class="table-primary" v-for="(product,idx) in cartList" :key="idx" >
                            <td scope="row">{{product[1].pName}}</td>
                            <td>{{product[1].price}}</td>
                            <td>
                                {{product[1].amount}}
                            </td>
                            <td>
                                <select v-model="selCity">
                                    <!-- I couldnt populate the options -->
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
                    </tbody>
                    <tfoot v-show="!shopFlag">
                        <tr>
                            <!-- couldnt make it update automatically and get the shipTax value. Delete is not working also -->
                            <td colspan="4">Total: {{total}}</td>
                            <td colspan="3">
                                <button type="button" class="btn btn-outline-success" @click="checkout()">Checkout</button>
                            </td>
                        </tr>                    
                    </tfoot>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    name: 'CartPage',
    props:['cartList', 'shipTax', 'cities'],
    data(){
        return{
            total:0,
            cartMap:this.cartList,
        }
    },
    watch: {
        cartMap: {
        handler() {
            this.calTotal()
        },
        deep: true
        }
    },
    methods:{
        deletesh(pId){
            this.$emit('deletesh',pId);
        },
        calTotal(){
            if(this.cartMap.size>0){
                this.total = 0;
                this.cartMap.forEach((product)=>{
                    this.total += product.totalWtax();
                })
            }
            this.total = this.total.toFixed(2)
        },
        checkout(){
            this.$emit('cartList', this.cartMap);
            // console.log('Information from TableCompo ')
            // console.log(this.cartMap)
            this.$router.push('/product')
        }
    },
    mounted(){
        this.calTotal()
    }
}
</script>