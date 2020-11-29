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
    query ="https://api.openweathermap.org/data/2.5/weather?q="+ location +"&appid="+key+"&units="+format;
    
    console.log("Query is :" + query);

    $.getJSON(query,function(json){
        //Use returned json to update the values of the three 
        //elements in HTML.  
        //I would print the JSON to the console
        // Your code here.
        console.log(json.name);
        console.log(json.main.temp);
        console.log(json['weather']['0']['icon']);
        document.getElementById("forecast").style.display = "block";
        document.getElementById("loc").innerText = json.name;
        document.getElementById("temp").innerText = json.main.temp;
        document.getElementById("tempImg").src = "http://openweathermap.org/img/wn/"+ json['weather']['0']['icon'] +"@2x.png";

    });
}
