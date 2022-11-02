import './App.css';
import { useState, useEffect } from 'react';

function App() {
    const [quote, setQuote] = useState('');
    const [render, setRender] = useState(true);

    useEffect(() => {
        const getStuff = async () => {
            const response = await fetch('https://techy-api.vercel.app/api/json');
            const json = await response.json();
            setQuote(json.message);
        }
        
        getStuff();
    }, [render]);

    return (
      <div className='container'>
        <p className='quote'>{quote}</p>
        <button className='btn' onClick={() => {setRender((render)? false: true)}}>New quote</button>
      </div>
    );
}

export default App;
