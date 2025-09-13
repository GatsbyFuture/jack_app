import {Fragment} from 'react';
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import ArticlesService from '../service/article';

const ArticleCard = ({article, getArticles}) => {
    const {loggedIn, user} = useSelector(state => state.auth);
    const navigate = useNavigate();

    const deleteArticle = async (slug) => {
        try {
            await ArticlesService.deleteArticle(slug);
            getArticles().then(() => undefined);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="col" key={article.id}>
            <div className="card h-100 shadow-sm">
                <svg className="bd-placeholder-img card-img-top" width="100%" height="225"
                     xmlns="http://www.w3.org/2000/svg" role="img"
                     aria-label="Placeholder: Thumbnail"
                     preserveAspectRatio="xMidYMid slice" focusable="false">
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c"></rect>
                </svg>

                <div className="card-body">
                    <p className="card-text fw-bold m-0 ">{article.title}</p>
                    <p className="card-text">{article.description}</p>
                </div>
                <div className="d-flex card-footer justify-content-between align-items-center">
                    <div className="btn-group">
                        <button onClick={() => navigate(`/article/${article.slug}`)} type="button"
                                className="btn btn-sm btn-outline-success">View
                        </button>
                        {loggedIn && user.username === article.author.username && (
                            <Fragment>
                                <button type="button"
                                        onClick={() => navigate(`/edit-article/${article.slug}`)}
                                        className="btn btn-sm btn-outline-secondary">Edit
                                </button>
                                <button type="button"
                                        onClick={() => deleteArticle(article.slug)}
                                        className="btn btn-sm btn-outline-danger">Delete
                                </button>
                            </Fragment>
                        )}
                    </div>
                    <small
                        className="text-muted fw-bold text-capitalize">{article.author.username}</small>
                </div>
            </div>
        </div>
    )
}

export default ArticleCard;