import { ClockCircleOutlined, LoadingOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';
import DOMPurify from 'isomorphic-dompurify';
import moment from 'moment';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { AppState } from '../../store';
import { getArticle } from '../../store/actions/articleAction';
import { Articles } from '../../types/category';
import SiteHelmet from '../main/SiteHelmet';

function ReadArticle() {

    const makale = useSelector( (state: AppState) => state.article.data.makale );
    const header = useSelector( (state: AppState) => state.article.data.header );
    const ilgili_makaleler = useSelector( (state: AppState) => state.article.data.ilgilimakaleler );
    const loading = useSelector( (state: AppState) => state.article.loading);
    
    const dispatch = useDispatch<any>();

    const location = useLocation();
    const locationArray = location?.pathname.split("/");
    
    useEffect(() => {
        dispatch(getArticle(locationArray[locationArray.length-1]));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);

    const renderHTML = (rawHTML: string) => React.createElement("div", { dangerouslySetInnerHTML: { __html: DOMPurify.sanitize(rawHTML) } });

    const RelatedArticles = (articles: Articles[]) => {
        return(
            articles.map( (article) => {
                
                return(
                    <div key={article.id} className="featuredArticle ant-col-xs-24">  
                        <Link to={"/makale/php/"+article.sayfa_tag} >
                            <div className='featuredArticleImg'>
                                <div style={{ backgroundImage:"url('https://optikfare.com.tr/documents/makaleler/"+article.sayfa_tag+"/"+article.kapak_adres+"')" }}></div>
                            </div>
                            <div className='featuredArticleContent'>
                                <h4>{article.baslik}</h4>                          
                                <p><ClockCircleOutlined /> { moment(article.eklenme_tarihi).locale('tr').startOf('day').fromNow()  }</p>

                            </div>
                        </Link>
                    </div>
                )
                
            })
        )
        
    }

    return (
        <div className='mainContainer'>
            { (header) && SiteHelmet(header.title, header.description, header.keywords, header.icon, header.img) }
            {
                (loading) ? <LoadingOutlined /> :
                <Row>
                    <Col xs={24} sm={24} md={16}>
                        <h1>{(makale) && makale.baslik}</h1>
                        <div className='articleMain'>{(makale) && renderHTML(makale.icerik)}</div>
                    </Col>
                    <Col xs={24} sm={24} md={8}>
                        { (ilgili_makaleler) && RelatedArticles(ilgili_makaleler) }
                    </Col>
                </Row>
            }
        </div>
    );
}

export default ReadArticle;