import React from 'react';
import { connect } from 'react-redux';
import { getNewsById } from '../../../redux/selectors/newsSelector';

const NewsDetailPage = ({newsDetails}) => {
    return (
        <div className='news-detail-page'>
            {newsDetails.urlToImage ? <img alt='news-title' className='news-image' src={newsDetails.urlToImage} /> : null}
            <h2>{newsDetails.title}</h2>
            <a href={newsDetails.url}>{newsDetails.content}</a>
            <p>Author - {newsDetails.author}</p>
            <p>{new Date(newsDetails.publishedAt).toDateString()}</p>
        </div>
    );
};

const mapStateToProps = (state, dispatchProps) => {
    const newsDetails = getNewsById(state, dispatchProps.match.params.id);
    return { newsDetails }
};

export default connect(mapStateToProps)(NewsDetailPage);