$(".searchBtn").click(e=>{
    const APIKey = '71a3495636b2a5a64bd266478bf49d9b';
    const city = $("input").val();
    console.log($("input"));
    //`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`;
    $.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=metric`, function(data){
        
        const tempSpan = '<span class="tempSpan">°C</span>';

        $('.temp').html(Math.round(data['main']['temp'])+ tempSpan);
        $('.name').html(data['weather'][0]['main']);
        $('img').attr('src',`img/${data['weather'][0]['main']}.png`);
        console.log(data['weather'][0]);
        console.log(data['wind']);
        console.log(data['main']['temp']);
    });
});