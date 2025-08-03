import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {logo} from '../constants';
import {Input} from '../ui';
import {loginUserStart} from '../slice/auth';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const {isLoading} = useSelector((state) => state.auth);

    const loginHandler = (e) => {
        e.preventDefault();
        dispatch(loginUserStart());
    }

    return (
        <div className="text-center">
            <main className="form-signin w-25 m-auto">
                <form>
                    <img className="mb-4" src={logo} alt="" width="200"
                         height="57"/>
                    <h1 className="h3 mb-3 fw-normal">Please register</h1>

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