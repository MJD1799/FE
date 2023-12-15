import produce from 'immer';

import { handleActions } from 'redux-actions';

export const ACTIONS = {
    SET_COUNTER:'SET_COUNTER',
    SET_HEADER:'SET_HEADER',
};
const INIT_STATE = {
    count:0,
    header:'',
};

const handleCounterChange = (state=INIT_STATE,{payload})=>produce(state,(draft)=>{
    draft.count =payload.count;
});
const handleHeaderChange = (state=INIT_STATE,{payload})=>produce(state,(draft)=>{
    draft.header = payload.header;
});
const HANDLERS = {
    [ACTIONS.SET_COUNTER]: handleCounterChange,
    [ACTIONS.SET_HEADER]: handleHeaderChange,
};

export default handleActions(HANDLERS,INIT_STATE);