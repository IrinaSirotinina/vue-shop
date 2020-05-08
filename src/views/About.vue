<template>
  <div class="about">
    <Navbar></Navbar>
      
      <div class="container h-100">
        <div class="row p-5 h-100 justify-content-center align-items-center">
          <div class="col-md-6">
            <img src="/img/front1.jpg" alt="" width="350">
          </div>
          <div class="col-md-6">
            <h3>Learn More About us</h3>
            <p>
             We are a small company dedicated to providing our customers with the best of the best. 
             Browse the best of timepieces... for men and women. Look stylish, be on time!
            </p>
            <hr>
            <p>Business Hours: 9 - 5 Weekdays <br>
              10-3 Saturdays<br>
              Closed Sundays
            </p>
            <hr>
            <p>
              1345 Water Street<br>
              Markham, On<br>
              N2H 5A5<br>
              519-783-3704
            </p>
          </div>
        </div>
      </div>
      <login></login>

      <mini-cart></mini-cart>

  </div>
</template>

<script>
// @ is an alias to /src


import Login from "@/components/Login.vue";


export default {
  name: "about",
  components: {
    Login
  }
};
</script>

