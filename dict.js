$(document).ready(onReady);

function onReady() {
    $('#lookupBtn').click(function(){ 
        var term = $('#termName').val();
        lookupCall(term);
    });

    function lookupCall(term){
        console.log("called term:" + term);
        $.ajax(
            {
                'url':'http://localhost:8080/search',
                'type':'GET',
                'data':{'term': term},
                'success':getDataSuccess,
                'error':getDataError
            });
    }

    function getDataSuccess(data)
    {
        $("ul").children().remove();
    
        parsedData = data;
    
        if(parsedData.length>0){
          for (var i = 0; i < parsedData.length; i++) {
    
            $("ul").append(
      
              `<li>${i + 1} (${parsedData[i].wordtype}) :: ${
      
                parsedData[i].definition
      
              }</li>`
      
            );
      
          }
        }
        else{
          alert("Sorry, cannot find the search word");
        }
        
    }

    function getDataError(err)
    {
        alert("Sorry, cannot find the search word",err);
    }
}