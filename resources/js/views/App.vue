<template>
    <div class="container-fluid p-0">
        <Header/>
        <router-view></router-view>
    </div>
</template>

<script>
import Main from '../components/Main.vue';
import Header from '../components/Header.vue';
export default {
    name: 'App',
    components: {
        Main,
        Header,

    }

}
</script>

<style lang="scss">

</style>