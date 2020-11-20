let json = $.getJSON("../json/getTemplateTypes.json", function(result){
    let template = '';
    let types = '';
    $.each(result.templates, function(i, temp){
        template += '<div id="'+temp.id+'"  class="col-3 card card-template" onclick="switch_templates(\''+temp.id+'\')">\n' +
            '                    <h3 class="col-12 text-dark text-center">'+temp.label+'</h3>\n' +
            '                </div>';
        $("#type_cards").html(template);
    });
});

function switch_templates(id){
    $(".card-template").removeClass('card-active');
    $("#" + id).addClass('card-active');
    template_table.setData('../json/getTemplates' + id + '.json');
}

var template_table = new Tabulator('#templateTable', {
    placeholder: "Fetching results...",
    layout: "fitColumns",
    ajaxURL: "../json/getTemplates1.json",
    ajaxContentType: "json",
    ajaxResponse: function(url, params, data){
        return data.templates;
    },
    height: "300px",
    index: "id",
    rowClick: function(e, row){
        preview(row.getData().location + row.getData().filename, 1);
    },
    columns: [
        {title: 'location', field: 'location', visible: false},
        {title: 'Filename', field: 'filename', hozAlign: 'center'},
        {title: 'Date created', field: 'created_at', hozAlign: 'center'},
        {title: 'Filetype', field: 'filetype', hozAlign: 'center'},
    ]
});