<template>
    <div>
        <header class="jumbotron">
            <h3>Create new product</h3>
        </header>
    
    <div class="col-md-12">
      <div class="card card-container">
        <Form @submit="handleRegister" :validation-schema="schema">
          <div v-if="!successful">
            <div class="form-group">
              <label for="name">Name</label>
              <Field name="name" type="text" class="form-control" />
              <ErrorMessage name="name" class="error-feedback" />
            </div>
            <div class="form-group">
              <label for="location">Location</label>
              <Field name="location" type="text" class="form-control" />
              <ErrorMessage name="location" class="error-feedback" />
            </div>
            <div class="form-group">
              <label for="price">Price</label>
              <Field name="price" type="text" class="form-control" />
              <ErrorMessage name="price" class="error-feedback" />
            </div>
            <div class="form-group">
              <label for="amount">Amount</label>
              <Field name="amount" type="text" class="form-control" />
              <ErrorMessage name="amount" class="error-feedback" />
            </div>
            <div class="form-group">
              <label for="unit">Unit</label>
              <Field name="unit" type="text" class="form-control" />
              <ErrorMessage name="unit" class="error-feedback" />
            </div>
  
            <div class="form-group">
              <button class="btn btn-primary btn-block" :disabled="loading">
                <span
                  v-show="loading"
                  class="spinner-border spinner-border-sm"
                ></span>
                Create product
              </button>
            </div>
          </div>
        </Form>
  
        <div
          v-if="message"
          class="alert"
          :class="successful ? 'alert-success' : 'alert-danger'"
        >
          {{ message }}
        </div>
      </div>
    </div>
</div>
</template>
  
  <script>
  import { Form, Field, ErrorMessage } from "vee-validate";
  import * as yup from "yup";
  import CommerceService from '../services/CommerceService';
  
  export default {
    name: "Register",
    components: {
      Form,
      Field,
      ErrorMessage,
    },
    data() {
      const schema = yup.object().shape({
        name: yup
          .string()
          .required("Name is required!")
          .min(3, "Must be at least 3 characters!")
          .max(20, "Must be maximum 20 characters!"),
        location: yup
          .string()
          .required("Location is required!"),
        price: yup
          .string()
          .required("Price is required!"),
        amount: yup
          .number()
          .required("Amount is required!"),
        unit: yup
          .string()
          .required("Unit is required!"),
      });
  
      return {
        successful: false,
        message: "",
        schema,
      };
    },
    computed: {
        currentUser() {
            return this.$store.state.auth.user;
        },
    },
    mounted() {
    },
    methods: {
      handleRegister(product) {
        this.message = "";
        this.successful = false;
        this.loading = true;

        const data = {
            name: product.name,
            location: product.location,
            price: product.price,
            amount: product.amount,
            companyName: this.currentUser.data.name,
            distance: Math.floor(Math.random() * 101),
            unit: product.unit,
        };
  
        CommerceService.createProduct(data).then(
          (data) => {
            this.message = data.message;
            this.successful = true;
            this.loading = false;
            this.$router.push({name: 'supplier'});
          },
          (error) => {
            this.message =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
            this.successful = false;
            this.loading = false;
          }
        );
      },
    },
  };
  </script>
  
  <style scoped>
  label {
    display: block;
    margin-top: 10px;
  }
  
  .card-container.card {
    max-width: 350px !important;
    padding: 40px 40px;
  }
  
  .card {
    background-color: #f7f7f7;
    padding: 20px 25px 30px;
    margin: 0 auto 25px;
    margin-top: 50px;
    -moz-border-radius: 2px;
    -webkit-border-radius: 2px;
    border-radius: 2px;
    -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  }
  
  .profile-img-card {
    width: 96px;
    height: 96px;
    margin: 0 auto 10px;
    display: block;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
  }
  
  .error-feedback {
    color: red;
  }
  </style>