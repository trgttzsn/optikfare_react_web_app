import { ClockCircleOutlined, LoadingOutlined } from '@ant-design/icons';
import {  Row } from 'antd';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppState } from '../../store';
import { Article } from '../../types/main';

function FeaturedArticles() {

    const onecikan = useSelector( (state: AppState) => state.main.data.onecikan);
    const loading = useSelector( (state: AppState) => state.main.loading);
    
    const ArticleList = (articles: Article[], index: number, position: string) => {
        return(
            articles.map( (article, i) => {
                if(i === index){
                return(
                    <div key={article.id} className={(position === "top") ? "featuredArticle ant-col-xs-24 ant-col-sm-24 ant-col-md-24 ant-col-lg-8" : "featuredArticle ant-col-xs-24 ant-col-sm-24 ant-col-md-24 ant-col-lg-6" }>  
                        <Link to={"/makale/php/"+article.sayfa_tag} >
                            <div className='featuredArticleImg'>
                                <div style={{ backgroundImage:"url('https://optikfare.com.tr/documents/makaleler/"+article.sayfa_tag+"/"+article.kapak_adres+"')" }}></div>
                            </div>
                            <div className='featuredArticleContent'>
                                { (position === "top") ? <h4>{article.baslik}</h4>: <h5>{article.baslik}</h5> }                            
                                <p><ClockCircleOutlined /> { moment(article.eklenme_tarihi).locale('tr').startOf('day').fromNow()  }</p>
                                { (position === "top") && <p>{article.makale_aciklama} Devamı...</p> }
                                
                            </div>
                        </Link>
                    </div>
                )
                }else{ return null; }
            })
        )
    }

    return (
        <div className='featuredArticles'>
            <h3>Öne Çıkan Makaleler</h3>
            {
            (loading) ? <LoadingOutlined /> :
                <>
                <Row>
                    {(onecikan) && ArticleList(onecikan, 0 , "top") }
                    {(onecikan) && ArticleList(onecikan, 1 , "top") }
                    {(onecikan) && ArticleList(onecikan, 2 , "top") }
                </Row>
                <Row>
                    {(onecikan) && ArticleList(onecikan, 3 , "bottom") }
                    {(onecikan) && ArticleList(onecikan, 4 , "bottom") }
                    {(onecikan) && ArticleList(onecikan, 5 , "bottom") }
                    {(onecikan) && ArticleList(onecikan, 6 , "bottom") }
                </Row>
                </>
            }
        </div>
    );
}

export default FeaturedArticles;