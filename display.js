define(function (edit) {
  console.log("helo!");

var loggin_user = "";

pnp.sp.profiles.MyPrperties.get().then(function(result) {


  console.log(result);
  var props = result.UserProfileProperties;
  for (var i = 0; i < props.length; i++) {
    switch (props[i].Key) {
      case 'username':
        console.log(props[i].Value);
        loggin_user = props[i].Value;
        break;

    }
  }
  var dt = $(fd.control("SPDataTable1").$el);
  //hides 'Add new record' button
  fd.control("SPDataTable1").widget.dataSource.filter({
    field: fd.field("TECHNICIAN").value.EntityData.Email,
    operator: "in",
    value: loggin_user
  });
  dt.find(".fd-datatable div.k-header.k-grid-toolbar").css("display", "none");
  //hides delete column
  dt.find(
    ".fd-datatable table tr th:last-child,.fd-datatable table tr td:last-child"
  ).css("display", "none");
});
