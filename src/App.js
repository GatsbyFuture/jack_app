import {useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {Main, Login, Register, Navbar, ArticleDetail, CreateArticle} from './components';
import {signUserSuccess} from './slice/auth';
import AuthService from './service/auth';
import {getItem} from './helpers/persistant.store';
import ArticlesService from './service/article';
import {getArticlesStart, getArticlesSuccess} from './slice/article';

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

    const getArticles = async () => {
        dispatch(getArticlesStart());

        try {
            const data = await ArticlesService.getArticles();
            console.log(data);
            dispatch(getArticlesSuccess(data.articles));
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        const token = getItem('token');

        if (token) {
            getUser().then(() => undefined);
        }

        getArticles().then(() => undefined);
    }, []);

    return (<div>
        <Navbar/>
        <div className={'container'}>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/article/:slug" element={<ArticleDetail/>}/>
                <Route path="create-article" element={<CreateArticle/>}/>
            </Routes>
        </div>
    </div>);
}

export default App;
