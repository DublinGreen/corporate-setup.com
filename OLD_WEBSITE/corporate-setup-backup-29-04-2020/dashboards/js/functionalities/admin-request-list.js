//Template to make naming easy ;)
//const  = document.getElementById("");

const companyList = document.getElementById("company-list");

const searchInput = document.getElementById("search-input");

const searchButton = document.getElementById("search-button");
const requestList = document.getElementById('request-row');

const authErrors = ['Authentication required', 'Please Login to perform this operation']



const updateRequestStatus = (id) => {
    console.log(id);
    const theToken = localStorage.getItem('token');
    if (!theToken) {
      alert('Please Login')
      window.location.replace("login.html");
    }
    const url = "https://corporate-setup.herokuapp.com/api/v1/admin/update-request"
    const formData = new FormData();
    formData.append('req_uuid', id);
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
};

const checkColor = (status) => {
    return status === 'approved' ? 'btn btn-success' : 'btn btn-danger'
}

const checkButtonText = (status) => {
    return status === 'approved' ? 'PEND' : 'APPROVE'
}


const createUser = (data) => {
        const el = `<div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title" id="card-title">${data.service}</h5>
            <p class="card-text" id="senders-email">${data.user_email}</p>
            <p class="card-text" id="request-status">${data.status}</p>
            Approved state:
            <div class="">
      <input class="${checkColor(data.status)}" type="button" value="${checkButtonText(data.status)}" id="defaultCheck1" onclick="updateRequestStatus('${data.uuid}')">
    </div>       
</div>
 </div>
</div>`;
return el;
};

//list users on the platform

const fetchUsers = () => {
    const theToken = localStorage.getItem('token');
    if (!theToken) {
      alert('Please Login')
      window.location.replace("login.html");
    }
    const url = "https://corporate-setup.herokuapp.com/api/v1/admin/list-request"
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
            const user = createUser(d);
            el.push(user)
        });
        requestList.innerHTML = el;
    } else if (x.status == 'error') {
      const message = x.error.message == "jwt expired" ? "Please Login to perform this operation" : x.error
      if (authErrors.includes(message)) { window.location.replace("../../login.html") }
      alert(message);
    }
  })
}

fetchUsers();

