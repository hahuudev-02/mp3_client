import { useContext } from 'react';
import { Handle } from './ContextHandle/ContextHandle';

export const useStore = () => {
    const [state, dispatch, dataSongs] = useContext(Handle);

    return [state, dispatch, dataSongs];
};
