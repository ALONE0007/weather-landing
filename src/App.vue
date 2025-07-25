<template>
    <div>
        <headers />
        <router-view></router-view>
    </div>
</template>
<script>
import headers from "./components/Landing-Page-Responsive/headers.vue";
import hero from "./components/Landing-Page-Responsive/hero.vue";

export default {
  name: "App",
  components: {
    headers,
  },
};
</script>
