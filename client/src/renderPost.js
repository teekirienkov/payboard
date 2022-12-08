import Service from './service';

function renderPost(response) {
  const postList = document.querySelector('.post-list');

  response.forEach((item) => {
    
    const { id, author, time, text, likes } = item;

    const newPost = document.createElement('div');
    newPost.classList.add('post');
    newPost.innerHTML = `
      <div class="post-header">
      <div class="user">
        <img class="user-avatar post-user-avatar" src="img/avatar.png">
        <div class="post-info">
          <a href="#" class="post-author">${author}</a>
          <span class="post-time">${time}</span>
        </div>
      </div>
      <button class="post-header-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.125 11.9766C4.125 12.1489 4.15895 12.3196 4.22491 12.4788C4.29087 12.6381 4.38755 12.7828 4.50942 12.9046C4.6313 13.0265 4.77599 13.1232 4.93523 13.1892C5.09447 13.2551 5.26514 13.2891 5.4375 13.2891C5.60986 13.2891 5.78053 13.2551 5.93977 13.1892C6.09901 13.1232 6.2437 13.0265 6.36558 12.9046C6.48745 12.7828 6.58413 12.6381 6.65009 12.4788C6.71605 12.3196 6.75 12.1489 6.75 11.9766C6.75 11.8042 6.71605 11.6335 6.65009 11.4743C6.58413 11.3151 6.48745 11.1704 6.36558 11.0485C6.2437 10.9266 6.09901 10.8299 5.93977 10.764C5.78053 10.698 5.60986 10.6641 5.4375 10.6641C5.26514 10.6641 5.09447 10.698 4.93523 10.764C4.77599 10.8299 4.6313 10.9266 4.50942 11.0485C4.38755 11.1704 4.29087 11.3151 4.22491 11.4743C4.15895 11.6335 4.125 11.8042 4.125 11.9766ZM10.6875 11.9766C10.6875 12.3247 10.8258 12.6585 11.0719 12.9046C11.3181 13.1508 11.6519 13.2891 12 13.2891C12.3481 13.2891 12.6819 13.1508 12.9281 12.9046C13.1742 12.6585 13.3125 12.3247 13.3125 11.9766C13.3125 11.6285 13.1742 11.2946 12.9281 11.0485C12.6819 10.8023 12.3481 10.6641 12 10.6641C11.6519 10.6641 11.3181 10.8023 11.0719 11.0485C10.8258 11.2946 10.6875 11.6285 10.6875 11.9766ZM17.25 11.9766C17.25 12.3247 17.3883 12.6585 17.6344 12.9046C17.8806 13.1508 18.2144 13.2891 18.5625 13.2891C18.9106 13.2891 19.2444 13.1508 19.4906 12.9046C19.7367 12.6585 19.875 12.3247 19.875 11.9766C19.875 11.6285 19.7367 11.2946 19.4906 11.0485C19.2444 10.8023 18.9106 10.6641 18.5625 10.6641C18.2144 10.6641 17.8806 10.8023 17.6344 11.0485C17.3883 11.2946 17.25 11.6285 17.25 11.9766Z" fill="#595959"/>
        </svg>            
      </button>
    </div>
    <!-- /.post-header -->
    <div class="post-content">
      <p class="post-text">
        ${text}
      </p>
    </div>
    <!-- /.post-content -->
    <div class="post-footer">
      <button class="post-button">
        <svg class="post-button-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.7633 12.5094C21.157 11.9891 21.375 11.3516 21.375 10.6883C21.375 9.63596 20.7867 8.63987 19.8398 8.0844C19.5961 7.94142 19.3185 7.86617 19.0359 7.86643H13.4156L13.5563 4.98596C13.5891 4.28987 13.343 3.62893 12.8648 3.12502C12.6302 2.87665 12.3471 2.67904 12.0331 2.5444C11.7191 2.40975 11.3807 2.34094 11.0391 2.34221C9.82031 2.34221 8.74219 3.16252 8.41875 4.33674L6.40547 11.6258H3.375C2.96016 11.6258 2.625 11.961 2.625 12.3758V20.9071C2.625 21.3219 2.96016 21.6571 3.375 21.6571H17.468C17.6836 21.6571 17.8945 21.6149 18.0891 21.5305C19.2047 21.0547 19.9242 19.9649 19.9242 18.7555C19.9242 18.4602 19.882 18.1696 19.7977 17.8883C20.1914 17.368 20.4094 16.7305 20.4094 16.0672C20.4094 15.7719 20.3672 15.4813 20.2828 15.2C20.6766 14.6797 20.8945 14.0422 20.8945 13.3789C20.8898 13.0836 20.8477 12.7906 20.7633 12.5094ZM4.3125 19.9696V13.3133H6.21094V19.9696H4.3125ZM19.2281 11.6961L18.7148 12.1414L19.0406 12.7367C19.148 12.9328 19.2036 13.153 19.2023 13.3766C19.2023 13.7633 19.0336 14.1313 18.743 14.3844L18.2297 14.8297L18.5555 15.425C18.6628 15.6211 18.7185 15.8413 18.7172 16.0649C18.7172 16.4516 18.5484 16.8196 18.2578 17.0727L17.7445 17.518L18.0703 18.1133C18.1776 18.3094 18.2333 18.5296 18.232 18.7531C18.232 19.2781 17.9227 19.7516 17.4445 19.9672H7.71094V13.2383L10.043 4.78909C10.1031 4.57252 10.2322 4.38147 10.4107 4.24486C10.5891 4.10825 10.8073 4.03354 11.032 4.03205C11.2102 4.03205 11.3859 4.08362 11.5266 4.18909C11.7586 4.36252 11.8828 4.62502 11.8687 4.90393L11.6437 9.55393H19.0125C19.4297 9.8094 19.6875 10.2406 19.6875 10.6883C19.6875 11.075 19.5188 11.4406 19.2281 11.6961Z" fill="#FFFFFF"/>
        </svg>              
        <span class="post-button-text">Like</span>
      </button>
      <button class="post-button">
        <svg class="post-button-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.8752 12C10.8752 12.2984 10.9937 12.5845 11.2047 12.7955C11.4157 13.0065 11.7018 13.125 12.0002 13.125C12.2985 13.125 12.5847 13.0065 12.7957 12.7955C13.0067 12.5845 13.1252 12.2984 13.1252 12C13.1252 11.7016 13.0067 11.4155 12.7957 11.2045C12.5847 10.9935 12.2985 10.875 12.0002 10.875C11.7018 10.875 11.4157 10.9935 11.2047 11.2045C10.9937 11.4155 10.8752 11.7016 10.8752 12ZM15.5627 12C15.5627 12.2984 15.6812 12.5845 15.8922 12.7955C16.1032 13.0065 16.3893 13.125 16.6877 13.125C16.986 13.125 17.2722 13.0065 17.4832 12.7955C17.6942 12.5845 17.8127 12.2984 17.8127 12C17.8127 11.7016 17.6942 11.4155 17.4832 11.2045C17.2722 10.9935 16.986 10.875 16.6877 10.875C16.3893 10.875 16.1032 10.9935 15.8922 11.2045C15.6812 11.4155 15.5627 11.7016 15.5627 12ZM6.18768 12C6.18768 12.2984 6.30621 12.5845 6.51718 12.7955C6.72816 13.0065 7.01431 13.125 7.31268 13.125C7.61105 13.125 7.8972 13.0065 8.10817 12.7955C8.31915 12.5845 8.43768 12.2984 8.43768 12C8.43768 11.7016 8.31915 11.4155 8.10817 11.2045C7.8972 10.9935 7.61105 10.875 7.31268 10.875C7.01431 10.875 6.72816 10.9935 6.51718 11.2045C6.30621 11.4155 6.18768 11.7016 6.18768 12ZM21.6846 7.93125C21.1549 6.67266 20.3955 5.54297 19.4275 4.57266C18.4663 3.60796 17.3253 2.84114 16.0689 2.31563C14.7799 1.77422 13.4111 1.5 12.0002 1.5H11.9533C10.533 1.50703 9.15721 1.78828 7.86346 2.34141C6.61789 2.87232 5.48752 3.64049 4.53534 4.60312C3.57674 5.57109 2.8244 6.69609 2.30409 7.95C1.76502 9.24844 1.49315 10.6289 1.50018 12.0492C1.50813 13.6769 1.89321 15.2806 2.62518 16.7344V20.2969C2.62518 20.5828 2.73877 20.857 2.94095 21.0592C3.14314 21.2614 3.41737 21.375 3.7033 21.375H7.26815C8.72196 22.107 10.3256 22.492 11.9533 22.5H12.0025C13.4064 22.5 14.7681 22.2281 16.0502 21.6961C17.3002 21.1768 18.437 20.419 19.3971 19.4648C20.365 18.5063 21.1267 17.3859 21.6588 16.1367C22.2119 14.843 22.4931 13.4672 22.5002 12.0469C22.5072 10.6195 22.2306 9.23438 21.6846 7.93125ZM18.1431 18.1969C16.5002 19.8234 14.3205 20.7188 12.0002 20.7188H11.9603C10.5471 20.7117 9.14315 20.3602 7.9033 19.6992L7.70643 19.5938H4.40643V16.2938L4.30096 16.0969C3.64002 14.857 3.28846 13.4531 3.28143 12.0398C3.27205 9.70312 4.16502 7.50937 5.8033 5.85703C7.43924 4.20469 9.62596 3.29062 11.9627 3.28125H12.0025C13.1744 3.28125 14.3111 3.50859 15.3822 3.95859C16.4275 4.39687 17.365 5.02734 18.1713 5.83359C18.9752 6.6375 19.608 7.57734 20.0463 8.62266C20.501 9.70547 20.7283 10.8539 20.7236 12.0398C20.7096 14.3742 19.7931 16.5609 18.1431 18.1969Z" fill="#FFFFFF"/>
        </svg>                            
        <span class="post-button-text">Comment</span>
      </button>
      <button class="post-button">
        <svg class="post-button-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.625 15.5625C16.957 15.5625 16.3406 15.7969 15.8578 16.1883L11.0016 12.675C11.0829 12.2287 11.0829 11.7713 11.0016 11.325L15.8578 7.81172C16.3406 8.20312 16.957 8.4375 17.625 8.4375C19.1766 8.4375 20.4375 7.17656 20.4375 5.625C20.4375 4.07344 19.1766 2.8125 17.625 2.8125C16.0734 2.8125 14.8125 4.07344 14.8125 5.625C14.8125 5.89687 14.85 6.15703 14.9227 6.40547L10.3102 9.74531C9.62578 8.83828 8.53828 8.25 7.3125 8.25C5.24062 8.25 3.5625 9.92812 3.5625 12C3.5625 14.0719 5.24062 15.75 7.3125 15.75C8.53828 15.75 9.62578 15.1617 10.3102 14.2547L14.9227 17.5945C14.85 17.843 14.8125 18.1055 14.8125 18.375C14.8125 19.9266 16.0734 21.1875 17.625 21.1875C19.1766 21.1875 20.4375 19.9266 20.4375 18.375C20.4375 16.8234 19.1766 15.5625 17.625 15.5625ZM17.625 4.40625C18.2977 4.40625 18.8438 4.95234 18.8438 5.625C18.8438 6.29766 18.2977 6.84375 17.625 6.84375C16.9523 6.84375 16.4062 6.29766 16.4062 5.625C16.4062 4.95234 16.9523 4.40625 17.625 4.40625ZM7.3125 14.0625C6.17578 14.0625 5.25 13.1367 5.25 12C5.25 10.8633 6.17578 9.9375 7.3125 9.9375C8.44922 9.9375 9.375 10.8633 9.375 12C9.375 13.1367 8.44922 14.0625 7.3125 14.0625ZM17.625 19.5938C16.9523 19.5938 16.4062 19.0477 16.4062 18.375C16.4062 17.7023 16.9523 17.1562 17.625 17.1562C18.2977 17.1562 18.8438 17.7023 18.8438 18.375C18.8438 19.0477 18.2977 19.5938 17.625 19.5938Z" fill="#FFFFFF"/>
        </svg>              
        <span class="post-button-text">Share</span>
      </button>
    </div>`;
  
  postList.insertAdjacentElement("afterbegin", newPost);
  })
}

export default renderPost;