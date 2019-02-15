Vue.component('content-component', {
  template : `
      <div class="col-12 mb-3">
      <div class="card bg-light mb-3" style="max-height:100%">
      <div class="card-body" style="font-size:70%">
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

      </table>
      </div>
      </div>
      </div>
  `,
  props : [ 'content' ]
})

/* <tr>
<td> Uploader Id </td> <td> : </td> <td> {{content.userId}} </td>
</tr> */