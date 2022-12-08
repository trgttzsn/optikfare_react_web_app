import { MainState, MainAction, Main } from './../../types/main';

const defaultState: MainState = {
    data: {} as Main,
    loading: false,
    error: ""
}

const mainReducer = (state: MainState = defaultState, action: MainAction) => {
    
    switch(action.type){
        case "GET_MAIN_START": return { ...state, loading:true, error:"" };
        case "GET_MAIN_SUCCESS": return { ...state, loading:false, data:action.payload };
        case "GET_MAIN_ERROR" : return { ...state, loading:false, error:"Error fetching main data"};
        default: return state;
    }
    
    
}

export default mainReducer;