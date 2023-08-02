let user = prompt('Who is there?');
if (user ==='Admin') {
    let password = prompt('Password?');

    if (password == 'TheMaster') {
        alert('Welcome');
    }
    else if (password == undefined) {
        alert('Canceled');
    } 
    else if (password =='') {
        alert ('Canceled')
    } else {
        alert('Wrong Password');
    }  
}
else if (user == undefined) {
    alert('Canceled ');
} 
else if (user == '') {
    alert ('Canceled');
}
else {
    alert("I don't know you");
}