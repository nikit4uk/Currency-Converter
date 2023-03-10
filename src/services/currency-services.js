async function getData( currency1, currency2, amount ) {
    let _apiBase = 'https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency?have=';
    const options = { 
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '838174d82amsh8b2587e30c54035p196e06jsn335b2daf42df',
            'X-RapidAPI-Host': 'currency-converter-by-api-ninjas.p.rapidapi.com'
        }
    };
    const res = await fetch(`${_apiBase}${currency1}&want=${currency2}&amount=${amount}`, options);
    return await res.json();
};

export default getData;