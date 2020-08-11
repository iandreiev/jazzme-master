<template>
  <div class="promo-center">
  <h1>Вход</h1>
    <div class="form-group">
        <input type="email" class="form-control" v-model="l_username" autocomplete="off" name="email" id="username" placeholder="Username" />
        <input type="password" class="form-control" v-model="l_password" name="password" id="password" placeholder="Пароль" />
        <input type="submit"  class="btn btn-success" value="Войти" />
        <hr class="custom">
        <h4>Нет аккаунта? <span class="text-green pointer" v-on:click="register()">Зарегистрируйтесь</span> </h4>
    </div>
       <router-link to="/" class="link link-regular">На главную</router-link>

  </div>
</template>

<script>
/*eslint-disable*/
import axios from "axios"
import firebase from "firebase"

const baseURL = "http://340305-ck48391.tmweb.ru/api/"
const version = "v2"

export default {
    data(){
        return{
            username:null,
            email: null,
            token: null,
            err: null,
            l_username: null,
            l_password:null,
            r_token: null
        }
    },
    methods:{
        auth(){
            console.log(
                "Login: " + this.l_username,
                "Password:" + this.l_password                 
            )
        },
        register(){
            const provider = new firebase.auth.GoogleAuthProvider();

            firebase
            .auth()
            .signInWithPopup(provider)
            .then(response=>{
                this.username = response.user.displayName
                this.email = response.user.email
                this.token = response.credential.idToken

                console.info(response)
                
                var bodyFormData = new FormData();
                bodyFormData.set('name', this.username);
                // bodyFormData.set('auth_token', this.token);
                bodyFormData.set('email', this.email);
                
                axios({
                    url: baseURL + version + "/user/register", 
                    method: 'post',
                    data: bodyFormData,
                    headers: {'Content-Type': 'multipart/form-data; boundary=l3iPy71otz'}
                })
                .then(response=>{
                    this.r_token = response.data.token
                    console.log(response.data)
                    localStorage.setItem("token", JSON.stringify(this.r_token));

                })
                .catch(error => {
                    console.log(error)
                })
            })
            .catch(error => {
                this.err = error
                console.log(error)
            })

        }
    }
}
</script>

<style>

</style>