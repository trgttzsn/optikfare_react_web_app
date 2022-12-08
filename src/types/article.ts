import { ThunkDispatch } from 'redux-thunk';
import { Articles } from './category';
import { Header } from './main';

export interface ArticleDetails{
    id: number,
    sayfa_tag: string,
    baslik: string,
    description: string,
    keywords: string,
    icerik: string,
    eklenme_tarihi: Date,
    kapak_adres: string
}

export interface ArticleData{
    header: Header,
    makale: ArticleDetails,
    ilgilimakaleler: Articles[]
}

export interface ArticleState{
    data: ArticleData,
    loading: boolean,
    error: string
}

interface GET_ARTICLE_START{
    type: "GET_ARTICLE_START"
}

interface GET_ARTICLE_SUCCESS{
    type: "GET_ARTICLE_SUCCESS",
    payload: ArticleData 
}

interface GET_ARTICLE_ERROR{
    type: "GET_ARTICLE_ERROR"
}

export type ArticleAction = GET_ARTICLE_START | GET_ARTICLE_ERROR | GET_ARTICLE_SUCCESS;
export type ArticleDispatch = ThunkDispatch<ArticleState, void, ArticleAction>;