import axios from 'axios'


const instance = axios.create({
    baseURL: 'https://alpha-vantage.p.rapidapi.com/query',
    headers: {
        'X-RapidAPI-Key': 'b8188ad542mshb83a7d2ba877165p1c1dc1jsn13c616852bc3',
    'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
  
    }
});
export default {
    stockTimeSeries: (symbol) =>
    instance({
        'method':'GET',
        'url':'/query',
        'params': {
            'outputsize':'compact',
            'datatype':'json',
            'function':'TIME_SERIES_DAILY_ADJUSTED',
            'symbol': symbol.toUpperCase()
        },
    })
}
