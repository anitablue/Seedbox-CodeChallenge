<template>
    <div v-if="products" class="container">
        <header class="jumbotron">
            <h3>Welcome {{currentUser.name}} to your supplier board!</h3>
        </header>
        <div class="row py-3">
            <a href="#" @click="goToEdit" class="btn btn-secondary">Add new product</a>
        </div>
        <div class="row py-3"> <h3>My products</h3></div>
        <div class="row">
            <ProductGrid :products="products"></ProductGrid>
        </div>
</div>
</template>

<script>
import CommerceService from "../services/CommerceService";
import ProductGrid from './ProductGrid.vue';

export default {
    components: { 
        ProductGrid
    },
    data(){
        return{
            products:[],
        }
    },
    computed:{
        currentUser() {
            return this.$store.state.auth.user;
        },
    },
    mounted() {
     this.loadAllProducts();
    },
    methods:{
        loadAllProducts(){
            CommerceService.getAllProducts()
            .then(response => {
                        console.log('product', response.data);
                        console.log('supplier',  this.currentUser.name);
                        this.products = response.data.filter(p => p.companyName == this.currentUser.data.name);
                    })
                    .catch(e => {
                        console.log(e);
                    });
        },
        goToEdit(){
            this.$router.push({name: 'newProduct'});
        },
    },
}
</script>