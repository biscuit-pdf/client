Vue.component('content-component', {
  template : `
      <div class="col-6 mb-3">
        <div class="card bg-light mb-3 border-style">
          <div class="card-header">Header</div>
          <div class="card-body"> 
            <table>
              <tr>
                <td> Title </td> <td> : </td> <td> {{content.title}} </td>
              <tr>
              <tr>
                <td> Author </td> <td> : </td> <td> {{content.author}} </td>
              </tr>
              <tr>
                <td> Url </td> <td> : </td> <td> {{content.pdfUrl}} </td>
              </tr>
              <tr>
                <td> Uploader Id </td> <td> : </td> <td> {{content.userId}} </td>
              </tr>
            </table>
          </div>
          <div class="card-footer">Footer</div>
        </div>
      </div>
  `,
  props : [ 'content' ]
})