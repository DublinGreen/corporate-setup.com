const searchACompany = document.getElementById('search-a-company');

const searchACompanyButton = document.getElementById('search-a-company-button');

const companyList = document.getElementById('company-list');

const authErrors = ['Authentication required', 'Please Login to perform this operation', 'Authentication Failed']


const inflate = (data) => {
  return`<option value="${data.email}">${data.name}</option>`;
}

const saveCompanyUUID = () => {
console.log(searchACompany.value);
localStorage.setItem('searched_user_email', searchACompany.value);
 window.location.replace("./company-view-company-profile.html")
}
userDropDown = () =>{
  const theToken = localStorage.getItem('token');
  if (!theToken) {
    alert('Please Login')
    window.location.replace("login.html");
  }
  const url = "https://corporate-setup.herokuapp.com/api/v1/user/search-user";
 fetch(`${url}?input=${searchACompany.value}`, {
    method:"GET", 
    headers: new Headers({
  'Authorization': `Bearer ${theToken}`
  }),
 })
.then(res => res.json())
.then(x => {  
  if (x.status != 'error') {
    console.log(x.data);
   const y = [];
   x.data.forEach(el => {
     const element = inflate(el);
     y.push(element);
   });
   companyList.innerHTML = y;
  } else if (x.status == 'error') {
    const message = x.error.message == "jwt expired" ? "Please Login to perform this operation" : x.error
    if (authErrors.includes(message)) { window.location.replace("../login.html") }
    alert(message);
  }
})
   
  }

  searchACompanyButton.addEventListener('click', function(e){
    e.preventDefault();
    console.log(searchACompany.value);
    localStorage.setItem('searched_user_email', searchACompany.value);
    window.location.replace("./company-view-company-profile.html")
  });