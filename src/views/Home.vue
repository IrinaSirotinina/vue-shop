<template>
  <div class="home">
    <Navbar></Navbar>
      <Hero/>
      
      <products-list></products-list>

      <div class="container h-100">
        <div class="row p-5 h-100 justify-content-center align-items-center">
          <div class="col-md-6">
            <img src="/img/light.jpg" alt="" width="500">
          </div>
          <div class="col-md-6">
            <h3>Learn More About us</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quaerat voluptate iusto? Nihil voluptas vitae veritatis magnam reprehenderit, reiciendis ex? Libero quasi natus veniam voluptatum, voluptas exercitationem ratione consectetur et!
            </p>
             <router-link to="/about" class="btn btn-primary" href="#">About</router-link>
          </div>
        </div>
      </div>
      <login></login>

      <mini-cart></mini-cart>

  </div>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/Hero.vue";
import Login from "@/components/Login.vue";


export default {
  name: "home",
  components: {
    Hero,Login
  }
};
</script>
