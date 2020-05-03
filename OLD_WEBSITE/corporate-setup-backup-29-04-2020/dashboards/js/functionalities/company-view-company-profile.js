const basicProfile = document.getElementById('user-basic-profile');
const userDoc = document.getElementById('card_container');
const container = document.getElementById('company-profile-list');
console.log(localStorage.getItem('searched_user_email'));
const _user_email = localStorage.getItem('searched_user_email');
// const authErrors = ['Authentication required', 'Please Login to perform this operation']
const listDocs  = (array) => {
    const all = [];
    array.forEach(x => {
    const ex = ` <li class="list-group-item">${x.name} 
    <div class="text-right">
    </div>
    </li>`; 
    all.push(ex);
    });
    return all;
}

const checkButtonText = (status) => {
  return status === 'active' ? 'SUSPEND COMPANY' : 'ACTIVATE COMPANY'
}

const companyLogo = (data) => {
  if (data.user.logo) {
    return data.user.logo;
  } else {
    return '../assets/images/pimg.png'
  }
}
const createUserProfile = (data) => {
    return `<ul class="list-group">
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
    <li class="list-group-item">
         <h2 class="m-4">User Documents</h2>
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
        const url = "https://corporate-setup.herokuapp.com/api/v1/view-user-profile";
        const formData = new FormData()
        formData.append('email', _user_email)
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

fetchUserProfile();
