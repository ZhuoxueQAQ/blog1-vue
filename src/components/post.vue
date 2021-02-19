<template>
  <div class="container">
    <h1 class="post-title">{{ nowPost.title }}</h1>
    <div class="post-message">
      <span>发表于 </span>
      <span class="createdDate"> {{ nowPost.createdDate }}</span>
      <span class="sperate">|</span>
      <span>分类于 </span>
      <span class="categories"> {{ nowPost.categories }}</span>
      <div class="context">{{ nowPost.context }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, toRefs, ref} from 'vue';
import store from '@/store'
import { useRouter } from 'vue-router'
import { Post } from '@/interface/post'

export default defineComponent({
  setup () {
    const router = useRouter()
    // 当前的子路由postID
    const nowPostId = parseInt(router.currentRoute.value.params.postId as string)
    const nowPost = store.state.postList[nowPostId]
    return reactive({
      nowPost,
      router,
    })
  }
})
</script>

<style scoped>
  .container {
    padding-top: 70px;
  }
  .context {
    text-align: left;
    padding: 60px 30px 30px 20px;
    font-size: 20px;
  }
</style>