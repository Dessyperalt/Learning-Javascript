function createMovie(){

    var $bodyrow =  $("<tr>");
    $("tbody").append($bodyrow);

    var $name = $("<td>");
    $name.text($("#title").val());
    $bodyrow.append($name);

    var $rating = $("<td>");
    $rating.text($("#rating").val());
    $bodyrow.append($rating);

    var $tdButton = $("<td>");
    var $deleteButton = $("<button>");
    $deleteButton.attr("type","button");
    $deleteButton.addClass("btn btn-danger");
    $deleteButton.text("Delete");
    $tdButton.append($deleteButton);
    $bodyrow.append($tdButton);

    $("#title").val('');
    $("#rating").val('');

    $deleteButton.on("click", function(e)
    {
        $bodyrow.remove();
    });
}
