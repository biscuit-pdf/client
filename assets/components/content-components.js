Vue.component('content-component', {
  template : `
    <div class="row">
      <div class="col-6 mb-3">
        <div class="card">
          <div class="card-header">Header</div>
          <div class="card-body"> 
            <table>
              <tr>
                <td> Title </td> <td>:</td> <td> {{content.title}} </td>
              <tr>
              <tr>
                <td> Author </td> <td>:</td> <td> {{content.author}} </td>
              </tr>
            </table>
          </div>
          <div class="card-footer">Footer</div>
        </div>
      </div>
    </div>
  `,
  props : [ 'content' ]
})