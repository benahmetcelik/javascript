/*
* First we define two variables. Our first variable minValue sets the base limit of the representation. 
* Our second variable sets the ceiling limit of the display.
*/
var minValue = 1;
var maxValue = 20;
/**
 * It works when the LoadMore button is clicked and increases the limits for the record to be shown by an equal amount.
 */
function loadMore() {
    minValue = (minValue + 20);
    maxValue = (maxValue + 20);
    return refresh(minValue, maxValue);
}
/**
 * It runs when the FirstData button is clicked and sets the limits to their initial value for the record to be displayed.
 */
function firstData() {
    minValue = 1;
    maxValue = 20;
    return refresh(1, 20);
}

/**
 * It takes two parameters and, thanks to these parameters, it sends data to the post.php page, allowing the list to be updated or refreshed.
 */
function refresh(minValue, maxValue) {
    $.ajax({
        type: "POST",
        url: "post.php",
        data: {
            refresh: "1",
            limitMin: minValue,
            limitMax: maxValue
        },
        success: function (myResponse) {
            setTimeout("document.getElementById('dataResult').style.visibility = 'hidden'", 4000);
            $("#jobs").html(myResponse);
        }
    });
}
/**
 * When the page is loaded, it runs the refresh(minValue, maxValue); function and sends the default parameters to it.
 */
$(window).on("load", function () {
    refresh(minValue, maxValue);
})
function deleteToDo(id) {
    setTimeout("document.getElementById('dataResult').style.visibility = 'visible'", 500);
    var toDoId = parseInt(id);
    $.ajax({
        type: "POST",
        url: "post.php",
        data: {
            id: toDoId
        },
        success: function (myResponse) {
            setTimeout("document.getElementById('dataResult').style.visibility = 'hidden'", 2000);
            refresh(minValue, maxValue);
        }
    });
}
/**
 * When the addToData button is clicked, it sends all the information from the form to the post.php page. 
 * It then executes the refresh() function based on the response.
 */
$("#addToDo").click(function () {
    $.ajax({
        type: "POST",
        url: "post.php",
        data: $("#serial").serialize(),
        dataType: "html",
        beforeSend: function () { 
            $("#addToDo").attr("disabled", true);
            $("#dataResult").html("<img src='https://i.stack.imgur.com/7VozH.gif'>");
            setTimeout("document.getElementById('dataResult').style.visibility = 'visible'", 500);
        },
        success: function (myResponse) {
            setTimeout("document.getElementById('dataResult').style.visibility = 'hidden'", 2000);
            refresh(minValue, maxValue);
        },
        complete: function () { 
            $("#addToDo").attr("disabled", false);
        },
        statusCode: {
            400: function () {
                $("#dataResult").html("İstek hatalı");
                refresh(minValue, maxValue);
            },
            401: function () {
                $("#dataResult").html("İstek için kimlik doğrulaması gerekiyor.");
                refresh(minValue, maxValue);
            },
            404: function () {
                $("#dataResult").html("Buralar çok ıssız.");
                refresh(minValue, maxValue);
            }
        },
        error: function (jqXHR, textStatus) {
            $("#dataResult").html(textStatus);
            refresh(minValue, maxValue);
        }
    });
});