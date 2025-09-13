import {useState} from 'react';
import {ArticleForm} from './index';
import ArticleService from '../service/article';
import {useDispatch, useSelector} from 'react-redux';
import {postArticleFailure, postArticleState, postArticleSuccess} from '../slice/article';
import {useNavigate} from 'react-router-dom';

const CreateArticle = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [body, setBody] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const formSubmit = async (e) => {
        e.preventDefault();
        const article = {title, description, body};
        dispatch(postArticleState());
        try {
            await ArticleService.postArticle(article);
            dispatch(postArticleSuccess());
            navigate('/');
        } catch (e) {
            dispatch(postArticleFailure());
        }
    }

    return (
        <div className={'text-center'}>
            <h1 className={'fs-2'}>Create article</h1>
            <ArticleForm
                values={{title, description, body}}
                functions={{setTitle, setDescription, setBody, formSubmit}}
            />
        </div>
    )
}

export default CreateArticle;