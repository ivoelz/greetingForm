$(document).ready(function () {

    $("form").submit(submitForm);

    function submitForm(event) {
        event.preventDefault();

        var rank = $("input[name=rank]:checked").val();
        var firstName = $("input#first-name").val();
        var lastName = $("input#last-name").val();
        var greeting = rank + " " + firstName + " " + lastName;
        var color = $("input[name=rank]:checked").data("color");

        $("#greeting").text(greeting);
        $(".output").show().css("color", color);

    }
});