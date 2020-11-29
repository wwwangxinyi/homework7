function gettingJSON(){
    //Display the forecast
    // Your code here.
    let key = "a0648414a61b069f7d15ed100ca87bda";

    //Set default location if one isn't provided
    let location = document.getElementById("location").value
    if(!location){
        location = "Ann Arbor";
    }

    // Your code here.
    console.log("Location is : " + location);

    //set default temperature format if one isn't provided
    let format = "imperial";
    let obj = document.getElementsByName("temp");
    for( i=0;i<obj.length;i++){
        if(obj[i].checked){
            format = obj[i].value
        }    
    } 

    // Your code here.
    console.log("Format is " + format);

    //set the query  
    let query;
    // Your code here.  
    query = "api.openweathermap.org/data/2.5/weather?q="+ location +"&appid="+key+"&units="+format;
    
    console.log("Query is :" + query);

    //Create and set variables for each of the elements you
    //need to update, location, temp, the image, etc.

    var request = new XMLHttpRequest()

    // Open a new connection, using the GET request on the URL endpoint
    request.open('GET', query, true)

    request.onload = function () {
    // Begin accessing JSON data here
        var data = JSON.parse(this.response)
        console.log(data)
    }



    let loc;
    let temp;
    let tempImg;
    // Your code here.


    $.getJSON(query,function(json){
        //Use returned json to update the values of the three 
        //elements in HTML.  
        //I would print the JSON to the console
        // Your code here.

    });
}
