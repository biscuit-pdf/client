Vue.component('upload-list', {
  template : `
    <div class="card bg-light mb-3 border-style">
      <div class="card-body"> 
        <table>
          <tr>
            <td> <small>Title</small> </td> <td><small> : </small></td> <td> <small>{{upload.title}}</small> </td>
          <tr>
          <tr>
            <td> <small>Author</small> </td> <td><small> : </small></td> <td> <small>{{upload.author}}</small> </td>
          </tr>
          <tr>
            <td> <small>Uploader</small> </td> <td><small> : </small></td> <td> <small>{{upload.uploader}}</small> </td>
          </tr>
        </table>
        <a target="_blank" :href="'https://www.facebook.com/sharer/sharer.php?kid_directed_site=0&sdk=joey&u=' + content.pdfUrl + '&display=popup&ref=plugin&src=share_button'">
          Share<i class="material-icons prefix">share</i>
        </a>
      </div>
    </div>
  `,
  props : [ 'upload' ]
})