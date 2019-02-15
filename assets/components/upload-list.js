Vue.component('upload-list', {
  template : `
    <div class="card">
      <img class="card-img-top" :src="upload.imageUrl" alt="Card image cap" style="width: 18rem">
      <div class="card-body"> 
        <table>
          <tr>
            <td> Title </td> <td>:</td> <td> {{upload.title}} </td>
          <tr>
          <tr>
            <td> Author </td> <td>:</td> <td> {{upload.author}} </td>
          </tr>
          <tr>
            <td> Uploader </td> <td>:</td> <td> {{upload.uploader}} </td>
          </tr>
        </table>
      </div>
    </div>
  `,
  props : [ 'upload' ]
})