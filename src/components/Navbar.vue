<template>
  <div class="hello">

   <nav class="navbar custom-nav fixed-top navbar-expand-lg navbar-light bg-light" v-bind:class=" { 'navbarOpen': show }">
     <div class="container">
        <router-link class="navbar-brand" to="/">Vue Shop</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" @click.stop="toggleNavbar()">
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- toggle not working, nav not responsive, won't drop down -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent" v-bind:class="{ 'show': show }">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link" href="#">About</router-link>
            </li>
          
          </ul>
          <form class="form-inline my-2 my-lg-0">
           
            <a class="btn btn-outline-success my-2 my-sm-0" data-toggle="modal" data-target="#login">Log In</a>
            <a class="btn btn-outline-info border-0 mx-2 my-2 my-sm-0" data-toggle="modal" data-target="#miniCart">
              <i class="fas fa-cart-plus"></i>
            </a>
          </form>
        </div>

     </div>

</nav>
    
  </div>
</template>

<script>

export default {
  name: "Navbar",
  props: {
    msg: String
   },
   data() {
    return {
      show: true
    }
  },
  methods: {
    toggleNavbar() {
      this.show = !this.show
    }
  }
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
       @media (min-width: 992px) { 
    
    .navbar.custom-nav{
      padding-top:16px;
      padding-bottom:16px;
      background-color:#fff !important;
      
    }
  }
</style>
