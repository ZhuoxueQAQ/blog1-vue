<template>
  <div class="container">
    <div class="mb-3">
      <h3 class="title">Add a new blog</h3>
      <label for="formGroupExampleInput" class="form-label">标题:</label>
      <input type="text" class="form-control" id="formGroupExampleInput" placeholder="请输入标题" v-model="postItem.title">
      <label for="formGroupExampleInput" class="form-label">分类:</label>
      <input type="text" class="form-control" id="formGroupExampleInput" placeholder="请输入博客分类" v-model="postItem.categories">
      <label for="formGroupExampleInput" class="form-label">正文:</label>
      <textarea class="form-control" id="validationTextarea" placeholder="请输入正文" required rows="10" v-model="postItem.context"></textarea>
    </div>
    <div class="options">
      <button type="button" class="btn btn-light btn-lg">重新输入</button>
      <button type="button" class="btn btn-light btn-lg" @click="addPost()">创建博客</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { Post } from '@/interface/post'
import { addPostToDb } from '@/api/request'

export default defineComponent({
  setup () {
    // 响应式对象
    const postItem: Post = reactive({
      title: "",
      createdDate: "",
      categories: "",
      context: "",
    })
    const router = useRouter()
    const addPost = () => {
      // 日期格式为 YY-MM-DD ...
      const nowDate :string = new Date().toLocaleString().replace(/(\/)/g,'-')
      postItem.createdDate = nowDate
      addPostToDb(postItem)
      alert("创建成功")
      router.push({
        name: 'showposts'
      })
    }
    return {
      postItem,
      addPost,
      router
    }
  }
})
</script>

<style scoped>
  li {
    list-style: none;
  }
  .container {
    padding-top: 70px;
  }
  .title {
    margin-top: 10px;
    text-align: center;
  }
  .options {
    text-align: center;
    margin: 20px 0;
  }
  .btn {
    border: 1px solid #222222;
    margin: 10px 40px 20px 40px;
  }
</style>