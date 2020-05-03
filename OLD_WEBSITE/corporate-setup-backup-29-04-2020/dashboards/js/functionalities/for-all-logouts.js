const logOutButton = document.getElementById('log-out-button');

const logoutUser = () => {
    localStorage.removeItem('token');
    console.log(localStorage.getItem('token'));
    const role = localStorage.getItem('role');
    if (role === 'user') {  window.location.replace('../../login.html') }
    if ( role === 'admin') { window.location.replace('../../admin.html') }
   
}