let urlServer = `http://localhost:3000`

Vue.component('sidebar-component', {
  template : `
  <div class="row"">
        <nav class="nav flex-column nav-pills">
            <a class="nav-link" href="#" style="color:orange;" @click="toHome"><i class="fas fa-home fa-2x"></i></a>
            <a class="nav-link" href="#" style="color:orange;" @click="toList"><i class="fas fa-list fa-2x" style="position:relative; left:2px;"></i></a>
            <a class="nav-link" href="#" style="color:orange;" @click="toUpload"><i class="fas fa-file-upload fa-2x" style="position:relative; left:4px"></i></a>
        </nav>
      </div>
  `,
  methods : {
    toUpload() {
      this.$emit('page', 'upload')
    },
    toHome() {
      this.$emit('page', 'home')
    },
    toList() {
      this.$emit('page', 'list')
    }
  }
})

Vue.component('search-component', {
  template : `
  <div class="col w-75 mx-auto">
    <form class="mx-2 my-auto d-inline w-100" @submit="searchTitle">
      <div class="input-group">
      <input type="text" class="form-control" placeholder="Search" v-model="keyword">
      <span class="input-group-append">
      <button class="btn btn-outline-secondary" type="button">Search</button>
      </span>
    </div>
    </form>
  </div>
  `,
  data() {
    return {
      keyword : ''
    }
  },
  methods : {
    searchTitle() {
      this.$emit('search', this.keyword)
    }
  }
})

var app = new Vue ({
  el :'#app',
  created() {
    this.getContents()
  },
  data : {
    currentPage : 'home',
    pdfUrl : '',
    contents : [],
    originalContents : []
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
          console.log(response.data)
          this.contents.unshift(response.data)
          swal('Upload Success')
        })
        .catch( response => {
          console.log(response)
        })
      },

      getContents(){
        axios
          .get(`${urlServer}/upload/getfile`)
          .then(({data}) => {
            this.contents = data;
            this.originalContents = data
          })
          .catch(response => {
            console.error(response);
          })
      },

      changePage(page) {
        this.currentPage = page
      },
      
      bookViewer(url) {
        // this.currentPage = ''
        this.pdfUrl = url
      },

      searchTitle(keyword) {
        this.contents = this.originalContents.filter( content => content.title.toLowerCase().includes(keyword))
      }

  },
  computed : {
    viewPdf() {
      return this.pdfUrl
    },
    filtered() {
      return this.contents
    }
  }
})