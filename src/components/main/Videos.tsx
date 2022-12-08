
import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../store';
import { Video } from '../../types/main';

import { Button, Carousel, Col, Row } from 'antd';
import moment from 'moment';
import { LeftSquareOutlined, PlayCircleOutlined, RightSquareOutlined } from '@ant-design/icons';

function Videos() {

    const videolar = useSelector( (state: AppState) => state.main.data.videolar );
    
    let carouselRef = useRef<any>();
    const handleNext = () => carouselRef.current.next();
    const handlePrev = () => carouselRef.current.prev();

    const [isOver, setIsOver] = useState(false);

    const CarouselContent = (videos: Video[]) => {
        return(
            videos.map(video => {
                return(
                    <div key={video.id}>
                        <Row onMouseEnter={ () => setIsOver(true)} onMouseLeave={ () => setIsOver(false)}>
                            <Col xs={24} sm={24} md={24} lg={10} className="videoImg">
                                <a href={video.link} target="_blank">
                                <div className='videoOverlay' style={{ opacity: (isOver) ? "1" : "0.5" }}><PlayCircleOutlined /></div>
                                <div style={{ backgroundImage:"url('https://optikfare.com.tr/images/video-dersler/"+video.resim+"')" }}></div>
                                </a>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={14} className="videoContent">
                                <a href={video.link} target="_blank"><h4 style={{ color: (isOver) ? "#ff5722" : "#e6e8e9"}}>{ video.baslik }</h4></a>
                                <p>{ moment(video.eklenme_tarihi).locale('tr').startOf('day').fromNow() }</p>
                            </Col>
                        </Row>
                    </div>
                )
            })
        )
    }

    return (
        <div>
            <h3>Video Dersler
            <Button className='videoNavigation videoRight' type='link' onClick={handleNext}><RightSquareOutlined /></Button>
            <Button className='videoNavigation videoLeft' type='link' onClick={handlePrev}><LeftSquareOutlined /></Button>
            </h3>
            <div style={{ clear: "both"}}></div>
            <Carousel autoplay draggable dots={false} ref={carouselRef} >
                { (videolar) && CarouselContent(videolar) }
            </Carousel>
            
        </div>
    );
}

export default Videos;