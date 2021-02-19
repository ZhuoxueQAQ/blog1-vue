<template>
  <div class="container">
    <div class="mb-3">
      <h3 class="title">Edit this blog</h3>
      <label for="formGroupExampleInput" class="form-label">标题:</label>
      <input type="text" class="form-control" id="formGroupExampleInput" placeholder="修改标题" v-model="postItem.title">
      <label for="formGroupExampleInput" class="form-label">分类:</label>
      <input type="text" class="form-control" id="formGroupExampleInput" placeholder="修改分类" v-model="postItem.categories">
      <label for="formGroupExampleInput" class="form-label">正文:</label>
      <textarea class="form-control" id="validationTextarea" placeholder="修改正文" required rows="10" v-model="postItem.context"></textarea>
    </div>
    <div class="options">
      <button type="button" class="btn btn-light btn-lg" @click="cancel()">取消</button>
      <button type="button" class="btn btn-light btn-lg" @click="updatePostByIndex()">更新</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { Post } from '@/interface/post'
import { updatePost } from '@/api/request'
import store from '@/store'

export default defineComponent({
  setup () {
    const router = useRouter()

    // 当前的子路由postId
    const nowPostId = parseInt(router.currentRoute.value.params.postId as string)

    const postItem: Post = reactive({
      title: "",
      createdDate: store.state.postList[nowPostId].createdDate,
      categories: "",
      context: "",
    })

    const updatePostByIndex = () => {
      updatePost(postItem)
      alert("更新成功")
      router.push({
        name: 'showposts'
      })
    }

    const cancel = () => {
      router.push({
      name: 'showposts'
      })
    }
    
    return {
      router,
      postItem,
      updatePostByIndex,
      cancel
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