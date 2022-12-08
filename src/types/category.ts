import { ThunkDispatch } from 'redux-thunk';
import { Header } from './main';


export interface Articles{
    id: number,
    sayfa_tag: string,
    baslik: string,
    description: string,
    eklenme_tarihi: Date,
    kapak_adres: string,
    kapak_aciklama: string
}

export interface CategoryLinks{
    id: number,
    sayfa_tag: string,
    baslik: string,
    description: string,
    keywords: string
}

export interface Categories{
    kategori: CategoryLinks[],
    header: Header,
    makaleler: Articles[]
}

export interface CategoryState{
    data : Categories,
    loading: boolean,
    error: string
}

interface GET_CATEGORY_START {
    type: "GET_CATEGORY_START"
}

interface GET_CATEGORY_SUCCESS{
    type: "GET_CATEGORY_SUCCESS",
    payload: Categories
}

interface GET_CATEGORY_ERROR{
    type: "GET_CATEGORY_ERROR"
}

export type CategoryAction = GET_CATEGORY_START | GET_CATEGORY_ERROR | GET_CATEGORY_SUCCESS;

export type CategoryDispatch = ThunkDispatch<CategoryState, void, CategoryAction>;