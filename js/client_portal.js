

let json = $.getJSON("../json/getClientDashboard.json", function(result){
    let recents = '';
    $.each(result.recent_files, function(i, file){
        recents += '<div class="card card-file col-2" onclick="preview(\''+file.file_name+'\')">\n' +
            '                    <div class="file-header col-12 text-center">\n' +
            '                        ' + file.entity_name +'\n' +
            '                    </div>\n' +
            '                    <div class="'+file.file_type+' file-body col-8 offset-2 text-center text-white">\n' +
            '                        '+ file.file_type +'\n' +
            '                    </div>\n' +
            '                    <div class="file-footer col-12 text-center">\n' +
            '                        '+file.file_name+'\n' +
            '                    </div>\n' +
            '                </div>'
        $("#recents").html(recents);
    });
    let entities = '';
    $.each(result.entities, function(i, entity){
       entities += '<div class="card card-company d-inline-block col-5 mr-3" onclick="page('+entity.entity_id+')">\n' +
           '                    <div class="entity-icon">'+getInitials(entity.entity_name)+'</div>\n' +
           '                    <div class="entity-info">\n' +
           '                        <div class="entity-name">'+entity.entity_name+'</div>\n' +
           '                        <div class="entity-type">'+entity.entity_type+'</div>\n' +
           '                    </div>\n' +
           '                </div>';
       $('#entities').html(entities);
    });
});


function getInitials(string){
    let words = string.split(' ');
    let response = '';
    for (let i = 0; i < words.length; i++){
        if (isSignificant(words[i])){
            response += words[i][0].toUpperCase();
            if (response.length === 2) return response;
        }
    }
    if (response.length > 0) return response;
    return 'n/a';
}

function isSignificant(word){
    let words = ['and', '&', 'or']
    for (let i = 0; i < words.length; i++) {
        if (words[i] === word) {
            return false
        }
    }
    return true;
}


