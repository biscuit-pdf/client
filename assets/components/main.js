let urlServer = `http://localhost:3000`

var app = new Vue ({
  el :'#app',
  data : {
    uploads : [{
      title: 'a',
      author: 'b',
      uploader: 'lutfi'
    }, {
      title: 'c',
      author: 'd',
      uploader: 'luthfi'
    }],
    contents: [],
    searchKeyword: ''
  },
  created: function(){
    this.getContentComponent();
  },
  computed: {
    filtered(){
      return this.contents.filter(content => content.toLowerCase().includes(this.searchKeyword)); 
    }
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
      },
      getContents(){
        axios
          .get(`${url}/upload/getfile`)
          .then(({data}) => {
            this.contents = data;
          })
          .catch(response => {
            Swal.fire({
              position: 'top-end',
              type: 'error',
              title: response,
              showConfirmButton: false,
              timer: 500
            });
          })
      }
    }

})