const updateButton = document.getElementById('form-update-button');

const companyPhoneNumber = document.getElementById('companyInputPhoneNumber');

const companyEmail = document.getElementById('companyInputEmail');

const companyName = document.getElementById('companyInputName');

const uploadPicture = document.getElementById('upload-profile-picture-button');

const briefSummary = document.getElementById('brief-summary');

const companyWebsite = document.getElementById('company-website');

// const authErrors = ['Authentication required', 'Please Login to perform this operation']


// get user profile

const getProfile = () => {
    const theToken = localStorage.getItem('token');
    if (!theToken) {
      alert('Please Login')
      window.location.replace("../../login.html");
    }
    const url = "https://corporate-setup.herokuapp.com/api/v1/user/profile"
   fetch(url, {
      method:"GET", 
      headers: new Headers({
    'Authorization': `Bearer ${theToken}`
    }),
   })
  .then(res => res.json())
  .then(x => {
    if (x.status != 'error') {
      companyName.value = x.data.profile.name;
      companyPhoneNumber.value = x.data.profile.phone;
      companyEmail.value = x.data.profile.email;
      // _status.innerHTML = `Status: <span style = "color: green;">${x.data.profile.status}</span>`
    } else if (x.status == 'error') {
      const message = x.error.message == "jwt expired" ? "Please Login to perform this operation" : x.error
      if (authErrors.includes(message)) { window.location.replace("../login.html") }
      alert(message);
    }
  })
}

getProfile();

// update profile

updateButton.addEventListener('click', (e) => {
    const theToken = localStorage.getItem('token');
    if (!theToken) {
      alert('Please Login')
      window.location.replace("../../login.html");
    }
    e.preventDefault();
    const url = "https://corporate-setup.herokuapp.com/api/v1/user/update-profile"
    let formData = new FormData();
    formData.append('companyName', companyName.value);
    formData.append('email', companyEmail.value);
    formData.append('phone', companyPhoneNumber.value);
    formData.append('summary', briefSummary.value);
    formData.append('website', companyWebsite.value);
     
    if (uploadPicture.files[0]) {
        formData.append('file', uploadPicture.files[0]);
    }
    fetch(url, {
        method:"PUT",
        headers: new Headers({
            'Authorization': `Bearer ${theToken}`
            }),
        body:formData})
    .then(res => res.json())
    .then(x => {
      console.log(x.data);
      if (x.status != 'error') {
        // similar behavior as an HTTP redirect
      //  localStorage.setItem('token', x.data); 
       alert(x.data);
       window.location.replace("./company-profile.html");
      } else if (x.status == 'error') {
        const message = x.error.message == "jwt expired" ? "Please Login to perform this operation" : x.error
        if (authErrors.includes(message)) { window.location.replace("../login.html") }
        alert(message);
      }
    })
})
