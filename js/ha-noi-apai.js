const api2 = 'https://api.openweathermap.org/data/2.5/onecall?lat=21.0245&lon=105.8412&exclude=hourly,daily&appid=177604d7503591f0967a651681b66151&units=metric'
fetch(api2)
    .then(async res => {
        const data = await res.json();
        const sunrise = moment.unix(data.current.sunrise).format('H:mm') || DEFAULT_VALUE;
        const sunset = moment.unix(data.current.sunset).format('H:mm') || DEFAULT_VALUE;
        const temperature = Math.round(data.current.temp) || DEFAULT_VALUE;
        const humidity = data.current.humidity || DEFAULT_VALUE;
        const windSpeed = (data.current.wind_speed * 3.6).toFixed(2)

        console.log('[Search Input]', data);
        console.log(moment.unix(data.current.sunrise).format('H:mm'))
        console.log(moment.unix(data.current.sunset).format('H:mm'))
        console.log(Math.round(data.current.temp))
        console.log(data.current.humidity)
        console.log((data.current.wind_speed * 3.6).toFixed(2))

        document.getElementById("sunrise-child2").innerHTML = sunrise + ' ' + 'h';
        document.getElementById("sunset-child2").innerHTML = sunset + ' ' + 'h';
        document.getElementById("humidity-child2").innerHTML = humidity + '%';
        document.getElementById("winSpeed-child2").innerHTML = windSpeed + ' ' + 'km/h';
        document.getElementById("temperature-child2").innerHTML = temperature;

    });