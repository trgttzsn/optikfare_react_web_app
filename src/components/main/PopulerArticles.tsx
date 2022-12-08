
import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../store';
import { Article } from '../../types/main';

import { ClockCircleOutlined, LoadingOutlined } from '@ant-design/icons';
import { Col, Collapse, Row } from 'antd';
import moment from 'moment';
import { Link } from 'react-router-dom';

function PopulerArticles() {

    const cokunan = useSelector( (state: AppState) => state.main.data.cokunan);
    const populer = useSelector( (state: AppState) => state.main.data.populer);
    const loading = useSelector( (state: AppState) => state.main.loading);

    const ArticleList = (articles : Article[]) => {
        return(
            articles.map( article => {
                return(
                    <Link key={article.id} to={"/makale/php/"+article.sayfa_tag}>
                        <Row className='populerArticle'>
                            <Col xs={24} sm={24} md={24} lg={10} className="populerArticleImg">
                                <div style={{ backgroundImage:"url('https://optikfare.com.tr/documents/makaleler/"+article.sayfa_tag+"/"+article.kapak_adres+"')" }}></div>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={14} className="populerArticleContent">
                                <h4>{article.baslik}</h4>
                                <p><ClockCircleOutlined /> { moment(article.eklenme_tarihi).locale('tr').startOf('day').fromNow()  }</p>
                            </Col>
                        </Row>
                    </Link>
                )
            })
        )
    }

    const { Panel } = Collapse;
    return (
        <div className='populerArticles'>
            <Collapse accordion defaultActiveKey={1}>
                <Panel header="Çok Okunan Makaleler" key="1">
                {
                    (loading) ? <LoadingOutlined /> :
                    (cokunan) && ArticleList(cokunan) 
                }
                </Panel>
                <Panel header="Popüler Makaleler" key="2">
                {
                    (loading) ? <LoadingOutlined /> :
                    (populer) && ArticleList(populer) 
                }
                </Panel>
            </Collapse>
        </div>
    );
}

export default PopulerArticles;