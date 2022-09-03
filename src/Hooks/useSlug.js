import { useParams } from 'react-router-dom';

export const useSlug = id => {
    return useParams()[id].match(/[0-9a-z]+$/)[0];
};