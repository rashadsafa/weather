"use strict";
$(document).ready(function () {

    $(document).on('keypress', function (e) {
        if (e.which == 13) {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${$("#myweather").val()}&APPID=8dac6093e79631caef3049d1a566ba33`
            async function myweather() {
                let responce = await fetch(url)
                let data = await responce.json()
                $("#city").html(data.name)
                $("#temp").html(data.main.temp)
                $("#feels").html(data.main.feels_like)
                $("#myweather").val("")
                console.log(data);
            }
            myweather()
        }
    })

    $("#btn").click(function (e) {
        e.preventDefault();
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${$("#myweather").val()}&APPID=8dac6093e79631caef3049d1a566ba33`
        async function myweather() {
            let responce = await fetch(url)
            let data = await responce.json()
            $("#city").html(data.name)
            $("#temp").html(data.main.temp)
            $("#feels").html(data.main.feels_like)
            $("#myweather").val("")
            console.log(data);
        }
        myweather()

    });
});