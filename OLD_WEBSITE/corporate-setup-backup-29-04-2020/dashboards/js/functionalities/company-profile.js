
// const authErrors = ['Authentication required', 'Please Login to perform this operation']

const searchInput = document.getElementById("search-input");

const searchButton = document.getElementById("search-button");

const profilePicture = document.getElementById("profile-picture");

const uploadPicButton = document.getElementById("upload-profile-picture-button");

const companyProfileDetails = document.getElementById("company-profile-details");

const companyName = document.getElementById("name__");

const phone = document.getElementById("phone__");

const email = document.getElementById("email__");

const cWebsite = document.getElementById("website__");

const summary = document.getElementById("brief-summary");

// const _status = document.getElementById("status__");

// const _name = document.getElementById("name__");


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
      console.log(x.data);
      companyName.innerHTML = `Company Name: <span style = "color: green;">${x.data.profile.name}</span>`;
      phone.innerHTML = `Phone: <span style = "color: green;">${x.data.profile.phone}</span>`;
      email.innerHTML = `Email: <span style = "color: green;">${x.data.profile.email}</span>`;
      cWebsite.innerHTML = `Website: <span style = "color: green;">${x.data.profile.website}</span>`;
      profilePicture.src = x.data.profile.logo;
      summary.value = x.data.profile.summary
      // _status.innerHTML = `Status: <span style = "color: green;">${x.data.profile.status}</span>`
    } else if (x.status == 'error') {
      console.log(x.error);
      const message = x.error.message == "jwt expired" ? "Please Login to perform this operation" : x.error
      alert(message);
      if (authErrors.includes(message)) { window.location.replace("../login.html") }
    }
  })
}

getProfile();

