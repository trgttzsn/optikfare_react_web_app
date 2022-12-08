import { ClockCircleOutlined, LoadingOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';
import moment from 'moment';
import 'moment/locale/tr'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppState } from '../../store';
import { Article } from '../../types/main';

function LastArticles() {

    const makaleler = useSelector( (state: AppState) => state.main.data.makaleler );
    const loading = useSelector( (state: AppState) => state.main.loading );

    const ArticleContent = (articles: Article[]) => {
        return(
            articles.map( article => {
                return(
                <Link key={article.id} to={"/makale/php/"+article.sayfa_tag}>
                    <Row className='lastArticle'>                        
                        <Col xs={24} sm={24} md={8} className="lastArticleImg">
                            <div style={{ backgroundImage:"url('https://optikfare.com.tr/documents/makaleler/"+article.sayfa_tag+"/"+article.kapak_adres+"')" }}></div>
                        </Col>
                        <Col xs={24} sm={24} md={16} className="lastArticleContent">
                            <h4>{article.baslik}</h4>
                            <p><ClockCircleOutlined /> { moment(article.eklenme_tarihi).locale('tr').startOf('day').fromNow()  }</p>
                            <p>{article.makale_aciklama} Devamı...</p>
                        </Col>
                    </Row>
                </Link>
                )
            })
        )
    }

    return (
        <div className='lastArticles'>
            <h3>Son Makaleler</h3>
            {
                (loading) ? <LoadingOutlined /> :
                (makaleler) && ArticleContent(makaleler) 
            }
        </div>
    );
}

export default LastArticles;