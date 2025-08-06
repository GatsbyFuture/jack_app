import {useCallback} from 'react'
import {useSelector} from 'react-redux';

const ValidationError = () => {
    const {error} = useSelector((state) => state.auth);
    // console.log(error);
    const errorMessage = useCallback(() => {
        return Object.keys(error).map(key => `${key} - ${error[key].join(', ')}`)
    })
    // console.log(error !== null && errorMessage());
    return error !== null && errorMessage().map((error, index) => {
        return (
            <div key={index} className="alert alert-danger m-2 p-2" role="alert">
                {error}
            </div>
        )
    })
}

export default ValidationError;