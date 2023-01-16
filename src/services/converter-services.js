export default class Converter{
    _apiBase = 'https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency?have=';
    
    async getResource( currency1, currency2, amount ){
        const options = { 
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '838174d82amsh8b2587e30c54035p196e06jsn335b2daf42df',
                'X-RapidAPI-Host': 'currency-converter-by-api-ninjas.p.rapidapi.com'
            }
        };
        const res = await fetch(`${this._apiBase}${currency1}&want=${currency2}&amount=${amount}`, options);

        if(!res.ok){
            throw console.log(`Could not fetch recived ${res.status}`);
        }

        return await res.json();
    }

    async getResult( currency1, currency2, amount ) {
        const res = await this.getResource( currency1, currency2, amount );
        return res.new_amount;
    }
} 