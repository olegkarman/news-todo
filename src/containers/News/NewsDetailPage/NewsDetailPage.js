import React from 'react';
import { connect } from 'react-redux';
import { getNewsById } from '../../../redux/selectors/newsSelector';
import './NewsDetailPage.css';

const NewsDetailPage = ({newsDetails}) => {
    return (
        <div className='news-detail-page'>
            {newsDetails.urlToImage ? <img alt='news-title' className='news-image' src={newsDetails.urlToImage} /> : null}
            <h2>{newsDetails.title}</h2>
            <a href={newsDetails.url}>{newsDetails.content}</a>
            <p className='news-extra-info'>Author - {newsDetails.author}</p>
            <p className='news-extra-info'>{new Date(newsDetails.publishedAt).toDateString()}</p>
        </div>
    );
};

const mapStateToProps = (state, dispatchProps) => {
    const newsDetails = getNewsById(state, dispatchProps.match.params.id);
    return { newsDetails }
};

export default connect(mapStateToProps)(NewsDetailPage);