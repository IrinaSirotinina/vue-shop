<template>
  <div class="checkout">
       <Navbar></Navbar>

        <div class="container mt-5 pt-5">

            <div class="row">

                <div class="col-md-8">
                    <h4 class="py-4">Checkout page</h4>
                     <ul>
                        <li v-for="item in this.$store.state.cart" :key="item.id" class="media">
                        <img :src="item.productImage" width="80px" class="align-self-center mr-3" alt="">
                        <div class="media-body">
                            <h5 class="mt-0">{{item.productName}}

                                <span class='float-right' @click="$store.commit('removeFromCart',item)">X</span>

                            </h5>
                            <p class="mt-0">{{item.productPrice | currency}}</p>
                            <p class="mt-0">Quantity : {{item.productQuantity }}</p>
                        </div>
                        </li>

                    </ul>
                </div>
                <div class="col-md-4">
                    <p>
                        Total Price : {{ this.$store.getters.totalPrice | currency }}
                    </p>

                     <card class='stripe-card'
                        :class='{ complete }'
                        stripe='pk_test_ZUIUnN2sNcLgBreOPdSDtl3F00IpggVyNo'
                        :options='stripeOptions'
                        @change='complete = $event.complete'
                        />

                    <!-- checkout button not working -->
                    <button class="btn btn-primary" @click="pay">Checkout</button>
                  
                </div>
            </div>

        </div>
  </div>
</template>


<script>
import axios from 'axios';

var stripe = Stripe('pk_test_ZUIUnN2sNcLgBreOPdSDtl3F00IpggVyNo');

export default {
    data () {
      return {
         sessionId: ''
      }
    },

  methods: {

    pay() {

              let data = this.$store.state.cart.map(item => ({ [item.productId] : item.productQuantity}));

              //convert array to object
              data = Object.assign({}, ...data);

              axios.get('https://us-central1-vue-shop-b598c.cloudfunctions.net/CheckoutSession', {
                params: {
                  products: data
                }
              })
              .then(response => {
                this.sessionId = response.data
                console.log(response.data);

               stripe.redirectToCheckout({
            // Make the id field from the Checkout Session creation API response
            // available to this file, so you can provide it as parameter here
            // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
            sessionId: this.sessionId.id
          }).then(function (result) {
            // If `redirectToCheckout` fails due to a browser or network
            // error, display the localized error message to your customer
            // using `result.error.message`.
          });
              })
              .catch(error => {
                console.log(error);
              });

           
    }
  },

    created() {

      
    }
}  
</script>

