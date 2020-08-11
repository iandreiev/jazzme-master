/*eslint-disable*/
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import "./assets/scss/common.scss"
// import AxiosPlugin from 'vue-axios-cors';
import firebase from "firebase";
 
// Vue.use(AxiosPlugin)
Vue.config.productionTip = false

let app = "";
const config = {
    apiKey: "AIzaSyCRTLtXzs508ncVLyDaeMwgttKWqx--4JU",
    authDomain: "jazzme-test.firebaseapp.com",
    databaseURL: "https://jazzme-test.firebaseio.com",
    projectId: "jazzme-test",
    storageBucket: "jazzme-test.appspot.com",
    messagingSenderId: "623344870762"
};

firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(() => {
    if (!app) {
        /* eslint-disable no-new */
        app = new Vue({
            router,
            store,
            render: h => h(App)
        }).$mount("#app");
    }
});
//HEHE