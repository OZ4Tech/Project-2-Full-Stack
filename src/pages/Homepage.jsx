import React from 'react'
import api from '../api'
import "../pages/Homepage.css"
import Background from "../assets/bullandbear.mp4"

const Homepage = () => {
    
    let [responseData, setResponseData] = React.useState('')
    let [ticker, setTicker] = React.useState('')
    let [message, setMessage] = React.useState('')

    
    const fetchData = (e) => {
        e.preventDefault()

        setMessage('Loading...')

        api.stockTimeSeries(ticker)               
        .then((response)=>{
            setResponseData(response.data)
            setMessage('')
            console.log(response)
        })
        .catch((error) => {
            setMessage('Error')
            console.log(error)
        })
    }


    return (
        <><div className='App'></div><video autoPlay muted loop id="myVideo2">
            <source src={Background} type="video/mp4"></source>
        </video><div
            style={{
                background: 'bisque',
                padding: '5%',
                fontFamily: '"Lucida Console", Monaco, monospace'
            }}>
                <h1
                    style={{
                        background: 'black',
                        color: 'orange',
                        padding: '1rem',
                        display: 'inline-block',
                    }}>The Livest Of Lives</h1>

                <form onSubmit={fetchData}>
                    <fieldset>
                        <legend>Bear Or Bull?!</legend>
                        <label htmlFor="ticker">Enter Stock
                            <input
                                required
                                name="ticker"
                                id="ticker"
                                type='text'
                                placeholder='Favorite Stock'
                                value={ticker}
                                onChange={(e) => setTicker(e.target.value)} />
                        </label>
                        <button type='submit'>Submit</button>
                    </fieldset>
                </form>
                <p>{message}</p>
                <h3>Symbol: {responseData ? responseData.symbol : ''}</h3>
                <h3>Name: {responseData ? responseData.name : ''}</h3>
                <h3>High: {responseData ? responseData.high : ''}</h3>
                <h3>Close: {responseData ? responseData.close : ''}</h3>
                <li>
                        <a href="../">Home</a>
                </li>
        
                
            </div></>
    )
}

export default Homepage;