import React, {useState} from 'react'

function Country() {

    const [country, setCountry] = useState({})
    const [name, setName]= useState('')
    
    const handleSubmit = async (name)=>{
        console.log('helo')
        console.log("country name",name)
        const url = `https://restcountries.com/v3.1/name/${name}?fullText=true`
        fetch(url).then(res=> res.json()).then(data=> setCountry(data[0]))
    }

    const handleinput = (e)=>{
            setName(e.target.value)
        }

console.log(country)
  return (
    <>
   
    <div>Country</div>
    <div>
    <div>
        <img alt = '' src = {country?.flags?.png}/>
        <h4> {country?.name?.official}</h4>
        <h4>{country?.continents !== undefined ? country?.continents[0] : ''}</h4>
        <h6>{country?.population !== undefined ? country?.population : ''}</h6>
        <h6>{country?.languages?.eng}</h6>
        <h6>{country?.currencies !== undefined ? `${Object.keys(country?.currencies)[0]} ${country?.currencies[(Object.keys(country?.currencies)[0])].symbol} ` : ''}</h6>
    </div>
    <div>2</div>
    </div>

    <div>
        <input placeholder='Country name' onChange={handleinput}/>
        <button onClick = {()=>handleSubmit(name)}>Get details</button>
    </div>
    </>
    
  )
}

export default Country