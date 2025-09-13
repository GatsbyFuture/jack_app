import {useState} from 'react';
import {ArticleForm} from './index';

const CreateArticle = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [body, setBody] = useState('');

    return (
        <div className={'text-center'}>
            <h1 className={'fs-2'}>Create article</h1>
            <ArticleForm values={{title, description, body}} functions={{setTitle, setDescription, setBody}}/>
        </div>
    )
}

export default CreateArticle;