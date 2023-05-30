<template>
    <router-view></router-view>
</template>
<script>
import Landing from './components/Landing.vue'
export default {
    name: "App",
    components : {
        Landing
    }
}
</script>