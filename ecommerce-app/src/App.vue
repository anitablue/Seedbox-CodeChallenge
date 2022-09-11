<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <a href="/" class="navbar-brand">Buildzon</a>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/home" class="nav-link">
            <font-awesome-icon icon="home" /> Home
          </router-link>
        </li>
        <li v-if="isCustomer" class="nav-item">
          <router-link to="/customer" class="nav-link">Customer Board</router-link>
        </li>
        <li v-if="isSupplier" class="nav-item">
          <router-link to="/supplier" class="nav-link">Supplier Board</router-link>
        </li>
        <li v-if="currentUser" class="nav-item">
          <router-link  to="" class="nav-link">User profile</router-link>
        </li>
        <li v-if="isCustomer" class="nav-item">
          <router-link to="" class="nav-link">Shooping cart</router-link>
        </li>
      </div>

      <div v-if="!currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="" class="nav-link">
            <font-awesome-icon icon="user-plus" /> Sign Up
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link">
            <font-awesome-icon icon="sign-in-alt" /> Login
          </router-link>
        </li>
      </div>

      <div v-if="currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
            <div class="nav-link">
              <font-awesome-icon icon="user" />
              {{ currentUser.data.userName }}
            </div>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click.prevent="logOut">
            <font-awesome-icon icon="sign-out-alt" /> LogOut
          </a>
        </li>
      </div>
    </nav>

    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    isCustomer() {
      return (this.currentUser && this.currentUser.data.loginastype == 'Customer');
    },
    isSupplier() {
      return( this.currentUser && this.currentUser.data.loginastype == 'Supplier');
    },
  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
  }
};
</script>