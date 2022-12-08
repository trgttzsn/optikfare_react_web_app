import React from 'react';
import { Helmet } from 'react-helmet';

const SiteHelmet = (title: string, description: string, keyword: string, icon: string, img:string) => {
    return (
                
        <Helmet key={title}>
    
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name='keywords' content={keyword} />
            <link rel="icon" href={icon} />
            
            <meta property="og:type" content="Website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={img} />
            
            <meta name="twitter:creator" content="optikfare.com.tr" />
            <meta name="twitter:card" content="Website" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={img} />

        </Helmet>
        
    )
}

export default SiteHelmet;