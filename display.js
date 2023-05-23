define(function (edit){
console.log("helo!");


  var dt = $(fd.control('SPDataTable1').$el);
//hides 'Add new record' button  
dt.find('.fd-datatable div.k-header.k-grid-toolbar').css('display', 'none')
//hides delete column
dt.find('.fd-datatable table tr th:last-child,.fd-datatable table tr td:last-child').css('display', 'none')
})






})
