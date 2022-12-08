import { ThunkDispatch } from "redux-thunk";

export interface Category{
    alt_kategoriler: Category[];
    id: number;
    sira: string;
    baslik: string;
    gorunum_yeri: string;
    sayfa_tag: string;
    ust_kategori: string;
}

export interface Header{
    title: string,
    description: string,
    keywords: string,
    icon: string,
    img: string,
    footer_img: string
}

export interface Slider{
    baslik: string,
    resim: string,
    resim_aciklama: string,
    link: string,
    link_target: string,
    tarih: Date
}

export interface Article{
    id: number,
    sayfa_tag: string,
    baslik: string,
    eklenme_tarihi: Date,
    makale_aciklama: string,
    kapak_adres: string,
    kapak_aciklama: string
}

export interface Video{
    id: number,
    baslik: string,
    link: string,
    resim: string,
    eklenme_tarihi: Date
}

export interface Main {
    header: Header;
    kategoriler: Category[];
    makaleler: Article[];
    onecikan: Article[];
    populer: Article[];
    cokunan: Article[];
    videolar: Video[];
    slider: Slider[];
}

export interface MainState {
    data: Main;
    loading: boolean;
    error: string;
}

interface GET_MAIN_START {
    type: "GET_MAIN_START";    
}

interface GET_MAIN_SUCCESS {
    type: "GET_MAIN_SUCCESS";
    payload: Main;
}

interface GET_MAIN_ERROR {
    type : "GET_MAIN_ERROR";
}

export type MainAction = GET_MAIN_START | GET_MAIN_SUCCESS | GET_MAIN_ERROR;

export type MainDispatch = ThunkDispatch<MainState, void, MainAction>;