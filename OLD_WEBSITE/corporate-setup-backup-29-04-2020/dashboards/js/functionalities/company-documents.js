//Template to make naming easy ;)
//const  = document.getElementById("");

// const authErrors = ['Authentication required', 'Please Login to perform this operation']

const cardTitle = document.getElementById("card-title");

const cardDescription = document.getElementById("card-description");

const shareCardButton = document.getElementById("share-card-button");

const deleteCardButton = document.getElementById("delete-card-button");

const modalShareButton = document.getElementById("modal-share-button");

const modalConfirmDeleteButton = document.getElementById("modal-confirm-delete-button");

const uploadDocumentButton = document.getElementById("upload-document-button");

const recipientName = document.getElementById("recipient-name");

const cardContainer = document.getElementById("company-profile-details");

const documentTextTitle = document.getElementById("Document-title");
const dateAq = document.getElementById("dte-cquired");
const expDate = document.getElementById("document-expiry-date");
const bodyResponseible = document.getElementById("body-responsible-for-giving-document-input");

const theFileItself = document.getElementById("upload-document-button2");

const modalUploadButton = document.getElementById("upload-document-modal-button");



const deleteDoc = (id) => {
  console.log(id);
  const theToken = localStorage.getItem('token');
  if (!theToken) {
    alert('Please Login')
    window.location.replace("login.html");
  }
  const url = "https://corporate-setup.herokuapp.com/api/v1/file/delete-file"
  const formData = new FormData();
  formData.append('file_uuid', id);
 fetch(url, {
    method:"PUT",
    body: formData, 
    headers: new Headers({
  'Authorization': `Bearer ${theToken}`
  }),
 })
.then(res => res.json())
.then(x => {
 
  if (x.status != 'error') {
    console.log(x.data);
    alert(x.data)
    window.location.reload();
  } else if (x.status == 'error') {
    const message = x.error.message == "jwt expired" ? "Please Login to perform this operation" : x.error
    if (authErrors.includes(message)) { window.location.replace("../../login.html") }
    alert(message);
  }
})
}



const inflateCard = (data) => {
    const el = `<ul class="list-group" data-owner="data.owner_uuid" data-file="data.file">
    <li class="list-group-item" id="name-of-document">${data.name} </li>
    <li class="list-group-item" id="body-responsible-for-document">${data.given_by}</li>
    <li class="list-group-item" id="document-date-acquired">${data.date_acquired}</li>
    <li class="list-group-item" id="document-expiey-date">${data.expired_date}</li>
    <li class="list-group-item" id="">
     <a href="#" class="btn btn-success" data-toggle="modal" id="share-card-button" data-target="#exampleModal">Share</a>
          <a href="#" class="btn btn-danger" data-toggle="modal" id="delete-card-button" data-target="#exampleModalCenter">Delete</a>
  <!-- First card ends here -->
          
   <!-- Modal for share starts here -->
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
              <input type="email" class="form-control" onkeyup="saveEmail()" id="recipient-name" style="border:1px solid green;" autofocus>
            </div>
            
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-success" id="modal-share-button" data-dismiss="modal" onclick="shareFile('${data.name}', '${data.given_by}', '${data.date_acquired}','${data.expired_date}', '${data.file}', '${data.owner_uuid}')">Share</button>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Modal for share ends here -->
  
  <!-- Modal To delete a document -->
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
          <button type="button" class="btn btn-success" id="modal-confirm-delete-button" data-dismiss="modal" onclick="deleteDoc('${data.uuid}')">Yes</button>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal to delete a document ends here -->
  <a href="${data.file}" target="_blank" class="btn btn-primary">Download</a>
    </li>
                 <!-- The user detail ends here -->
  </ul>`;
  return el;
};




const fetchDocuments = () => {
    const theToken = localStorage.getItem('token');
    if (!theToken) {
      alert('Please Login')
      window.location.replace("login.html");
    }
    const url = "https://corporate-setup.herokuapp.com/api/v1/list-documents"
   fetch(url, {
      method:"GET", 
      headers: new Headers({
    'Authorization': `Bearer ${theToken}`
    }),
   })
  .then(res => res.json())
  .then(x => {
    const el = [];  
    if (x.status != 'error') {
      console.log(x.data);
        x.data.forEach(d => {
            const x = inflateCard(d);
            el.push(x)
        });
        cardContainer.innerHTML = el;
    } else if (x.status == 'error') {
      const message = x.error.message == "jwt expired" ? "Please Login to perform this operation" : x.error
      if (authErrors.includes(message)) { window.location.replace("../login.html") }
      alert(message);
    }
  })
}

// upload a file 
const uploadDocuments = () => {
  console.log(theFileItself.files[0])
  const theToken = localStorage.getItem('token');
    if (!theToken) {
      alert('Please Login')
      window.location.replace("login.html");
    }
    const url = "https://corporate-setup.herokuapp.com/api/v1/user/upload"
    const formData = new FormData();
    formData.append('name', documentTextTitle.value)
    formData.append('type', 'uploaded')
    formData.append('file', theFileItself.files[0])
    formData.append('given_by', bodyResponseible.value)
    formData.append('date_acquired', dateAq.value)
    formData.append('expired_date', expDate.value)
   fetch(url, {
      method:"POST", 
      body: formData,
      headers: new Headers({
    'Authorization': `Bearer ${theToken}`
    }),
   })
  .then(res => res.json())
  .then(x => {
    if (x.status != 'error') {
        location.reload()
    } else if (x.status == 'error') {
      const message = x.error.message == "jwt expired" ? "Please Login to perform this operation" : x.error
      if (authErrors.includes(message)) { window.location.replace("../../login.html") }
      alert(message);
    }
  })
}

const shareFile = (name,given_by, date_acquired, expired_date, file, owner_uuid) => {
  const email = localStorage.getItem('share_email')
  const theToken = localStorage.getItem('token');
    if (!theToken) {
      alert('Please Login')
      window.location.replace("login.html");
    }
    const url = "https://corporate-setup.herokuapp.com/api/v1/user/share"
    const formData = new FormData();
    formData.append('name', name)
    formData.append('given_by', given_by)
    formData.append('email', email)
    formData.append('date_acquired', date_acquired)
    formData.append('expired_date', expired_date)
    formData.append('type', 'shared')
    formData.append('owner_uuid', owner_uuid)
    formData.append('file', file);
   fetch(url, {
      method:"POST", 
      body: formData,
      headers: new Headers({
    'Authorization': `Bearer ${theToken}`
    }),
   })
  .then(res => res.json())
  .then(x => {
    if (x.status != 'error') {
        alert(x.data);
        location.reload();
    } else if (x.status == 'error') {
      const message = x.error.message == "jwt expired" ? "Please Login to perform this operation" : x.error
      if (authErrors.includes(message)) { window.location.replace("../../login.html") }
      alert(message);
    }
  })

}

function saveEmail() {
  var x = document.getElementById("recipient-name").value;
  localStorage.setItem('share_email', x)
}

fetchDocuments();
modalUploadButton.addEventListener('click', () => uploadDocuments())

