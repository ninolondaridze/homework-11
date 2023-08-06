let user = prompt('Who is there?');
if (user ==='Admin') {
    let password = prompt('Password?');

    if (password === 'TheMaster') {
        alert('Welcome');
    }
    else if (password === null || password ==='') {
        alert('Canceled');
    } else {
        alert('Wrong Password');
    }  
}
else if (user === null || user == '' ) {
    alert('Canceled ');
} else {
    alert("I don't know you");
}