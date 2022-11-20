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
                <tbody class="table-group-divider">
                    <tr class="table-primary" v-for="(product, idx) in products" :key=idx>
                        <td scope="row">{{product.pName}}</td>
                        <td>{{product.price}}</td>
                        <td><button type="button" class="btn btn-outline-primary" @click="buyProduct(product)">Buy</button>
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
    name: 'TableCompo',
    props: ['products'],
    methods:{
        buyProduct(product){
            this.$emit('buyProduct', product)
        }
    }
}
</script>