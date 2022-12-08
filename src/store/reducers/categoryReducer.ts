import { CategoryState, Categories, CategoryAction } from './../../types/category';

const defaultState: CategoryState = {
    data: {} as Categories,
    loading: false,
    error: ""
}

const categoryReducer = (state: CategoryState = defaultState, action: CategoryAction) => {
    
    switch(action.type){
        case "GET_CATEGORY_START": return { ...state, loading:true, error:"" };
        case "GET_CATEGORY_SUCCESS": return { ...state, loading:false, data:action.payload };
        case "GET_CATEGORY_ERROR" : return { ...state, loading:false, error:"Error fetching main data"};
        default: return state;
    }
    
    
}

export default categoryReducer;