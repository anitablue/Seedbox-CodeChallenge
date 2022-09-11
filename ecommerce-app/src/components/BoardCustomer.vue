<template>
    <div v-if="products" class="container">
        <header class="jumbotron">
            <h3>Welcome {{currentUser.firstName}} {{currentUser.lastName}} to your customer board!</h3>
        </header>
        <div class="row">
            <ProductGrid :products="products"></ProductGrid>
        </div>
        <div class="row py-3">
            <h5>Product locations</h5>
        </div>
        <div class="row">
            <img src="map-dummy.PNG" alt="I am just a dummy map" width="500"/>
        </div>
</div>
</template>

<script>
    import CommerceService from "../services/CommerceService";
import ProductGrid from './ProductGrid.vue';

export default {
    components: { ProductGrid },
    data(){
        return{
            products:[],
        }
    },
    computed:{
        currentUser() {
            return this.$store.state.auth.user.data;
        },
    },
    mounted() {
     this.loadAllProducts();
    },
    methods:{
        loadAllProducts(){
            CommerceService.getAllProducts()
            .then(response => {
                        this.products = response.data;
                    })
                    .catch(e => {
                        console.log(e);
                    });
        },
    },
}
</script>