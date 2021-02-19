<template>
  <ul class="posts">
    <li class="post-item" v-for="(item, index) in posts" :key="'post' + index">
      <h1 class="post-title">{{ item.title }}</h1>
      <div class="post-message">
        <span>发表于 </span>
        <span class="createdDate"> {{ item.createdDate }}</span>
        <span class="sperate">|</span>
        <span>分类于 </span>
        <span class="categories"> {{ item.categories}}</span>
      </div>
      <div class="options">
        <el-button type="info" @click="openMessageBox(index)">删除博文</el-button>
        <el-button type="info" @click="showPost(index)">阅读全文</el-button>
        <el-button type="info" @click="editPost(index)">编辑博文</el-button>
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, nextTick } from 'vue';
import store from '@/store'
import { useRouter } from 'vue-router'
// 导入ElMessageBox，单独引用
import { ElMessageBox } from 'element-plus';
import { getAllPosts, deletePost } from '@/api/request'


export default defineComponent({
  setup () {
    const router = useRouter();
    const openMessageBox = (index: number) => {
      ElMessageBox.confirm("此操作不可撤销，是否确认删除？", '提示', {
        confirmButtonText: '删除',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // 删除操作
        deletePost(store.state.postList[index].createdDate)
        // 弹出提示信息
        ElMessageBox({
          type: 'success',
          message: '删除成功'
        });
      }).catch(() => {
        ElMessageBox({
          type: 'info',
          message: '已取消删除'
        });
      })
    }
    // 更新变动的数据
    nextTick(function () { getAllPosts() })
    // 阅读某个blog
    const showPost = (index: number) => {
      // 显示博客信息
      store.commit('showPost', index)
      // 路由跳转
      router.push({
        name: 'post',
        params: {
          postId: index
        }
      })
    }
    const editPost = (index: number) => {
      // 路由跳转
      router.push({
        name: 'edit',
        params: {
          postId: index
        }
      })
    }


    return reactive({
      posts: computed(() => store.state.postList),
      showPost,
      editPost,
      openMessageBox
    })
  }
})
</script>

<style scoped>
  .posts {
    padding: 70px 5px 5px 10px;
    margin-bottom: 0;
  }
  .post-item {
    background-color: #FFFFFF;
    width: 1060px;
    height: 300px;
    margin-bottom: 10px;
    /* 去掉圆点 */
    list-style: none;
    /* 边框阴影 */
    box-shadow: 0px 1px 2px #888888;
  }
  .options {
    margin-top: 100px;
    text-align: center;
  }
</style>
<style>
/* 公共样式（其他文件中也适用） */
  span {
    color: #999999;
  }
  .post-title {
    padding-top: 10px;
    text-align: center;
    color: dimgrey;
  }
  .post-message {
    text-align: center;
  }
  .createdDate, .categories{
    text-decoration: underline;
  }
  .sperate {
    margin: 0 20px;
  }
  .el-button {
    margin: 0 50px;
    background-color: #FFFFFF;
  }
  .el-button:hover {
    border: 2px solid #222222;
    background-color: rgb(221, 213, 213);
  }
</style>