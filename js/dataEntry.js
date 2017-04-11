
$("#submitBtn").click(function(){
    var formData = JSON.stringify($("#customerHousehold").serializeArray());
    //this should grab the form data and put it into a JSON
    console.log(formData);
    console.log("hello");
});


