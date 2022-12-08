import { InstagramFilled, LeftSquareFilled, RightSquareFilled, YoutubeFilled } from '@ant-design/icons';
import { Carousel, Col, Row } from 'antd';
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppState } from '../../store';
import { getMain } from '../../store/actions/mainActions';
import SiteHelmet from './SiteHelmet';

function SiteHeader() {
    
    const header = useSelector( (state: AppState) => state.main.data.header);
    const makaleler = useSelector( (state: AppState) => state.main.data.makaleler);
    
    const dispatch = useDispatch<any>();

    useEffect(() => {
        dispatch(getMain());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    let carouselRef = useRef<any>();
    const handleNext = () => carouselRef.current.next();
    const handlePrev = () => carouselRef.current.prev();

    return (
        <>
        <div className="headerTop">
            <div className="container">
                <Row>
                    <Col xs={24} sm={24} md={20}>
                        <Row>
                            <Col xs={24} sm={24} md={4}>
                                <LeftSquareFilled className='topButton' onClick={handlePrev} /> <RightSquareFilled className='topButton' onClick={handleNext} /> &nbsp;
                            </Col>
                            <Col xs={24} sm={24} md={20}>
                                <Carousel className='headerTopCarousel' autoplay draggable dots={false} ref={carouselRef}>
                                    { (makaleler) && makaleler.map( article => {
                                        return(
                                            <div key={article.id}>
                                                <Link to={"makale/php/"+article.sayfa_tag}>
                                                    {article.baslik}
                                                </Link>
                                            </div>
                                        )
                                    })}
                                </Carousel>
                            </Col>
                        </Row>
                    </Col>
                    <Col className='socialMedia' xs={24} sm={24} md={4}>                            
                        <YoutubeFilled className='topButton' /> <InstagramFilled className='topButton' />
                    </Col>
                </Row>
            </div>
        </div>
        <div className='header'>

            <div className='container'>
                <div className='logo'>
                    {
                    (header) && 
                        <div key={header.title}>
                        {SiteHelmet(header.title, header.description, header.keywords, header.icon, header.img)}
                        <Link to="/" >{header.title}</Link>
                        </div>
                    }
                        
                    
                </div>
            </div>
        </div>
        </>
    );
}

export default SiteHeader;