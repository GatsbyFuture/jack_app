import {Input, TextArea} from '../ui';
import {useSelector} from 'react-redux';

const ArticleForm = ({values, functions}) => {
    const {isLoading} = useSelector(state => state.article);
    const {title, description, body} = values;
    const {setTitle, setDescription, setBody, formSubmit} = functions;

    return (
        <div className={'w-75 mx-auto'}>
            <form onSubmit={formSubmit}>
                <Input label={'Title'} state={title} setState={setTitle}/>
                <TextArea label={'Description'} state={description} setState={setDescription}/>
                <TextArea label={'Body'} state={body} setState={setBody} height={'300px'}/>
                <button
                    className="w-100 btn btn-lg btn-primary" type="submit"
                >
                    {isLoading ? 'Loading...' : 'Create'}
                </button>
            </form>
        </div>
    );
}

export default ArticleForm;