function login(){
    let user = $('#user_email').val();
    if (user === 'client'){
        window.location = "./client_portal.html";
    }else if (user === 'manager'){
        window.location = "./managerportal.html";
    }else if (user === 'employee'){
        window.location = "./employee_portal.html";
    }else{
        $.notify('Incorrect login information, please try again.', 'error');
    }
}