import React from 'react';
import { Helmet } from 'react-helmet';
const SEO = ({ title, description, keywords ,ImgUrl }) => {

 return (
 <Helmet>
 <title>{title}</title>
 <link rel="canonical" href={window.location.href} />
 <meta name="description" content={description} />
 <meta name="author" content={title} />
 <meta name="keywords" content={keywords} />
 <meta name="robots" content="index, follow" />
 <meta name="viewport" content="width=device-width, initialscale=1" />
 <meta property="og:title" content={title} />
 <meta property="og:description" content={description} />
 <meta property="og:type" content="website" />
 <meta property="og:url" content={window.location.href} />
 <meta property="og:image" content={ImgUrl} />
 </Helmet>
 );
};
export default SEO;