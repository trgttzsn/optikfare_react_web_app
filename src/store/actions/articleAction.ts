import api from '../../utils/api';
import { ArticleDispatch, ArticleData } from './../../types/article';


export const getArticle = (tag: string) => async (dispatch: ArticleDispatch) => {
    dispatch({type: "GET_ARTICLE_START"});
    try{
        const response = await api().get<ArticleData>("/article?tag="+tag);
        dispatch({type:"GET_ARTICLE_SUCCESS", payload: response.data })
    }catch{
        dispatch({ type: "GET_ARTICLE_ERROR"});
    }

};