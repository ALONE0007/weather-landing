<template>
    <hero />
    <why-juniper/>
    <SpecsClouds />
    <my-footer/>
</template>
<script>

import hero from './components/info-page-responsive/hero.vue'
import whyJuniper from './components/info-page-responsive/whyJuniper.vue'
import SpecsClouds from './components/info-page-responsive/SpecsClouds.vue';
import MyFooter from './components/Landing-Page-Responsive/MyFooter.vue';


export default {
    name:'info',
    components:{
        hero,
        whyJuniper,
        SpecsClouds,
        MyFooter
    }
}
</script>
<style>
    
</style>