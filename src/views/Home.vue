<template>
  <div class="wrapper">
    <div class="main">
        <h1>Новое за сегодня</h1>
        <div class="post-wrapper">
        <div class="post-form" v-for="item in user" :key="item.id">
            <div class="form-wrapper">
                <div class="form-group">
                    <div class="form-meta">
                        <img class="avatar" :src="item.img" alt="">
                    </div>
                    <input type="text" class="form-control" placeholder="Что происходит">
                    <input type="button" name="submit" id="submitPost" class="btn-sp btn-sp-submit">
                </div>
            </div>
            <div class="form-group">
            <div class="form-actions">
                <input type="button" class="btn-sp btn-sp-cam">
                <input type="button" class="btn-sp btn-sp-image">
            </div>
            </div>
        </div>
            <div class="post-content" v-for="post in posts" :key="post.id">
                <div class="post-title">
                    <h3>{{post.title}}</h3>
                </div>
                <div class="post-media">
                    <div v-if="post.video === true">
                        <video :src="post.content" controls></video>
                    </div>
                    <div v-if="post.video === false">
                        <img :src="post.content" alt="">
                    </div>
                </div>
                <div class="post-meta">
                    <div class="post-meta-user" v-for="author in post.author" :key="author.id">
                        <img :src="author.img" alt="">
                        <router-link class="link link-regular" :to="{name: 'User Page', params: {nickname: author.nickname, id: author.id, data: author}}">@{{author.nickname}}</router-link>
                    </div>
                    <div class="post-meta-actions">
                        <div class="post-meta-actions-item">
                            <div class="ic-1x ic-heart"></div>
                        </div>
                        <div class="post-meta-actions-item">
                            <div class="ic-1x ic-claps"></div>
                        </div>
                        <div class="post-meta-actions-item">
                            <div class="ic-1x ic-comments"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="sidebar">
        <div class="sidebar-content" v-for="item in user" :key="item.id">
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
  </div>
</template>

<script>
/*eslint-disable*/
export default {
    data(){
        return{
            user:[
                {
                    id:1,
                    img: "https://pickaface.net/gallery/avatar/unr_random_160817_0304_2mvqp69.png",
                    username: "Ivan Andreyev",
                    nickname: "andreyev",
                    rating: 200,
                    wallet: 2000,
                    followers: 5,
                    address: "Mx43254535623123454324"
                }
            ],
            posts:[
                {
                    id:1,
                    content: "https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg",
                    video: false,
                    title: "Какая красивая бабочка",
                    author:[
                        {
                            id: 24,
                            img: "https://pickaface.net/gallery/avatar/unr_random_160817_0304_2mvqp69.png",
                            username: "Ivan Andreyev",
                            nickname: "andreyev"
                        }
                    ],
                    likes: 20,
                    comments: 10,
                },
                 {
                    id:2,
                    content: "https://jazzme.org/new/video.mp4",
                    video: true,
                    title: "Какая красивая бабочка",
                    author:[
                        {
                                                        id: 782,
                            img: "https://pickaface.net/gallery/avatar/unr_random_160817_0304_2mvqp69.png",
                            username: "Ivan Andreyev",
                            nickname: "andreyev"
                        }
                    ],
                    likes: 20,
                    comments: 10,
                },
                 {
                    id:3,
                    content: "https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg",
                    video: false,
                    title: "Какая красивая бабочка",
                    author:[
                        {
                                                        id: 12421,
                            img: "https://pickaface.net/gallery/avatar/unr_random_160817_0304_2mvqp69.png",
                            username: "Ivan Andreyev",
                            nickname: "andreyev"
                        }
                    ],
                    likes: 20,
                    comments: 10,
                }
            ]
        }
    }
}
</script>

<style>

</style>