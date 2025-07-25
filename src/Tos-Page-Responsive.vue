<template>

    <tos />
    <MyFooter />

</template>

<script>

import tos from './components/TosPageResponsive/tos.vue'
import MyFooter from './components/Landing-Page-Responsive/MyFooter.vue'

export default {
    name:"TosPage",
    components:{
      tos,
      MyFooter
    }

}

</script>