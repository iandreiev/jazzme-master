/*eslint-disable*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Mainpage from '../views/Mainpage'
import User from '../views/Userpage'
import Login from '../views/Login'
import Test from '../views/Test'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Mainpage
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/feed',
    name: 'Home',
    component: Home
  },
  {
    path: '/user/:nickname',
    name: 'User Page',
    component: User,
    props: true
  },
  {
    path: '/test',
    name: 'Test',
    component: Test,
    props: true
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
