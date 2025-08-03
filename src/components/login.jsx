import {useState} from 'react';
import {logo} from '../constants';
import {Input} from '../ui';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="text-center">
            <main className="form-signin w-25 m-auto">
                <form>
                    <img className="mb-4" src={logo} alt="" width="200"
                         height="57"/>
                    <h1 className="h3 mb-3 fw-normal">Please register</h1>

                    <Input label={'Email address'} state={email} setState={setEmail}/>
                    <Input label={'Password'} state={password} setState={setPassword}/>

                    <button className="w-100 btn btn-lg btn-primary" type="submit">Login</button>
                </form>
            </main>
        </div>
    );
}

export default Login;