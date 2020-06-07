import Service from './service';
import renderPost from './renderPost';
import renderNewPost from './renderNewPost';

const createPostInput = document.querySelector('.create-post-input'),
      buttonPost = document.querySelector('.button-post'),
      mainFeed = document.querySelector('.main-feed'),
      onePost = document.querySelector('.post');

buttonPost.addEventListener('click', (event) => {
  renderNewPost(createPostInput.textContent)
});

document.addEventListener('DOMContentLoaded', () => {
  const response = new Service();
  response.getData('db/posts.json')
    .then(response => renderPost(response));
});

