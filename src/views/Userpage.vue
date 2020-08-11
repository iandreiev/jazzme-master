<template>
  <div class="wrapper">
  <div class="main"></div>
   <div class="sidebar" v-if="this.$route.params.id === data.id">
        <div class="sidebar-content" v-for="item in data" :key="item.id">
            <div class="sidebar-meta" >
                <div class="user-container">
                    <div class="user-pic">
                        <img :src="item.img" alt="">
                    </div>
                    <div class="user-meta">
                        <h2>{{item.username}}</h2>
                        <span>@{{item.nickname}}</span>
                    </div>
                </div>
            </div>

            <div class="user-container">
                    <div class="user-meta-item">
                        <span class="user-meta-item-title">Рейтинг</span>
                        <span class="user-meta-item-subtitle">{{item.rating}}</span>
                    </div>
                    <div class="user-meta-item">
                         <span class="user-meta-item-title">Кошелёк</span>
                        <span class="user-meta-item-subtitle">{{item.wallet}} JAZZ</span>
                    </div>
                    <div class="user-meta-item">
                         <span class="user-meta-item-title">Подписчики</span>
                        <span class="user-meta-item-subtitle">{{item.followers}}</span>
                    </div>
                </div>
            <div class="btn-group">
                <router-link to="#" class="btn btn-success">Вывести</router-link>
                <router-link to="#" class="btn btn-outline-success">Пополнить</router-link>
            </div>
        </div>
        <div class="sidebar-content">
            <div class="sidebar-menu">
            <h4 class="sidebar-title">Меню</h4>
            <div class="sidebar-menu-item">Новости</div>
            <div class="sidebar-menu-item">Кошелёк</div>
            <div class="sidebar-menu-item">Настройки</div>
            <div class="sidebar-menu-item">LIVE</div>
            </div>
        </div>
        <div class="sidebar-regular">
            <span class="text-grey">JAZZME © 2020</span>
        </div>
    </div>
    <div v-else></div>
  </div>
</template>

<script>
/*eslint-disable*/
export default {
    props: ["data"]
}
</script>

<style>

</style>