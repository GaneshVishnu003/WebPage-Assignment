
var status=1;
function submit()
{
 status=1;
  validateName();
  validatePhoneNo();
  validateAddress();
  validateAddress3();
  validateEmail();
  validateForm();
  validateZipCode();
  validateSecurityCode();
  validateExpiryMonth();
  validateCountry();
  if(status==1)
  {
    alert("Payment Successful...");
    location.replace("index.htm");
  }
}

//Validation for card number
function validateForm() {
    var cardNumber = document.getElementById("txtCardNumber");
      if (cardNumber.value.length == 0) {
        status = 0;
        document.getElementById("cardValid").innerHTML = "Please Enter a card number";
        document.getElementById("cardValidLeft").innerHTML = " &nbsp ";
        cardNumber.value=null;
    }
    else {
      
        var regex = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
        if (!cardNumber.value.match(regex)) {
          status = 0;
            document.getElementById("cardValid").innerHTML = "Please Enter a valid card number";
            document.getElementById("cardValidLeft").innerHTML = " &nbsp ";
            cardNumber.value=null;
        } 
    }
    }

//Validation for security code
function validateSecurityCode() {
  var security = document.getElementById("txtSecurityCode");
  if(security.value.length==0)
  {
    status = 0;
     document.getElementById("securityValid").innerHTML ="Please Enter a security code";
        document.getElementById("securityValidLeft").innerHTML = " &nbsp ";
        security.value=null;
  }else{
  var regex = /[0-9]{3}/; 
    if (!security.value.match(regex)) {
      status = 0;
        document.getElementById("securityValid").innerHTML = "Please Enter a valid security code";
        document.getElementById("securityValidLeft").innerHTML = " &nbsp ";
        security.value = null;
    }
  }
}

//Validation for Expiry date
function validateExpiryMonth() {
  var x = document.getElementById("month").selectedIndex;
 var y = document.getElementById("year").selectedIndex;
  if (x == "" || y == "") {
    status = 0;
    document.getElementById("monthValid").innerHTML = "Please select a valid month and year";
        document.getElementById("monthValidLeft").innerHTML = " &nbsp ";
  }
}

//Validation for cardholder's name
function validateName() {
  var x = document.getElementById("txtName");
  var regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    if (!x.value.match(regex)) {
      status = 0;
       document.getElementById("nameValid").innerHTML = "Please Enter a valid name";
       document.getElementById("nameValidLeft").innerHTML = " &nbsp ";
        x.value = null;
    }else if(x.value.length==0){
      status = 0;
       document.getElementById("nameValid").innerHTML = "Please Enter name";
    }
}

//Validation for address
function validateAddress() {
  var x = document.getElementById("txtAddress");
  var regex = /^[a-zA-Z0-9\s,'-]*$/;
    if (!x.value.match(regex)) {
      status = 0;
               document.getElementById("addressValid").innerHTML = "Please Enter a valid address";
              document.getElementById("addressValidLeft").innerHTML = " &nbsp ";
        x.value = null;
    }else if(x.value.length==0){
      status = 0;
      document.getElementById("addressValid").innerHTML = "Please Enter address";
      document.getElementById("addressValidLeft").innerHTML = " &nbsp ";
    }
}


//Validation for address
function validateAddress3() {
    var x = document.getElementById("txtAddress3");
    var regex = /^[a-zA-Z0-9\s,'-]*$/;
    if (!x.value.match(regex)) {
      status = 0;
       document.getElementById("townValid").innerHTML = "Please Enter a valid Town/City";
              document.getElementById("townValidLeft").innerHTML = " &nbsp ";
        x.value = null;
    }else if(x.value.length==0){
      status = 0;
      document.getElementById("townValid").innerHTML = "Please Enter Town/City";
      document.getElementById("townValidLeft").innerHTML = " &nbsp ";
    }
}

//Validation for country
function validateCountry() {
  var x = document.getElementById("country").selectedIndex;
  if (x == "")
  {
    //document.getElementById("countryValid").innerHTML = "Please select a country";
     //  document.getElementById("countryValidLeft").innerHTML = " &nbsp ";
  }
}

//Validation for zip code
function validateZipCode() {
  var x = document.getElementById("txtZipcode");
  var regex = /[0-9]{6}/;
    if (!x.value.match(regex)) {
      status = 0;
      document.getElementById("zipValid").innerHTML = "Please enter a valid zipcode";
       document.getElementById("zipValidLeft").innerHTML = " &nbsp ";
        x.value = null;
    }else if(x.value.length==0){
      status = 0;
      document.getElementById("zipValidLeft").innerHTML = " &nbsp ";
       document.getElementById("zipValid").innerHTML = "Please enter zipcode";
    }
}

//Validation for Telephone number
function validatePhoneNo() {
  var x = document.getElementById("txtPhone");
  var regex = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    if (!x.value.match(regex)) {
      status = 0;
        document.getElementById("phoneValid").innerHTML = "Please enter a valid Phone number";
       document.getElementById("phoneValidLeft").innerHTML = " &nbsp ";
        x.value = null;
    }
}


//Validation for Email
function validateEmail() {
  var x = document.getElementById("txtEmail");
  var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!x.value.match(regex)) {
      status = 0;
       document.getElementById("mailValid").innerHTML = "Please enter a valid mail Id";
       document.getElementById("mailValidLeft").innerHTML = " &nbsp ";
        x.value = null;
    }
    else if(x.value.length==0){
      status = 0;
       document.getElementById("mailValid").innerHTML = "Please enter mail Id";
    }
}


function CardInfo() {
    alert("The Card details are required for the payment. The card details you enter will be secured...");
}

function CustomerInfo() {
    alert("The Cardholder details are required to validate the card for the payment. The Cardholder details can vary from the billee details.");
}

function startpage() {
    alert("You refreshed the page. The details will be cleared and you should start again.");
}

function cancel() {
  alert("You are suppose to stop the page. Please restart the payment");
    window.stop();
}
/*
function submit() {
        alert("Paymet Successfull!");
    }




function validateCardNumber() {
  var x = document.getElementById("txtCard");
  var regex = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
  if (!x.value.match(regex)) {
    alert("Card number is invalid!");
      x.focus();
      x.value = null;
  }
}

function validateSecurityCode() {
  var x = document.getElementById("txtSecurityCode");
  var regex = /[0-9]{8}/;
    if (!x.value.match(regex)) {
        alert("Security code is invalid!");
        x.focus();
        x.value = null;
    }
}

function validateExpiryMonth() {
  var x = document.getElementById("month").selectedIndex;

  if (x === 0) alert("Expiry Month is invalid!");
}

function validateExpiryYear() {
  var y = document.getElementById("year").selectedIndex;
  if (y === null) alert("Expiry Year is invalid!");
}



function validateName() {
  var x = document.getElementById("txtName");
  var regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    if (!x.value.match(regex)) {
        alert("Name is Invalid");
        x.focus();
        x.value = null;
    }
}

function validateAddress() {
  var x = document.getElementById("txtAddress");
  var regex = /^[a-zA-Z0-9\s,'-]*$/;
    if (!x.value.match(regex)) {
        alert("Address is invalid!");
        x.focus();
        x.value = null;
    }
}

function validateAddress1() {
    var x = document.getElementById("txtAddress1");
    var regex = /^[a-zA-Z0-9\s,'-]*$/;
    if (!x.value.match(regex)) {
        alert("Address is invalid!");
        x.focus();
        x.value = null;
    }
}

function validateAddress2() {
    var x = document.getElementById("txtAddress2");
    var regex = /^[a-zA-Z0-9\s,'-]*$/;
    if (!x.value.match(regex)) {
        alert("Address is invalid!");
        x.focus();
        x.value = null;
    }
}




function validateAddress3() {
    var x = document.getElementById("txtAddress3");
    var regex = /^[a-zA-Z0-9\s,'-]*$/;
    if (!x.value.match(regex)) {
        alert("Address is invalid!");
        x.focus();
        x.value = null;
    }
}
*/
//////////For question mark



/*
function validateAddress4() {
    var x = document.getElementById("txtAddress4");
    var regex = /^[a-zA-Z0-9\s,'-]*$/;
    if (!x.value.match(regex)) {
        alert("Address is invalid!");
        x.focus();
        x.value = null;
    }
}

function validatePhoneNo() {
  var x = document.getElementById("txtPhone");
  var regex = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    if (!x.value.match(regex)) {
        alert("Phone number is invalid!");
        x.focus();
        x.value = null;
    }
}

function validateFax() {
  var x = document.getElementById("txtFax");
  var regex = /^\+?[0-9]{6,}$/;
    if (!x.value.match(regex)) {
        alert("Fax number is invalid!");
        x.focus();
        x.value = null;
    }
}

function validateEmail() {
  var x = document.getElementById("txtEmail");
  var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!x.value.match(regex)) {
        alert("Email is invalid!");
        x.focus();
        x.value = null;
    }
}

function validateZipCode() {
  var x = document.getElementById("txtZipcode");
  var regex = /^[0-9]{5}(?:-[0-9]{4})?$/;
    if (!x.value.match(regex)) {
        alert("Zip Code is invalid!");
        x.focus();
        x.value = null;
    }
}
function validateCountry() {
  var x = document.getElementById("country").selectedIndex;
  if (x === 0) alert("Country is invalid");
}

*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////



