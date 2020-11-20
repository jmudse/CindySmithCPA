var clientTable = new Tabulator('#clientTable', {
    placeholder: "Fetching results...",
    layout: "fitData",
    initialSort: "id",
    dataTree: true,
    dataTreeStartExpanded:true, //start with an expanded tree
    dataTreeChildField: "spouse",
    ajaxURL: "../json/getAllClients.json",
    ajaxContentType: "json",
    ajaxResponse: function(url, params, data){
        return data.clients;
    },
    maxHeight: "100%",
    index: "id",
    rowClick: function(e, row){
    },
    columns: [
        {title: 'Client ID', field: 'id', hozAlign: "left",editor:"input"},
        {title: 'Client Name', field: 'name', align: 'left',editor:"input"},
        {title: 'Contact Name', field: 'entity.name', align: 'left',editor:"input"},
        {title: 'Entity Type', field: 'entity.type', align: 'left',editor:"input"},
        {title: 'Email Address', field: 'email', align: 'left',editor:"input"},
        {title: 'Contact Address', field: 'contact_address', align: 'left',editor:"input"},
        {title: 'City', field: 'city', align: 'left',editor:"input"},
        {title: 'State', field: 'state', align: 'center',editor:"input"},
        {title: 'Country', field: 'country', align: 'center',editor:"input"},
        {title: 'Zip', field: 'zip', align: 'center',editor:"input"},
        {title: 'Work Phone', field: 'work_phone', align: 'left',editor:"input"},
        {title: 'Extension', field: 'extension', align: 'left',editor:"input"},
        {title: 'Home Phone', field: 'home_phone', align: 'left',editor:"input"},
        {title: 'Fax', field: 'fax', align: 'left',editor:"input"},
        {title: 'Mobile Phone', field: 'mobile_phone', align: 'left',editor:"input"},
        {title: 'Pager', field: 'pager', align: 'left',editor:"input"},
        {title: 'Other', field: 'other', align: 'left',editor:"input"},
        {title: 'Other-Extension', field: 'other-ext', align: 'left',editor:"input"},
        {title: 'Salutation', field: 'salutation', align: 'left',editor:"input"},
        {title: 'Tax Matters Person', field: 'tax_matters_person', align: 'left',editor:"input"},
        {title: 'Preferred', field: 'preferred', align: 'left',editor:"input"},
    ]
});