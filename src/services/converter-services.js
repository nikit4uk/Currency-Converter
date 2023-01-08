let result = 0;

async function converter( variable, currency1, currency2, value, setIsLoaded ){
    setIsLoaded(false);
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '838174d82amsh8b2587e30c54035p196e06jsn335b2daf42df',
            'X-RapidAPI-Host': 'currency-converter-by-api-ninjas.p.rapidapi.com'
        }
    };

    
    await fetch(`https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency?have=${currency1}&want=${currency2}&amount=${value}`, options)
        .then(response => {
            return response.json();
        })
        .then(data => {
            setIsLoaded(true);
            variable = data.new_amount
        })
        .catch(err => console.error(err));

    console.log(variable);
    return variable;
}

export default converter;