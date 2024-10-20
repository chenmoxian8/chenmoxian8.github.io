var posts=["2024/10/20/文章名/","2024/10/20/凌冬将至/","2024/10/19/新主题的博文/","2024/10/19/一篇博文/","2024/10/19/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };