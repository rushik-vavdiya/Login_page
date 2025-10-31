document.addEventListener("DOMContentLoaded", () => {

  // Both divs
  const login = document.getElementsByClassName('login_box')[0];
  const sign = document.getElementsByClassName('sign_up_box')[0];

  // login box inputs
  const username = document.querySelector("input[name='username']");
  const password = document.querySelector("input[name='password']");

  // sign up box inputs
  const newusername = document.querySelector("input[name='newusername']");
  const newpassword = document.querySelector("input[name='newpassword']");
  const repassword = document.querySelector("input[name='repassword']");

  // texts
  const newlogin = document.querySelector('#new_login'); // don't have account!
  const logintext = document.querySelector('#login2');   // Login

  // buttons
  const submit = document.querySelector('#submit');
  const submit2 = document.querySelector('#submit2');

  // Title
  const title = document.querySelector('#title');

  // first show login page
  login.style.display = "block";
  sign.style.display = "none";

  // Switch to Sign-Up
  newlogin.addEventListener('click', () => {
    login.style.display = "none";
    sign.style.display = "block";
    title.innerHTML = "Sign in ";
  });

  // Switch back to Login
  logintext.addEventListener('click', () => {
    login.style.display = "block";
    sign.style.display = "none";
    title.innerHTML = "Login ";

  });




  // sign in button
  submit2.addEventListener('click',()=>{

    newuser = newusername.value.trim();
    newpass = newpassword.value.trim();
    repass = repassword.value.trim();


    if (newuser == '' || newpass == '' || repass == ''){
        alert("Please enter detail !!!")
    }
    else if (newpass != repass){
        alert("Both passowrd are not match !!!")
    }
    else{
        localStorage.setItem('username',JSON.stringify(newuser));
        localStorage.setItem('password',JSON.stringify(repass));
        alert("Successfully sign in ");
        login.style.display = "block";
        sign.style.display = "none";
        title.innerHTML = "Login Page";


    }
  
  });


  // login button
  submit.addEventListener('click', ()=>{
    user = username.value.trim();
    pass = password.value.trim();
    let datauser = JSON.parse(localStorage.getItem('username'));
    let datapass = JSON.parse(localStorage.getItem('password'));

    if (user == '' || pass == ''){
        alert("Please enter username and password !!!")
    }
    else if (user == datauser && pass == datapass){
        alert("successfully login!!!")
    }
    else{
        alert("Invalid data !!!")
    }
  })







});
