let urlServer = `http://localhost:3000`

var app = new Vue ({
  el :'#app',
  data : {
  },
  methods : {
    submitUpload(newPost) {
      
      axios({
        method: 'post',
        url: urlServer + '/upload',
        data : newPost,
        headers: {'Content-Type' : 'multipart/form-data'}
      })
        .then( response => {
          console.log(response)
        })
        .catch( ({response}) => {
          console.log(response)
        })
      // console.log(Object.keys(newPost))
    }
  }
})