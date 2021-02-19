import { Service } from '@/api/service';
import { Post } from '@/interface/post';
import store from '@/store';

export function getAllPosts() {
  Service.get('/GetAllPost').then(function(response) {
    const data = response.data
      for(let i = 0; i < data.length; i++)
        store.state.postList[i] = response.data[i]
    })
}

export function addPostToDb(postItem: Post){
  // POST请求
  Service({
      method: 'post',
      url: 'AddPost',
      data: JSON.stringify(postItem)
    })
}

export function deletePost(createdDate: string) {
  Service({
    method: 'delete',
    url: 'DeletePost/' + createdDate
  })
}

export function updatePost(postItem: Post) {
  Service({
    method: 'put',
    url: 'UpdatePost/' + postItem.createdDate,
    data: JSON.stringify(postItem)
  })
}