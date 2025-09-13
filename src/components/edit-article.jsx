import {useEffect, useState} from 'react';
import {ArticleForm} from './index';
import {
    getArticleFailure,
    getArticleStart,
    getArticleSuccess, postArticleFailure,
    postArticleState,
    postArticleSuccess
} from '../slice/article';
import ArticleService from '../service/article';
import {useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';

const EditArticle = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [body, setBody] = useState('');
    const dispatch = useDispatch();
    const {slug} = useParams();

    useEffect(() => {
        const getArticle = async () => {
            dispatch(getArticleStart());
            try {
                const {article} = await ArticleService.getArticle(slug);
                setTitle(article.title);
                setDescription(article.description);
                setBody(article.body);
                dispatch(getArticleSuccess(article));
            } catch (e) {
                dispatch(getArticleFailure());
            }
        }
        getArticle();
    }, []);

    const formSubmit = async (e) => {
        e.preventDefault();
        const article = {title, description, body};
        dispatch(postArticleState());
        try {
            await ArticleService.postArticle(article);
            dispatch(postArticleSuccess());
            // navigate('/');
        } catch (e) {
            dispatch(postArticleFailure());
        }
    }

    return (
        <div className={'text-center'}>
            <h1 className={'fs-2'}>Edit article</h1>
            <ArticleForm
                values={{title, description, body}}
                functions={{setTitle, setDescription, setBody, formSubmit}}
            />
        </div>
    )
}

export default EditArticle;