import { ClockCircleOutlined } from '@ant-design/icons';
import { Row } from 'antd';
import Col from 'antd/es/grid/col';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { Articles } from '../../types/category';

function ArticleList(articles: Articles[]) {
    return (
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
                        <p>{article.description} Devamı...</p>
                    </Col>
                </Row>
            </Link>
            )
        })
    );
}

export default ArticleList;