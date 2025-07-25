<template>
    <router-view />
    <goToTest />
</template>
<script>

import test from './components/test.vue';
import goToTest from './components/goToTest.vue';

export default {
    name:'app',
    components:{
        test,
        goToTest
    }
}
</script>
<style>
    
</style>