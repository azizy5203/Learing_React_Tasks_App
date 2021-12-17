import { useState } from "react";
import axios from 'axios'
import Button from "./Button";
const NamesPics = () => {
    
    const [names, setNames] = useState([]);
    const [imgUrls, setUrls] = useState([]);

    const getTodos = () => {
        axios.get('https://jsonplaceholder.typicode.com/users/').then((resp)=>{
            console.log('users: ',resp.data)
            setNames(resp.data)
        })
    }

    const getUrls = ()=>{
        axios.get('https://picsum.photos/v2/list?page=6&limit=6').then(res =>{
            console.log("imgs: ",res.data)
            setUrls(res.data)
        });

    }
    return (
        <div>
            <h1 className='header animClass'>Fetching real API</h1>
            <p>
            Example of fetching data from real api. Names were fetched from <strong><a href="https://jsonplaceholder.typicode.com/" target={'blank'}>Json Placeholder</a></strong> api,
             and imgaes from <strong><a href="https://picsum.photos/" target={'blank'}>Lorem Picsum</a></strong> api.
            </p>
            <br />
            <h4>
                {names.map((name) => <div key={name.id}><strong>{name.name}</strong> - {name.id}</div>)}
            </h4>
            <br />
                {imgUrls.map((img)=><img key={img.id} style={{width:'200px',height:'200px'}} src={img.download_url} alt={img.id}/>)}
            <br />
            <Button text='names' onClicked={getTodos}/>
            <Button text='images' onClicked={getUrls}/>
        </div>
    )
}

export default NamesPics
