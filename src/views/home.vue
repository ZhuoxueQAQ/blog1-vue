<template>
  <div class="header">
    <!-- 导航 -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">ZhuoxueQAQ的个人博客</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/add">Addblog</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/tags">tags</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/categories">categories</router-link>
            </li>
          </ul>
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-light" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  </div>
  <!-- 版心 -->
  <div class="w">
    <router-view></router-view>
  </div>
  <div class="footer">
    <h1>footer</h1>
  </div>
</template>

<script>

import { defineComponent, reactive } from 'vue';
import { useRouter } from 'vue-router';


export default defineComponent({
  name: 'Home',
  setup () {
    const router = useRouter();
    const toAbout = () => {
      console.log("about clicked");
      router.push({
        name: 'about'
      });
    }
    return reactive({
      toAbout,
      router
    })
  }

})
</script>
<script></script>

<style>
body {
  background-color: #F8F9FA;
}
  .header {
    height: 60px;
    padding: 0 200px;
    margin-bottom: 30px;
    display: flex;
    position: fixed;
    background-color: #F8F9FA;
  }
  .navbar {
    width: 1080px;
    left: 28px;
  }
  .navbar-brand {
    margin-right: 200px;
  }
  .w {
    width: 1080px;
    height: 100%;
    /* margin: 0 auto; */
    margin-left: 227px;
    background-color: #EEEEEE;
  }
  .footer {
    height: 60px;
    background-color: #343A40;
  }
  .d-flex {
    margin-left: 50px;
  }
  .btn {
    margin-left: 5px;
  }
</style>