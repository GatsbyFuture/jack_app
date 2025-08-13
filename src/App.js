import {useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {Main, Login, Register, Navbar} from './components';
import {signUserSuccess} from './slice/auth';
import AuthService from './service/auth';
import {getItem} from './helpers/persistant.store';

function App() {
    const dispatch = useDispatch();

    const getUser = async () => {
        try {
            const data = await AuthService.getUser();
            dispatch(signUserSuccess(data.user));
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        const token = getItem('token');
        if (token) {
            getUser().then(() => undefined);
        }
    }, []);

    return (
        <div>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
            </Routes>
        </div>
    );
}

export default App;
