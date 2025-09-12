import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import dayjs from 'dayjs';
import ArticleService from '../service/article';
import {useDispatch, useSelector} from 'react-redux';
import {getArticleFailure, getArticleStart, getArticleSuccess} from '../slice/article';
import {Loader} from '../ui';

const ArticleDetail = () => {
    const {slug} = useParams();
    const dispatch = useDispatch();
    const {isLoading, article} = useSelector(state => state.article);

    useEffect(() => {
        const getArticle = async () => {
            dispatch(getArticleStart());
            try {
                const {article} = await ArticleService.getArticle(slug);
                console.log('article before', article);
                dispatch(getArticleSuccess(article));
            } catch (e) {
                dispatch(getArticleFailure());
            }
        }
        getArticle();
    }, [slug]);

    console.log('after', article);

    return (
        isLoading ? <Loader/> :
            article !== null && <div className="p-5 mb-4 bg-light rounded-3">
                <div className={'row d-flex'}>
                    <div className="col-lg-4 text-center">
                        <svg className="bd-placeholder-img rounded-circle" width="140" height="140"
                             xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140"
                             preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                            <rect width="100%" height="100%" fill="#777"></rect>
                            <text x="50%" y="50%" fill="#777" dy=".3em">140x140</text>
                        </svg>

                        <h2>{article.author.username}</h2>
                        <p>{article.author.bio}</p>
                    </div>
                    <div className="col-lg-8">
                        <h1 className="display-5 fw-bold">{article?.title}</h1>
                        <p className="col-md-8 fs-4">{article?.description}</p>
                        <p className="col-md-8 fs-6 text-muted">
                            <span>Created at: </span>{dayjs(article?.createdAt).format('YYYY-MM-DD HH:mm:ss')}
                        </p>
                    </div>
                </div>
                <div className="container-fluid py-5">
                    <div className="mb-3">
                        {article.body}
                    </div>
                    <button className="btn btn-primary btn-lg" type="button">Send comment</button>
                </div>
            </div>
    )
}

export default ArticleDetail;