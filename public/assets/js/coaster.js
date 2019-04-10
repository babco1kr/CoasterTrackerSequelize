// Makes sure the DOM loads before anything happens
$(function() {
    // On click for the coasters to move them from to ride to the ridden side
    $(".change-rode").on("click", function(event){
        event.preventDefault();
        let id = $(this).data("id");
        let rode = $(this).data("newrode");

        if (rode == true) {
            rode = false;
        } else {
            rode = true;
        }

        var newRodeState = {
            rode: rode
        };

        // Sends info to the update orm to change the value of rode
        $.ajax("/api/coasters/" + id, {
            type: "PUT",
            data: newRodeState
        }).then(function() {
            console.log("changed rode state to: " + rode);
            location.reload();
        })
    })

    // On click that creates a new coaster
    $(".create-form").on("submit", function(event){
        event.preventDefault();

        var newCoaster = {
            name: $("#coaster").val().trim()
        };

        // Sends info to the createOne orm to add an item to the coasters table
        $.ajax("/api/coasters", {
            type: "POST",
            data: newCoaster
        }).then(function() {
            console.log("New coaster Added");
            location.reload();
        });
    });














})