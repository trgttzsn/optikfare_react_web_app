import { useState } from 'react';
import { Col, Row } from 'antd';
import { useSelector } from 'react-redux';
import { AppState } from '../../store';
import { Slider } from '../../types/main';
import { LoadingOutlined } from '@ant-design/icons';

const HomeSlider = () => {

  const slider = useSelector( (state: AppState) => state.main.data.slider);
  const loading = useSelector( (state: AppState) => state.main.loading);

  const [isOver, setIsOver] = useState([false, false, false, false, false]);

  const handleMouseOver = (i: number) => {
    let thisOver = [false, false, false, false, false];
    thisOver[i] = true;
    setIsOver(thisOver);
  };

  const handleMouseOut = (i: number) => {
    let thisOver = [false, false, false, false, false];
    setIsOver(thisOver);
  };

  const SlideContent = (sliderData: Slider[], index: number, position: string) => {
    return(
      Object.entries(sliderData).map( ([key, name], i) => {
        if(i === index){
          return(
          <a key={name.baslik} href={name.link}>                  
            <div onMouseEnter={ () => handleMouseOver(i) } onMouseLeave={ () => handleMouseOut(i)} style={{ backgroundImage:"url('https://optikfare.com.tr/images/ana-slider/"+name.resim+"')" }}>
              <div className='sliderInfo' style={{ top: isOver[i] ? (position === "center") ? '75%': '50%' : (position === "center") ? '100%': '100%' }}>
              <h4>{name.baslik}</h4>
              </div>
            </div>
          </a>
          )
        }else
          return null;
      })
    )
  };
    
    return (
          
      <Row className='slider'>
        {(loading) ? <LoadingOutlined /> :
          <>
          <Col xs={24} sm={24} md={6}>
            <Row className='sliderBox'>
              { (slider) && SlideContent(slider, 0, "left") }
            </Row>
            <Row className='sliderBox'>          
              { (slider) && SlideContent(slider, 1, "left") }           
            </Row>
          </Col>
          <Col xs={24} sm={24} md={12} className='sliderCenterBox'>
            { (slider) && SlideContent(slider, 2, "center") }
          </Col>
          <Col xs={24} sm={24} md={6}>
            <Row className='sliderBox'>
              { (slider) && SlideContent(slider, 3, "right") }
            </Row>
            <Row className='sliderBox'>
              { (slider) && SlideContent(slider, 4, "right") }
            </Row>
          </Col>
          </>
        
      }
      </Row>

    );
    
}

export default HomeSlider;