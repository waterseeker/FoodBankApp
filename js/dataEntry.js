
$.fn.serializeObject = function()
{
    var formObject = {};//empty object
    var  serializedForm= this.serializeArray(); // serializeArray creates an array of objects (name and value) by serializing form values.
    $.each(serializedForm, function() { //for each thing in a
        if (formObject[this.name] !== undefined) { //if it has a name that is not undefined
            if (!formObject[this.name].push) { //push it to o
                formObject[this.name] = [formObject[this.name]];
            }
            formObject[this.name].push(this.value || ''); //and push either the value or a blank space
        } else {
            formObject[this.name] = this.value || '';
        }
    });
    return formObject;
};

$(function() {
    $('form').submit(function() { //fires on the submit event on the form
        $('#result').text(JSON.stringify($('form').serializeObject()));
      //sets the text of #result
      //alert("hello");
        return false;
    });
});


