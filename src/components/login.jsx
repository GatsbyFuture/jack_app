import {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import AuthService from '../service/auth';
import {logo} from '../constants';
import {Input} from '../ui';
import {signUserStart, signUserSuccess, signUserFailure} from '../slice/auth';
import {ValidationError} from './';
import {useNavigate} from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const {isLoading, loggedIn} = useSelector((state) => state.auth);
    const navigate = useNavigate();

    const loginHandler = async (e) => {
        e.preventDefault();
        dispatch(signUserStart());
        const user = {email, password};
        try {
            const res = await AuthService.userLogin(user)
            dispatch(signUserSuccess(res.user));
            navigate('/');
        } catch (e) {
            dispatch(signUserFailure(e.response.data.errors));
        }
    }

    useEffect(() => {
        if (loggedIn) {
            navigate('/');
        }
    }, [loggedIn]);

    return (
        <div className="text-center">
            <main className="form-signin w-25 m-auto">
                <form>
                    <img className="mb-4" src={logo} alt="" width="200"
                         height="57"/>
                    <h1 className="h3 mb-3 fw-normal">Please register</h1>
                    <ValidationError/>
                    <Input label={'Email address'} state={email} setState={setEmail}/>
                    <Input label={'Password'} state={password} setState={setPassword}/>

                    <button
                        className="w-100 btn btn-lg btn-primary" type="submit"
                        disabled={isLoading}
                        onClick={loginHandler}
                    >
                        {isLoading ? 'Loading...' : 'Login'}
                    </button>
                </form>
            </main>
        </div>
    );
}

export default Login;