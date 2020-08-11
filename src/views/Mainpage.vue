<template>
  <div class="promo">
    <div class="promo-left">
        <h1>JAZZME</h1>
        <h1>Благодарить - это так приятно!</h1>
        <div class="form-group">
            <input type="button" class="btn btn-success" value="Регистрация">
            <input type="button" class="btn btn-outline-success" v-on:click="login()" value="Вход">
        </div>
    </div>
    <div class="promo-right"></div>
  </div>
</template>

<script>
/*eslint-disable*/
export default {
methods:{
    login(){
        this.$router.push({name: 'Login'})
    }
}
}
</script>

<style>

</style>