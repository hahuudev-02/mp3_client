import React, { createContext, useReducer } from 'react';
import reducer, { initState } from './reducer';
import { dataSongs } from 'api/initdata/initdata';

export const Handle = createContext();

export default function ContextHandle({ children }) {
    const [state, dispatch] = useReducer(reducer, initState);
    return <Handle.Provider value={[state, dispatch, dataSongs]}> {children} </Handle.Provider>;
}
