import { ArticleState, ArticleData, ArticleAction } from './../../types/article';


const defaultState: ArticleState = {
    data: {} as ArticleData,
    loading: false,
    error: ""
}

const articleReducer = (state: ArticleState = defaultState, action: ArticleAction) => {
    
    switch(action.type){
        case "GET_ARTICLE_START": return { ...state, loading:true, error:"" };
        case "GET_ARTICLE_SUCCESS": return { ...state, loading:false, data:action.payload };
        case "GET_ARTICLE_ERROR" : return { ...state, loading:false, error:"Error fetching main data"};
        default: return state;
    }
    
    
}

export default articleReducer;