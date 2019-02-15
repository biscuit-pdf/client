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
      </div>
    </div>
  `,
  props : [ 'upload' ]
})