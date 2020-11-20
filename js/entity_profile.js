
const urlParams = new URLSearchParams(window.location.search)

let entity_data = $.getJSON('../json/getEntityProfile'+urlParams.get('id')+'.json', function(data){
    $('title').text(data.entity_name + ' | Client Portal');
    $('#entity_path').text(data.entity_name);
    $("#year_path").text(data.year);
    $('#user_path').text('John Doe');
    let files = '';
    $.each(data.files, function(i, file){
        files += '<div class="card card-file col-2">\n' +
            '                    <div class="file-header col-12 text-center">\n' +
            '                        ' + file.entity_name +'\n' +
            '                    </div>\n' +
            '                    <div class="'+file.file_type+' file-body col-8 offset-2 text-center text-white">\n' +
            '                        '+ file.file_type +'\n' +
            '                    </div>\n' +
            '                    <div class="file-footer col-12 text-center">\n' +
            '                        '+file.file_name+'\n' +
            '                    </div>\n' +
            '                </div>';
        $("#files").html(files);
    });
    let years = '';
    $.each(data.available_years, function(i, year){
        if (year.year !== data.year){
            years += '<button class="dropdown-item">'+year.year+'</button>';
            $('#year_dropdown').html(years);
        }
    });
    let entities = '';
    $.each(data.available_entities, function(i, entity){
        if (entity.entity_name !== data.entity_name){
            entities += '<a class="dropdown-item" href="./entity_profile.html?id='+entity.entity_id+'">'+entity.entity_name+'</a>';
            $('#entity_dropdown').html(entities);
        }
    });
});
