import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import ArticleService from '../service/article';
import {useDispatch} from 'react-redux';
import {getArticleFailure, getArticleStart, getArticleSuccess} from '../slice/article';

const ArticleDetail = () => {
    const {slug} = useParams();
    const dispatch = useDispatch(state => state.article);

    const getArticle = async () => {
        dispatch(getArticleStart());
        try {
            const {article} = await ArticleService.getArticle(slug);
            dispatch(getArticleSuccess(article));
        } catch (e) {
            dispatch(getArticleFailure());
        }
    }

    useEffect(() => {
        getArticle().then(res => undefined);
    }, [slug]);

    return (<div>Articles:{slug}</div>)
}

export default ArticleDetail;