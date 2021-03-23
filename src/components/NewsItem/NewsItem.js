import React from 'react';
import './NewsItem.css';

const NewsItem = ({news, id}) => {
    return (
        <div className={`news-item-wrapper`}>
            <a href={`/search-news/${id}`}>
                {news.urlToImage ? <img alt='news-title' className='news-image' src={news.urlToImage} /> : null}
                <h3 className='news-item-header'>{news.title}</h3>
                <p className='news-description'>{news.description}</p>
            </a>
        </div>
    );
};

export default NewsItem;