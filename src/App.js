import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Data from './DataInfo';
import NewMember from './new';

function App() {
    const [API, setAPI] = useState([]);
    // const [apis, setApis] = useState([]);
    const [name, setName] = useState([]);
    const [pass, setPass] = useState([]);
    const [checker, setChecker] = useState(false);
    // console.log(checker);
    // console.log(API);
    useEffect(() => {
        axios.get(`https://63a44e2a821953d4f2b0637d.mockapi.io/name`).then((response) => {
            setAPI(response.data);
        });
    }, []);

    const postData = async () => {
        // console.log('abc');
        const { data } = await axios.post(`https://63a44e2a821953d4f2b0637d.mockapi.io/name`, {
            name,
            pass,
            checker,
        });
        setAPI([...API, { ...data }]);
        setName('');
        setPass('');
        setChecker(false);
    };

    const InputName = (e) => {
        setName(e.target.value);
    };

    const InputPass = (e) => {
        setPass(e.target.value);
    };
    const InputCheck = (e) => {
        // console.log(check);
        setChecker(!checker);
    };

    const onDelete = async (id) => {
        await axios.delete(`https://63a44e2a821953d4f2b0637d.mockapi.io/name/${id.id}`).then(() => {
            axios.get(`https://63a44e2a821953d4f2b0637d.mockapi.io/name`).then((response) => {
                setAPI(response.data);
            });
        });
        // setAPI([{ ...API }]);
        console.log(API);
    };

    // handleOnclickDeleteItem = async (item) => {
    //     try {
    //         await Api.DeleteItem(item.id);
    //         const res = await Api.getList()
    //         this.setState((prevState) => ({
    //             ...prevState,
    //             todoList: res.data,
    //             content: ""
    //         }));
    //     } catch (error) {
    //         console.log('error', error);
    //     }
    // }

    return (
        <>
            <NewMember
                InputName={InputName}
                name={name}
                pass={pass}
                checker={checker}
                InputPass={InputPass}
                InputCheck={InputCheck}
                postData={postData}
            />
            <Data API={API} onDelete={onDelete} />
        </>
    );
}

export default App;
