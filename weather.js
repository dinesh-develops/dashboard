window.addEventListener('load',()=>{
    let long;
    let lat;
    const notificationElement=document.querySelector('notification');
    const iconElement=document.querySelector('.weather-icon')
    let tempElement=document.querySelector('.temperature')
    const descElement=document.querySelector(".temperature-description")
    const wind=document.querySelector('.windspeed')
    const locationElement=document.getElementById('locationid')
//App data
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position=>{
            long=position.coords.longitude;
            lat=position.coords.latitude;  
            let api_key="93c44f86ce4f8bbb657079ed4ee3e243";                      
            const proxy="https://cors-anywhere.herokuapp.com/";
            const api=`${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api_key}`;
            fetch(api)
                .then(response=>{
                    return response.json();
            })
            .then(data=>{
                console.log(data);
                const temp_data=Math.floor(data.main.temp-273.15);
                tempElement.textContent=temp_data;
                locationElement.textContent="   "+data.name;
                descElement.textContent=data.weather[0].description;
                const icon_data=data.weather[0].icon;
                iconElement.innerHTML=`<img src="icons/${icon_data}.png">`
            });
        });
        
    }
    else{
        alert("Location data is needed!!");
    }
});