let json = $.getJSON("../json/getManagerDashboard.json", function(result){
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
});

var entity_table = new Tabulator('#entityTable', {
    placeholder: "Fetching results...",
    layout: "fitColumns",
    ajaxURL: "../json/getAllEntities.json",
    ajaxContentType: "json",
    ajaxResponse: function(url, params, data){
        return data.entities;
    },
    maxHeight: "100%",
    index: "id",
    rowClick: function(e, row){
        window.location = './entity_profile.html?id=' + row.getData().entity_id;
    },
    columns: [
        {title: 'id', field: 'entity_id', visible: false},
        {title: 'Name', field: 'entity_name', hozAlign: 'center'},
        {title: 'Type', field: 'entity_type', hozAlign: 'center'},
        {title: 'Primary Contact', field: 'primary_contact', hozAlign: 'center'}
    ]
});

$(document).ready(function () {

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

});