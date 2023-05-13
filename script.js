//`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`;

$(".searchBtn").click(e=>{
    const APIKey = '71a3495636b2a5a64bd266478bf49d9b';
    const city = $("input").val();
    
    $('.top').css('opacity','0');
    $('.display').css('grid-template-rows','1fr');

    let i= setInterval(()=>{        
        $.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=metric`, function(data){        
            const tempSpan = '<span class="tempSpan">°C</span>';        
            $('.temp').html(Math.round(data['main']['temp'])+ tempSpan);
            $('.name').html(data['weather'][0]['main']);
            $('img').attr('src',`img/${data['weather'][0]['main']}.png`);
            $('.humidityVal').html(data['main']['humidity']); 
            $('.windVal').html(data['wind']['speed']); 
            console.log(data)       
        });    
        clearInterval(i); 
    },200);
    let j= setInterval(()=>{        
        $('.top').css('opacity','1');
        clearInterval(j);       
    },300);

    

    
    
    
});