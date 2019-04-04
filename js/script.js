// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */
$("#search-button").click(function(){
  var searchterm= $("#search-term").val()
  var custom_api_url="https://api.giphy.com/v1/gifs/search?q=puppy&rating=pg&api_key=dc6zaTOxFJmzC"
  .ajax({
        url: custom_api_url,
        method: "GET",
        success: function(response) {
          console.log(response);
           $("body").append("<img src="+response.data[0].images.original.url+" />");
            // YOUR CODE GOES HERE
        
        }
    }); 
    
  
  
});

