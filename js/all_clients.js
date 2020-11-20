

let clientTable = new Tabulator('#clientTable', {
   placeholder: "Fetching results...",
   layout: "fitColumns",
   ajaxURL: "../json/getAllClients.json",
   ajaxContentType: "json",
    ajaxResponse: function(url, params, data){
       return data.results;
    },
   height: "auto",
   index: "id",
    rowClick: function(e, row){
        $("#clientModal").modal('toggle');
    },
   columns: [
       {title: 'id', field: 'id', visible: false},
       {title: 'First Name', field: 'fname', align: 'center'},
       {title: 'Last Name', field: 'lname', align: 'center'},
       {title: 'Entity', field: 'entity', align: 'center'},
       {title: 'Contact', field: 'email', align: 'center'}
   ]
});