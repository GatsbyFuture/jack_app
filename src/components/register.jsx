import {logo} from '../constants';
import {Input} from '../ui';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {registerUserStart, registerUserSuccess, registerUserFailure} from '../slice/auth';
import AuthService from '../service/auth';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const {isLoading} = useSelector((state) => state.auth);

    const loginHandler = async (e) => {
        e.preventDefault();
        dispatch(registerUserStart());
        const user = {username: name, email, password};
        try {
            const res = await AuthService.userRegister(user);
            console.log(user);
            console.log(res);
            dispatch(registerUserSuccess());
        } catch (e) {
            dispatch(registerUserFailure());
        }
    }

    return (
        <div className="text-center">
            <main className="form-signin w-25 m-auto">
                <form>
                    <img className="mb-4" src={logo} alt="" width="200"
                         height="57"/>
                    <h1 className="h3 mb-3 fw-normal">Please register</h1>

                    <Input label={'Username'} state={name} setState={setName}/>
                    <Input label={'Email address'} state={email} setState={setEmail}/>
                    <Input label={'Password'} state={password} setState={setPassword}/>

                    <button
                        className="w-100 btn btn-lg btn-primary" type="submit"
                        disabled={isLoading}
                        onClick={loginHandler}
                    >
                        {isLoading ? 'Loading...' : 'Register'}
                    </button>
                </form>
            </main>
        </div>
    );
}

export default Register;