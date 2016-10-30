var lat;
var long;
var unit;

function sendQ() {

    $.getJSON("https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&APPID=0930f502ad10dc8f025f724690c81d14&units=imperial", function (data) {

        unit = "imperial";
        $("#city").text(data.name);
        $("#temp").text(data.main.temp);
        $("#weather").text(data.weather[0].main);
        changeBackground(data.weather[0].main);


    });



}


function onPosition(position) {
    lat = encodeURI(position.coords.latitude);
    long = encodeURI(position.coords.longitude);

    sendQ();

}
if (navigator.geolocation) {


    navigator.geolocation.getCurrentPosition(onPosition , showError);



}

function showError(){
    
    console.log("error");
    
}

$("#change").on("click", function () {

    if (unit === "imperial") {

        unit = "metric"
        $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&APPID=0930f502ad10dc8f025f724690c81d14&units=" + unit, function (data) {


            $("#city").text(data.name);
            $("#temp").text(data.main.temp);
            $("#weather").text(data.weather[0].main);
            changeBackground(data.weather[0].main);

        });


    } else if (unit === "metric") {
        unit = "imperial"
        $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&APPID=0930f502ad10dc8f025f724690c81d14&units=" + unit, function (data) {


            $("#city").text(data.name);
            $("#temp").text(data.main.temp);
            $("#weather").text(data.weather[0].main);
            changeBackground(data.weather[0].main);


        });

    }


});
function changeBackground(weather){
    if(weather==="Clouds"){
        $('body').css('background-image', 'url(http://miriadna.com/desctopwalls/images/max/Thick-clouds-layer.jpg)');
    }else if(weather==="Clear"){
        $('body').css('background-image', 'url(http://l.yimg.com/os/mit/media/m/weather/images/fallbacks/lead/clear_d-1394274.jpg)');
    } else if(weather==="Rain"){
        $('body').css('background-image', 'url(https://static.pexels.com/photos/27472/pexels-photo.jpg)');
    } else if(weather==="Snow"){
        $('body').css('background-image', 'url(https://static.pexels.com/photos/38925/pexels-photo-38925.jpeg)');
    }else{
        $('body').css('background-image', 'url(http://www.public-domain-image.com/miscellaneous/slides/weather-vane-on-the-tower-of-london.jpg)');
        
    }
    
    
}

