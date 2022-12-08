import { HomeOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { CategoryLinks } from '../../types/category';

function BreadcrumbList(breadcrumbs: CategoryLinks[]) {
    return (
        <Breadcrumb>
            <Breadcrumb.Item href="/">
            <HomeOutlined />
            </Breadcrumb.Item>
            {
                breadcrumbs.map( key => {
                    return(            
                        <Breadcrumb.Item key={key.id}>
                            <Link to={"/"+key.sayfa_tag}><span>{key.baslik}</span></Link>
                        </Breadcrumb.Item>
                    )
                })
            }
        </Breadcrumb>
    );
}

export default BreadcrumbList;