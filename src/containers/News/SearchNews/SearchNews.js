import React from 'react';
import { connect } from 'react-redux';
import { loadNews } from '../../../redux/actions/newsActions';
import NewsSearchForm from '../NewsSearchForm/NewsSearchForm';

const SearchNews = ({loadNews, newsList, isNewsLoading, newsErrorMessage}) => {
    return (
        <div className='search-news-wrapper'>
            <NewsSearchForm loadNews={loadNews} />
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        newsList: state.news.newsList,
        isNewsLoading: state.news.isLoading,
        newsErrorMessage: state.news.errorMessage
    }
};

const mapDispatchToProps = (dispatch) => ({
    loadNews: params => dispatch(loadNews(params))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchNews);