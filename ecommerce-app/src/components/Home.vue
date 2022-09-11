<template>
    <div class="container" v-if="products">
      <header class="jumbotron">
        <h3>{{ content }}</h3>
      </header>
      <body>
        <div class="container">
        <h3 class="p-3 text-center">Welcome to the Buildzon!</h3>
        <h3 class="p-3 text-center">Find quality materials or become a supplier</h3>
        <table class="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Location</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="product in products" :key="product._id">
                    <td>{{product.name}}</td>
                    <td>{{product.location}}</td>
                    <td>{{product.price}}</td>
                </tr>
            </tbody>
        </table>
    </div>  
      </body>
    </div>
  </template>
  
  <script>
  import CommerceService from "../services/CommerceService";
  
  export default {
    name: "Home",
    data() {
      return {
        content: "Ecommerce",
        products: [],
      };
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
  };
  </script>