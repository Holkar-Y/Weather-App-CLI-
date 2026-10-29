import axios from 'axios';
import readline from 'readline';

const rl=readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter city name: ",async(city)=>{
    const apiKey= 'eb954166ec0f03b78d120e45cfc75735';
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

    try {
        const response=await axios.get(url);
        console.log(`Current temperature in ${city} is ${response.data.main.temp} C`);
        console.log(`Weather description: ${response.data.weather[0].description}`);
    }catch (error) {
        console.error(error.message);
    }finally{
        rl.close;
    }
})