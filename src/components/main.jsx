import {useDispatch, useSelector} from 'react-redux';
import {Loader} from '../ui';
import {useNavigate} from 'react-router-dom';
import {getArticlesStart, getArticlesSuccess} from '../slice/article';
import ArticlesService from '../service/article';
import {Fragment, useEffect} from 'react';
import ArticleCard from './article-card';

const Main = () => {
    const dispatch = useDispatch();
    const {articles, isLoading} = useSelector(state => state.article)

    const getArticles = async () => {
        dispatch(getArticlesStart());
        try {
            const data = await ArticlesService.getArticles();
            dispatch(getArticlesSuccess(data.articles));
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getArticles().then(() => undefined);
    }, []);

    return (
        <div>
            {isLoading && <Loader/>}
            <div className="album py-5">
                <div>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {articles.map((article, index) => (
                            <ArticleCard article={article} getArticles={getArticles}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;