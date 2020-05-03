const basicProfile = document.getElementById('user-basic-profile');
const userDoc = document.getElementById('card_container');
const container = document.getElementById('company-profile-list');
console.log(localStorage.getItem('user_id'));
const _user_uuid = localStorage.getItem('user_id');
const authErrors = ['Authentication required', 'Please Login to perform this operation']




const deleteDocument = (id) => {
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
    if (authErrors.includes(message)) { window.location.replace("../../admin.html") }
    alert(message);
  }
})
}

const listDocs  = (array) => {
    const all = [];
    array.forEach(x => {
    const ex = ` <li class="list-group-item">${x.name} 
    <div class="text-right">
    <a href="${x.file}" target="_blank" class="btn btn-success">Download</a>
    <button class="btn btn-danger" onclick="deleteDocument('${x.uuid}')">Delete</button>
    </div>
    </li>`; 
    all.push(ex);
    });
    return all;
}

const checkButtonText = (status) => {
  return status === 'active' ? 'SUSPEND COMPANY' : 'ACTIVATE COMPANY'
}

const suspendCompany = (id) => {
  const theToken = localStorage.getItem('token');
  if (!theToken) {
    alert('Please Login')
    window.location.replace("login.html");
  }
  const url = "https://corporate-setup.herokuapp.com/api/v1/admin/suspend-user"
  const formData = new FormData();
  formData.append('user_uuid', id);
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

const companyLogo = (data) => {
  if (data.user.logo) {
    return data.user.logo;
  } else {
    return '../assets/images/pimg.png'
  }
}
const createUserProfile = (data) => {
    return `  <ul class="list-group">
    <li class="list-group-item">
        <div class="profile-userpic">
                <img src="${companyLogo(data)}" id="profile-picture" class="img-responsive" alt="">
                <!-- Button to upload a profile picture -->
                
            </div>
    </li>
    <li class="list-group-item">
    <div class="form-group">
					<label for="brief-summary">Brief Summary of your Company</label>
					<textarea class="md-textarea form-control" id="brief-summary" disabled style="padding-bottom:40px;">${data.user.summary}</textarea>
		</div>
</li>
    <li class="list-group-item">${data.user.name}</li>
    <li class="list-group-item">${data.user.email}</li>
    <li class="list-group-item">${data.user.phone}</li>
    <li class="list-group-item">${data.user.website}</li>
  
   
    </li>
    <li class="list-group-item">
    <a href="#" class="btn btn-success" data-toggle="modal" data-target="#upload-document-modal">Upload Document</a>
                                        
                                         <!-- Modal for uploading document starts here -->
<div class="modal fade" id="upload-document-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog" role="document">
<div class="modal-content">
  <div class="modal-header">
    <h5 class="modal-title" id="exampleModalLabel">Upload Document</h5>
    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
    <form>
      <div class="form-group">
        <label for="recipient-name" class="col-form-label">Name Of Document</label>
        <input type="text" class="form-control" id="Document-title" style="border:1px solid green;" autofocus>
      </div>
      <div class="form-group">
        <label for="recipient-name" class="col-form-label">Body Responsible for giving Document</label>
        <input type="text" class="form-control" id="body-responsible-for-giving-document-input" style="border:1px solid green;" autofocus>
      </div>
      
      <div class="form-group">
        <label for="recipient-name" class="col-form-label">Date Acquired</label>
        <input type="date" class="form-control" id="dte-cquired" style="border:1px solid green;" autofocus>
      </div>
      
      <div class="form-group">
        <label for="recipient-name" class="col-form-label">Expiry Date</label>
        <input type="date" class="form-control" id="document-expiry-date" style="border:1px solid green;" autofocus>
      </div>
       <div class="form-group">
<label for="upload-document-button2">Upload Document</label>
<input type="file" class="form-control-file" id="upload-document-button3">
</div>
    </form>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
    <button type="button" class="btn btn-success" data-dismiss="modal" id="upload-document-modal-button" data-dismiss="modal" onclick="uploadDocuments('${data.user.uuid}')">Upload Picture</button>
  </div>
</div>
</div>
</div>

<!-- Modal for upload document ends here -->


    <button class="btn btn-success" onclick="suspendCompany('${data.user.uuid}')">${checkButtonText(data.user.status)}</button></li>
    <li class="list-group-item">
         <h2 class="m-4">Uploaded Documents</h2>
<!-- Admin company details ends here -->
<ul class="list-group mt-4">
  ${listDocs(data.documents)}       
</ul>
</li>
</ul>`
}



const fetchUserProfile = () => {
        const theToken = localStorage.getItem('token');
        if (!theToken) {
          alert('Please Login')
          window.location.replace("admin.html");
        }
        const url = "https://corporate-setup.herokuapp.com/api/v1/admin/view-a-user";
        const formData = new FormData()
        formData.append('user_uuid', _user_uuid)
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
         const y = createUserProfile(x.data);
         container.innerHTML = y;
        } else if (x.status == 'error') {
          const message = x.error.message == "jwt expired" ? "Please Login to perform this operation" : x.error
          if (authErrors.includes(message)) { window.location.replace("../login.html") }
          alert(message);
        }
      })
    };



const suspendUserButton = document.getElementById('suspend-user');
const deleteUserButton = document.getElementById('delete-user');

// const documentTextTitle = ;
// const dateAq =;
// const expDate = ;
// const bodyResponseible = ;

// const theFileItself = ;
// upload a file 
const uploadDocuments = (id) => {
  console.log(id);
  console.log(document.getElementById("Document-title").value);
  console.log(document.getElementById("upload-document-button3").files[0])
  const theToken = localStorage.getItem('token');
    if (!theToken) {
      alert('Please Login')
      window.location.replace("../../admin.html");
    }
    const url = "https://corporate-setup.herokuapp.com/api/v1/user/upload"
    const formData = new FormData();
    formData.append('name', document.getElementById("Document-title").value)
    formData.append('type', 'admin')
    formData.append('file', document.getElementById("upload-document-button3").files[0])
    formData.append('given_by', document.getElementById("body-responsible-for-giving-document-input").value)
    formData.append('date_acquired',  document.getElementById("dte-cquired").value)
    formData.append('expired_date', document.getElementById("document-expiry-date").value)
    formData.append('user_uuid', id);
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
        location.reload()
    } else if (x.status == 'error') {
      const message = x.error.message == "jwt expired" ? "Please Login to perform this operation" : x.error
      if (authErrors.includes(message)) { window.location.replace("../../admin.html") }
      alert(message);
    }
  })
}
fetchUserProfile();
