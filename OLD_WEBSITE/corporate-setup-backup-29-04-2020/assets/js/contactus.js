const url = "https://corporate-setup.herokuapp.com/api/v1/contact-us";
const submitMessage = document.getElementById('submit-contact');

submitMessage.addEventListener('click', function(e){
    e.preventDefault();
    console.log('working')
    
    // const loginUsername = document.getElementById('login-user').value;
    
    const name = document.getElementById('name').value;

    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('messageTxt').value;


  const params = {
    email: email
  };
  console.log(JSON.stringify(params)) 
let formData = new FormData();
  formData.append('name', name);
  formData.append('email', email);
  formData.append('phone', phone);
  formData.append('message', message);
  fetch(url, {method:"POST", body:formData})
  .then(res => res.json())
  .then(x => {
    console.log(x.data);
    if (x.status != 'error') {
     alert(x.data);
      // similar behavior as an HTTP redirect 
     window.location.replace("index.html");
    } else {
      alert(JSON.stringify(x.error));
    }
  })
})
