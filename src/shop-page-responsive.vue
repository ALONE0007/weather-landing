<template>

  <hero />
  <weatherMobiles />
  <SubscriptionPlans />
  <MyFooter />

</template>

<script>

import MyFooter from "./components/Landing-Page-Responsive/MyFooter.vue";
import hero from "./components/shop-page-responsive/hero.vue";
import weatherMobiles from "./components/shop-page-responsive/weatherMobiles.vue";
import SubscriptionPlans from './components/shop-page-responsive/SubscriptionPlans.vue'

export default {
  name: "TosPage",
  components: {
    hero,
    MyFooter,
    weatherMobiles,
    SubscriptionPlans
  },
};

</script>

