// document.getElementById('login-submit').addEventListener('click', function(){
     
//      // get user email
//       const emailField = document.getElementById('user-email');
//       const userEmail = emailField.value ;
        
//       // getUser password

//       const passwordField = document.getElementById('user-password');
//       const userPassword = passwordField.value;
       
      
//       if(userEmail == 'sontan@baap.com' && userPassword == 'secret'){
//            window.location.href = 'banking.html';
//       }
// });

document.getElementById('login-submit').addEventListener('click', function(){
      const emailField = document.getElementById('user-email');
      const userEmail = emailField.value ;
      const passwordField = document.getElementById('user-password');
      const userPassword = passwordField.value;
      // console.log(userEmail);
      // console.log(userPassword);
      if(userEmail == 'sontan@baap.com' && userPassword == 'secret'){
           window.location.href = 'banking.html';
      }
});


