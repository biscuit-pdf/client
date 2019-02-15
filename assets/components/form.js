Vue.component('form-component', {
  template : `
  <div class="my-5 col-sm-3 mt-3">

      <div class="form-group mx-auto mt-2" style="width: 200px">
        <!-- Book Title : -->
        <input class="form-control" type="text" placeholder="input book title here .." v-model="title">
      </div>
      <div class="form-group mx-auto" style="width: 200px">
      <!-- Author Name : -->
        <input class="form-control" type="text" name="" placeholder="input author name here .." v-model="author">
      </div>
      <div class="mx-auto" style="width: 200px">
        <span class="btn btn-file btn-success btn-sm btn-block mb-1 rounded-0">
            Browse <input type="file" ref="myFiles" @change="previewFiles">
        </span>
        <button class="btn btn-primary mx-auto text-small p-1 align-middle rounded-0 w-100" type="submit" style="border-radius: 2px" @click="upload">
          <small> Upload </small>
        </button>
      </div>
    </div> `,
    data() {
      return {
        title : '',
        author: '',
        files : []
      }
    },
    methods : {
      upload() {
        if(!this.title || !this.author || !this.files.length) {
          swal({
            title: "Input cannot be empty like your heart...",
            button: "ok",
            timer: 2000
          })
        } else if(!(this.files[0].type.includes('pdf') || this.files[0].type.includes('epub'))) {
          swal({
            title: "Please input epub/pdf file",
            button : "ok",
            timer: 2000
          })
        } else {
          console.log(this.files[0])
          let dataForm = new FormData()
          dataForm.append('title', this.title)
          dataForm.append('author', this.author)
          dataForm.append('file', this.files[0])
          this.$emit('upload',dataForm)
          this.clearForm()
        }
      },
      clearForm() {
        this.title = ''
        this.author = ''
        this.files = []
      },
      previewFiles(e) {
        const file = e.target.files[0];
        this.files = this.$refs.myFiles.files
        // this.file = file
    }
  }
})
