function logout(){
    window.location = './login.html';
}

function page(entity_id){
    window.location = './entity_profile.html?id=' + entity_id;
}

function change_loc(location){
    window.location = location;
}

function preview(filename, template=0){
    var fileLocation = '../files/';
    var fileSource = fileLocation + filename;
    $('#iView').prop('src', fileSource);
    $("#previewModal").text(filename);
    let sendBtn = '';
    if (template === 1){
        sendBtn += '<button type="button" class="btn btn-outline-dark float-right mr-4" onclick="alert(\'cannot send documents yet\')">Send</button>';
    }
    $("#buttons").html(sendBtn +
        '<a class="btn btn-primary float-right mr-4" href="'+fileSource+'" download="'+filename+'">Download</a>\n' +
        '<button type="button" class="btn btn-secondary float-right mr-4" data-dismiss="modal">Close</button>');
    console.log(filename);
    console.log(fileSource);
    $('#docPreview').modal('toggle');
}

function download(file, text) {

    //creating an invisible element
    var element = document.createElement('a');
    element.setAttribute('href',
        'data:text/plain;charset=utf-8, '
        + encodeURIComponent(text));
    element.setAttribute('download', file);

    // Above code is equivalent to
    // <a href="path of file" download="file name">

    document.body.appendChild(element);

    //onClick property
    element.click();

    document.body.removeChild(element);
}