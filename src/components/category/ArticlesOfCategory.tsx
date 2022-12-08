import { LoadingOutlined } from '@ant-design/icons';
import { Col, Pagination, Row } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { AppState } from '../../store';
import { getCategory } from '../../store/actions/categoryAction';
import PopulerArticles from '../main/PopulerArticles';
import SiteHelmet from '../main/SiteHelmet';
import ArticleList from './ArticleList';
import BreadcrumbList from './BreadcrumbList';

function ArticlesOfCategory() {
    
    const makaleler = useSelector( (state: AppState) => state.category.data.makaleler);
    const header = useSelector( (state: AppState) => state.category.data.header);
    const kategori = useSelector( (state: AppState) => state.category.data.kategori);
    const loading = useSelector( (state: AppState) => state.category.loading);
    
    const dispatch = useDispatch<any>();

    const location = useLocation();
    
    useEffect(() => {
        dispatch(getCategory(location.pathname));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);

    const dataPerPage = 5;
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(dataPerPage);

    const pageChange = (current: number) => {
        setStart((current - 1) * dataPerPage);
        setEnd( current * dataPerPage );
    }
    
    return (
        <div className='mainContainer'>
            
            {(header) && SiteHelmet(header.title, header.description, header.keywords, header.icon, header.img) }
            {
                (loading) ? <LoadingOutlined /> :
                <Row>
                    <Col xs={24} sm={24} md={16}>
                        <h1 className='pageTitle'>{ (kategori) && kategori.at(kategori.length -1)?.baslik} Kategorisi</h1>
                        { (kategori) && BreadcrumbList(kategori) }
                        { (makaleler) && ArticleList(makaleler.slice(start, end )) }
                        { (makaleler) && <Pagination onChange={pageChange} defaultPageSize={dataPerPage} defaultCurrent={1} total={makaleler.length} showTotal={ total => `Toplam ${total} Makale`} />}
                    </Col>
                    <Col xs={24} sm={24} md={8}>
                        <PopulerArticles />
                    </Col>
                </Row>
            }
        </div>
    );
}

export default ArticlesOfCategory;