<template>
    <div class="home-container">
        <itemcontainer father-component="home"></itemcontainer>
    </div>
</template>
<script>
    import itemcontainer from '../../components/itemcontainer'
    export default {
        name:'home',
        components:{
            itemcontainer
        },
        created(){

        }
    }
</script>
<style lang="scss" scoped>
    .home-container{
    }
</style>