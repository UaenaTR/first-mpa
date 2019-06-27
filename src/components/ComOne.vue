<template>
    <div id="ComOne">
        <div class="com-one"></div>
        <cube-button @click='skipHome' class="skip-home">To Home</cube-button>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {

        };
    },
    components: {

    },
    computed: {

    },
    created() {

    },
    mounted() {

    },
    watch: {

    },
    methods: {
        skipHome(){
            this.$router.push('/Home')
        }
    },
};
</script>

<style scoped lang="scss">
    #ComOne{
        margin-top: 20px;

        .com-one{
            width: 100%;
            height: 50px;
            background-color: #ccc;
        }

        .skip-home{
            width: 150px;
            height: 60px;
            background-color: pink;
            margin: 20px auto;
            border-radius: 20px;
        }
    }
</style>
