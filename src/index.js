import Service from './service';
import renderPost from './renderPost';

const createPostInput = document.querySelector('.create-post-input'),
      buttonPost = document.querySelector('.button-post'),
      mainFeed = document.querySelector('.main-feed'),
      onePost = document.querySelector('.post');

buttonPost.addEventListener('click', () => {
  const response = new Service();
  response.getData('db/posts.json')
    .then(response => renderPost(response))
})