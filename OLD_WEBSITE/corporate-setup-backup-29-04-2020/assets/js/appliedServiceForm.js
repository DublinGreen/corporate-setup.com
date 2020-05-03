// var e = document.getElementById("country");
// var result = e.options[e.selectedIndex].value;
const url = "https://corporate-setup.herokuapp.com/api/v1/service/create-service-request";
const requests = [];

function getOption() {
    var checkboxes = document.getElementsByName('service[]');
    console.log(checkboxes)
    for(var i=0;i<checkboxes.length;i++){
    checkboxes[i].addEventListener('click', getParent);
  }

  function getParent(){    
  console.log(this.parentNode.innerText);
  requests.push(this.parentNode.innerText);
 }
}

// const sector = document.getElementById("sector");
// const company_name = document.getElementById("request_company");
// const full_name = document.getElementById('full_name');
// const request_email = document.getElementById('request_email');
// const request_phone = document.getElementById("request_phone");
// const request_country = document.getElementById("request_country");
// const request_message = document.getElementById('request_message');
const sub_button = document.getElementById('submit_request')

sub_button.addEventListener('click', function (e){
  e.preventDefault();
  const theToken = localStorage.getItem('token');
  if (!token) {
    alert('Please Login')
    window.location.replace("login.html");
  }
  const option_sel = document.getElementById("sector")
  const country_sel = document.getElementById('request_country');
  const sector = option_sel.options[option_sel.selectedIndex].innerText;
  const company_name = document.getElementById("request_company").value;
  const full_name = document.getElementById('full_name').value;
  const request_email = document.getElementById('request_email').value;
  const request_phone = document.getElementById("request_phone").value;
  const request_country = country_sel.options[country_sel.selectedIndex].innerText;;
  const request_message = document.getElementById('request_message').value;

  console.log(sector, company_name, full_name, request_message, request_phone, request_email, request_country, requests);

  let formData = new FormData();
  formData.append('full_name', full_name);
  formData.append('email', request_email);
  formData.append('location', request_country);
  formData.append('phone', request_phone);
  formData.append('message', request_message);
  formData.append('company_name', company_name);
  formData.append('sector', sector);
  formData.append('request', requests);
  fetch(url, {
      method:"POST", 
      body:formData, 
      headers: new Headers({
        'Authorization': `Bearer ${theToken}`
  }), })
  .then(res => res.json())
  .then(x => {
    console.log(x.data);
    if (x.status != 'error') {
      // similar behavior as an HTTP redirect
    //  localStorage.setItem('token', x.data); 
     alert(x.data);
     window.location.replace("index.html");
    } else {
      alert(JSON.stringify(x.error));
    }
  }) 
})


function getIndex(){ 
    const selectOption = document.getElementById("sector");
    let selected = selectOption.options[selectOption.selectedIndex].value;
    let showProduct = document.getElementById("show_product");
    
    if(selected == 0){
        showProduct.innerHTML = "";
    }
    
    if(selected == 1){
        
        showProduct.innerHTML = `<div class="row" id="show_product"><div class="col-md-12"> <input type="checkbox" name="service[]" id="3" value="3"> INCORPORATIONS ( CAC,CAC 7,CAC2)</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="15" value="15"> TIN NUMBER</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="7" value="7"> OFFICE ACQUISITION/OFFICE EQUIPMENT</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="8" value="8"> OPEN A COMPANY BANK ACCOUNT</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="16" value="16"> WEB DEVELOPMENT</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="10" value="10"> PRE/POST ADVERTISEMENT</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="11" value="11"> REGISTER COMPANY AS A BRAND DEALER</div> 

</div>`; 
    }
    if(selected == 2){
        showProduct.innerHTML = `<div class="row" id="show_product"><div class="col-md-12"> <input type="checkbox" name="service[]" id="3" value="3"> INCORPORATIONS ( CAC,CAC 7,CAC2)</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="15" value="15"> TIN NUMBER</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="1" value="1"> CENTRAL BANK LICENSE</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="6" value="6"> OFFICE ACQUISITION</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="12" value="12"> REGISTER COMPANY WITH A PENSION ADMINISTRATOR</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="13" value="13"> REGISTER COMPANY WITH STATE PAYEE</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="16" value="16"> WEB DEVELOPMENT</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="10" value="10"> PRE/POST ADVERTISEMENT</div> 

</div>`; 
    }
    if(selected == 3){
    
    showProduct.innerHTML = `<div class="row" id="show_product"><div class="col-md-12"> <input type="checkbox" name="service[]" id="3" value="3"> INCORPORATIONS ( CAC,CAC 7,CAC2)</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="15" value="15"> TIN NUMBER</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="6" value="6"> OFFICE ACQUISITION</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="8" value="8"> OPEN A COMPANY BANK ACCOUNT</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="16" value="16"> WEB DEVELOPMENT</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="10" value="10"> PRE/POST ADVERTISEMENT</div> 

</div>`;
    }
    if(selected == 4){
    
        showProduct.innerHTML = `<div class="row" id="show_product"><div class="col-md-12"> <input type="checkbox" name="service[]" id="3" value="3"> INCORPORATIONS ( CAC,CAC 7,CAC2)</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="15" value="15"> TIN NUMBER</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="6" value="6"> OFFICE ACQUISITION</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="8" value="8"> OPEN A COMPANY BANK ACCOUNT</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="16" value="16"> WEB DEVELOPMENT</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="10" value="10"> PRE/POST ADVERTISEMENT</div> 
    
    </div>`;
        }
        if(selected == 5){
    
            showProduct.innerHTML = `<div class="row" id="show_product"><div class="col-md-12"> <input type="checkbox" name="service[]" id="3" value="3"> INCORPORATIONS ( CAC,CAC 7,CAC2)</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="15" value="15"> TIN NUMBER</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="6" value="6"> OFFICE ACQUISITION</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="8" value="8"> OPEN A COMPANY BANK ACCOUNT</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="16" value="16"> WEB DEVELOPMENT</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="10" value="10"> PRE/POST ADVERTISEMENT</div> 
        
        </div>`;
            }
            if(selected == 6){
    
                showProduct.innerHTML = `<div class="row" id="show_product"><div class="col-md-12"> <input type="checkbox" name="service[]" id="3" value="3"> INCORPORATIONS ( CAC,CAC 7,CAC2)</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="15" value="15"> TIN NUMBER</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="6" value="6"> OFFICE ACQUISITION</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="8" value="8"> OPEN A COMPANY BANK ACCOUNT</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="16" value="16"> WEB DEVELOPMENT</div><div class="col-md-12"> <input type="checkbox" name="service[]" id="10" value="10"> PRE/POST ADVERTISEMENT</div> 
            
            </div>`;
                }

                getOption();
}
