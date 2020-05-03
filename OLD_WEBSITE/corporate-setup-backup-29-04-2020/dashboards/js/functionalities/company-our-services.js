
// const authErrors = ['Authentication required', 'Please Login to perform this operation']

const applyForService = (email, service) => {
    const theToken = localStorage.getItem('token');
    if (!theToken) {
      alert('Please Login')
      window.location.replace("login.html");
    }
    console.log(email, service);
    const url = "https://corporate-setup.herokuapp.com/api/v1/user/request-service"
  let formData = new FormData();
  formData.append('user_email', email);
  formData.append('service', service);
  fetch(url, {
      method:"POST", 
      body:formData, 
      headers: new Headers({
    'Authorization': `Bearer ${theToken}`
    }),
})
  .then(res => res.json())
  .then(x => {
    console.log(x.data);
    if (x.status != 'error') {
      alert(x.data)
      window.location.replace("company-profile.html")
    } else if (x.status == 'error') {
      const message = x.error.message == "jwt expired" ? "Please Login to perform this operation" : x.error
      if (authErrors.includes(message)) { window.location.replace("../login.html") }
      alert(message);
    }
  })
}


const incorporationEmail = document.getElementById('incorporation-email');

const incorporationApplyButton = document.getElementById('modal-apply-button-incorporation');

const wDesignEmail = document.getElementById('web-design-email');

const wDesignButton = document.getElementById('modal-apply-button-website');

const rBodiesEmail = document.getElementById('regulatory-bodies-email');

const rBodiesButton = document.getElementById('modal-apply-button-regulatory-bodies');

const newComIntroEmail = document.getElementById('new-company-introduction-email');

const newComIntroButton = document.getElementById('modal-apply-button-for-new-company-introduction');

const staffTrainEmail = document.getElementById('staff-training-email');

const staffTrainButton = document.getElementById('modal-apply-button-for-staff-training');

const profBidderEmail = document.getElementById('prof-bidder-email');

const profBidderButton = document.getElementById('modal-apply-button-prof-bidder');


incorporationApplyButton.addEventListener('click', () => applyForService(incorporationEmail.value, 'Incorporation'));
wDesignButton.addEventListener('click', () => applyForService(wDesignEmail.value, 'Web Development'));
rBodiesButton.addEventListener('click', () => applyForService(rBodiesEmail.value, 'Register with regulatory bodies'));
newComIntroButton.addEventListener('click', () => applyForService(newComIntroEmail.value, 'New Company Introduction'));
staffTrainButton.addEventListener('click', () => applyForService(staffTrainEmail.value, 'Request for staff training'));
profBidderButton.addEventListener('click', () => applyForService(profBidderEmail.value, 'Hire a Professional Bider'));

