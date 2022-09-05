import {useLocation} from 'react-router-dom';

const useQueryString = (props) => {
    const {search} = useLocation();
    const params = new URLSearchParams(search);
    const entries = params.entries();
    const result = {};

    for(const [key, value] of entries){
        result[key] = value;
    }

    for(const p in props){
        if(!result.hasOwnProperty(p)){
            result[p] = props[p];
        }
    }
    return result;
};

export {useQueryString};