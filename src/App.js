import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Data from './DataInfo';
import NewMember from './new';

function App() {
    const [API, setAPI] = useState([]);
    const [name, setName] = useState([]);
    const [pass, setPass] = useState([]);
    // console.log(API);
    useEffect(() => {
        axios.get(`https://63a44e2a821953d4f2b0637d.mockapi.io/name`).then((response) => {
            setAPI(response.data);
        });
    }, []);

    const InputName = (e) => {
        setName(e.target.value);
    };

    const InputPass = (e) => {
        setPass(e.target.value);
    };

    return (
        <>
            <NewMember InputName={InputName} InputPass={InputPass} />
            <Data API={API} />
        </>
    );
}

export default App;
