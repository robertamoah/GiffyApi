
// this variable holds the animals names////////////////////////////////////////////////////////////////
var animals=["aliens","cats","dogs","monkeys","rats","houseflys"]
$(".row").empty()

// makes the buttoms on top///////////////////////////////////////////////////
function renderButtons() {

  // Empty the #buttonsDiv prior to adding new animals
  $("#buttons-view").empty();

  // Loop through the array of animals
  for (var i = 0; i < animals.length; i++) {
    var a = $("<button class='btn btn-primary'>");
    a.attr("data-robert1", animals[i]);
    a.addClass("boddie")
    a.text(animals[i]);
    $("#buttons-view").append(a);
  }
}


$(".submit").on("click", function (event) {
  
  event.preventDefault();
  var robert = $(".field").val().trim();
  animals.push(robert);
  renderButtons();
});

$(document).on("click", ".boddie", function () {


  var robert1 = $(this).attr("data-robert1");

  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    robert1 + "&api_key=DEhWzyPCxmlhmn2lsrYpZbjFWk6Rv4Yu&limit=10";

 
  $.ajax({
    url: queryURL,
    method: "GET"
  })

    .then(function (response) {
       console.log(queryURL);
       console.log(response);

      var results = response.data;

      $(".row").empty()

      for (var i = 0; i < results.length; i++) {
        var allData = $("<div>");
        var p = $("<p>").text("Rating: " + results[i].rating);
        console.log(results[i].rating);
        var gifImage = $("<img>");

        gifImage.attr("src", results[i].images.fixed_width_small_still.url);
        gifImage.attr('data-still', results[i].images.fixed_width_small_still.url);
        gifImage.attr('data-animate', results[i].images.fixed_width_small.url);
        gifImage.attr('class', "gif");
        gifImage.attr('data-state', "still");

        allData.append(gifImage);
        allData.append(p);


        
        
          $(".row").append(allData);
  
        
      }

   
      $(".gif").on("click", function () {
        
        var state = $(this).attr("data-state");
      
        if (state === "still") {
          $(this).attr("src", $(this).attr("data-animate"));
          $(this).attr("data-state", "animate");
        } else {
          $(this).attr("src", $(this).attr("data-still"));
          $(this).attr("data-state", "still");
        }
      });
    });
});
renderButtons();
