<template>

    <hero />
    <moodiSky />
    <plan />
    <comments />
    <faq />
    <download />
    <MyFooter />

</template>

<script>


import ShowingBox from './components/Landing-Page-Responsive/showingBox.vue';
import hero from './components/Landing-Page-Responsive/hero.vue';
import moodiSky from './components/Landing-Page-Responsive/MoodiSky.vue';
import plan from './components/Landing-Page-Responsive/plan.vue';
import comments from './components/Landing-Page-Responsive/comments.vue';
import faq from './components/Landing-Page-Responsive/faq.vue';
import download from './components/Landing-Page-Responsive/download.vue';
import MyFooter from './components/Landing-Page-Responsive/MyFooter.vue';

export default {
    name:"landing",
    components:{
        ShowingBox,
        hero,
        moodiSky,
        plan,
        comments,
        faq,
        download,
        MyFooter,
    }

}

</script>