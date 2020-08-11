<template>
<div>
    <input type="button" v-on:click="register()" name="register" id="register" value="register">
    <hr>
    <input type="text" name="login" id="login" v-model="l_username" placeholder="Email">
    <input type="password" name="password" id="password" v-model="l_password" placeholder="Password">
    <input type="submit" v-on:click="auth()" value="submit" name="send" id="send">
</div>
</template>

<script>
/*eslint-disable*/
import axios from "axios"
import firebase from "firebase"

const baseURL = "https://dev.jazzme.app/"
const version = "v2"
//Methods
const getTxHistory = "/post/all"
export default {
    data(){
        return{
            username:null,
            email: null,
            token: null,
            err: null,
            l_username: null,
            l_password:null
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
                localStorage.setItem("token", JSON.stringify(this.token));

                let config = {
                    headers:{
                        Authorization: `Bearer ${this.token}`
                    }
                }

                const formData = new FormData();
                formData.append('email', this.email);
                formData.append('auth_token', this.token);
                formData.append('name', this.displayName)

                axios.post( baseURL + version + "/user/register", config, formData)
                .then(response=>{
                    console.log(response)
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
    },
    mounted(){
//             let config = {
//         url: baseURL + version + getTxHistory,  
//         method: 'GET',
//         headers:{
//             Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiNzkiLCJlbWFpbCI6ImRlcm9kcm9sbEBnbWFpbC5jb20iLCJtbmVtb25pYyI6Imhvcm4gZ2x1ZSB0b3JuYWRvIGVhcnRoIHNlbnRlbmNlIHNpZ24gdm9pZCBkZXRlY3QgZW1iYXJrIGdlbnJlIGZhbnRhc3kgcHVscCIsInVzZXJuYW1lIjoiYTMyYjgwYThiZDJhIiwiYWRkcmVzcyI6Ik14ZTg0MzcyOGNlN2UyMWJmY2EyZGI2YTY3MDc5ZTAzMWM0MjcyZGUzZSIsImRlc2NyaXB0aW9uIjoiYTMyYjgwYThiZDJhIn0.sk6VOuEPaXaJ6N1b1yrZDjvwzN7i8piC5yjs8uc8fTw'
//         }
//   }
//             this.$axios(config)
//             .then((r)=>{
//                 this.data = r.data
//             })
//             .catch((e)=>{
//                 this.err = e
//             })
        } 
}
</script>

<style>

</style>