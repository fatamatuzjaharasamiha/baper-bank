document.getElementById('login-submit').addEventListener('click', function () {
    // button e click krle console er likhata inspect er console e showw hy kina chk lebo,show hle button kj krtece
    // console.log('button clicked');


    // get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // console.log(userEmail);


    // get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    //check email and password:
    if (userEmail == 'santan@baap.com' && userPassword == 'secret') {
        // console.log('Valid User');
        window.location.href = 'banking.html'
    }
})

