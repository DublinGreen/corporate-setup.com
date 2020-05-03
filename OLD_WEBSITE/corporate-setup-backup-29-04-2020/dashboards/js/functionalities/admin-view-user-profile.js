const basicProfile = document.getElementById('user-basic-profile');
const userDoc = document.getElementById('card_container');
console.log(localStorage.getItem('user_id'));
const authErrors = ['Authentication required', 'Please Login to perform this operation']


const inflateCard = (data) => {
    const el = ` <div class="col-sm-6">
    <div class="card" id ="${data.uuid}" data-file= "${data.file}">
      <div class="card-body">
        <h5 class="card-title">${data.title}</h5>
        
        <a href="#" class="btn btn-success" data-toggle="modal" data-target="#exampleModal">Share</a>
        <a href="#" class="btn btn-danger" data-toggle="modal" data-target="#exampleModalCenter">Delete</a>
        <!-- Second card ends here -->


    <!-- Modal for the second cards' share button starts here -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Share To...</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group">
            <label for="recipient-name" class="col-form-label">Recipients E-mail:</label>
            <input type="text" class="form-control" id="recipient-name" style="border:1px solid green;" autofocus>
          </div>
          
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-success">Share</button>
      </div>
    </div>
  </div>
</div>
<!-- Modal for second cards' share button ends here -->

<!-- Modal for second button delete button starts here -->
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Delete Document</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        Are you sure you want to delete this document?
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">No</button>
        <button type="button" class="btn btn-success">Yes</button>
      </div>
    </div>
  </div>
</div>
<!-- Modal for second button delete ends here -->
      </div>
    </div>
  </div>`;
  return el;
};

const createUserProfile = (data) => {
    return `<li class="list-group-item">Name: ${data.name}</li>
    <li class="list-group-item"><i class="fa fa-envelope">: </i>${data.email}</li>
    <li class="list-group-item"><i class="fa fa-phone">: </i>${data.phone}</li>
    <li class="list-group-item"><a href="#" class="btn btn-success" id="suspend-user">Suspend</a> <a href="#" class="btn btn-success" id="delete-user">Delete</a></li>`
}


const fetchUserDocuments = () => {
    const data = {
        uuid: 'jkdjkj4kjkjr90afdlfklsdkfls49',
        file: 'ksdlkslkkdsldk.com/sklal.jpg',
        title: 'sample Doc'
    }
    const el = inflateCard(data);
    cardContainer.innerHTML = el;
}

const suspendUserButton = document.getElementById('suspend-user');
const deleteUserButton = document.getElementById('delete-user');
fetchUserDocuments();