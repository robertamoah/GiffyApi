$("button").on("click", function(){
  var x = $(this).data("search");
  console.log(x);
  var queryURL = "http://api.giphy.com/v1/gifs/search?q="+x+"&api_key=dc6zaTOxFJmzC&limit=15";
  console.log(queryURL)

  $(".content").hide()

  $.ajax({url:queryURL,method:'GET'})
  .done(function(response){
    console.log(response)
  });
$.ajax({url:queryURL, metthod:"GET"})
.done(function(response){
  console.log(response)



  $(".row").empty()


for(var i =0; i < response.data.length; i++){

$(".row").append("<p  id='hello' >Rating:"+ response.data[i].rating);
$(".row").append("<img src =' "  +response.data[i].images.downsized.url+"'>")

  }




  
})





$(".container-fluid").on("click", function() {

  
  // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
  var state = $(this).attr("data-state");
  // If the clicked image's state is still, update its src attribute to what its data-animate value is.
  // Then, set the image's data-state to animate
  // Else set src to the data-still value
  if (state === "still") {
    $(this).attr("src", $(this).attr("data-animate"));
    $(this).attr("data-state", "animate");
  } else {
    $(this).attr("src", $(this).attr("data-still"));
    $(this).attr("data-state", "still");
  }
});

})

