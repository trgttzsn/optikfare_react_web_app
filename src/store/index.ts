import { CategoryState } from './../types/category';
import { MainState } from './../types/main';
import { combineReducers } from "redux";
import mainReducer from "./reducers/mainReducer";
import categoryReducer from './reducers/categoryReducer';
import articleReducer from './reducers/articleReducer';
import { ArticleState } from '../types/article';

export interface AppState {
    main: MainState;
    category: CategoryState;
    article: ArticleState;
}

const rootReducer = combineReducers<AppState>({
    main: mainReducer,
    category: categoryReducer,
    article: articleReducer,
}); 

export default rootReducer;