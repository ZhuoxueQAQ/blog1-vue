import { createStore } from "vuex";
import { Post } from '@/interface/post';
import { Service } from '@/api/service';

export default createStore({
  state: {
    postList: [] as Post[],
    nowPost: [] as Post[]
  },
  mutations: {
    addPost (state, value: Post) {
      state.postList.push(value);
    },
    deletePost (state, index: number) {
      state.postList.splice(index, 1);
    },
    showPost (state, index: number) {
      return state.postList[index]
    }
  },
  actions: {},
  modules: {}
});
