import {Input, TextArea} from '../ui';

const ArticleForm = ({values, functions}) => {
    const {title, description, body} = values;
    const {setTitle, setDescription, setBody} = functions;

    return (
        <div className={'w-75 mx-auto'}>
            <form>
                <Input label={'Title'} state={title} setState={setTitle}/>
                <TextArea label={'Description'} state={description} setState={setDescription}/>
                <TextArea label={'Body'} state={body} setState={setBody} height={'300px'}/>
                <button
                    className="w-100 btn btn-lg btn-primary" type="submit"
                >
                    Create
                </button>
            </form>
        </div>
    );
}

export default ArticleForm;