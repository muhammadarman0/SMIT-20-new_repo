let weather = async () => {
    try {
        let apiCall = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=24.86&longitude=67.01&current=temperature_2m,weather_code,wind_speed_10m`)
        let response = await apiCall.json()
        console.log(response);

    } catch (error) {

    }
}
weather()