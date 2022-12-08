import { Col, Row } from 'antd';
import React from 'react';
import FeaturedArticles from './FeaturedArticles';
import HomeSlider from './HomeSlider';
import LastArticles from './LastArticles';
import PopulerArticles from './PopulerArticles';
import Videos from './Videos';

function Main() {
    return (
        <div>
            <Row className='mainContainer'>
                <Row>
                    <HomeSlider />
                </Row>
                <Row>
                    <Col xs={24} sm={24} md={16}>
                        <LastArticles />
                    </Col>
                    <Col xs={24} sm={24} md={8}>
                        <PopulerArticles />
                    </Col>
                </Row>
            </Row>
            <Row>
                <Col className='videosContainer'>
                    <Videos />
                </Col>
            </Row>
            <Row className='mainContainer'>
                <FeaturedArticles />
            </Row>
        </div>
    );
}

export default Main;