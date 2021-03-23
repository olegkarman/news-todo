import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { loadNews, resetNews } from '../../../redux/actions/newsActions';
import NewsSearchForm from '../NewsSearchForm/NewsSearchForm';
import Loader from '../../../components/Loader/Loader';
import NewsItem from '../../../components/NewsItem/NewsItem';
import ReactPaginate from "react-paginate";
import './SearchNews.css';

const SearchNews = ({newsPage, searchParams, loadNews, newsList, isNewsLoading, newsTotalResults, resetNews, newsErrorMessage}) => {
    const [searchUsed, setSearchUsed] = useState(false);
    let pageCount = 0;

    useEffect(() => {
        return () => {
            resetNews();
        }
    }, []);

    const drawNewsWithPagination = () => {
        pageCount = Math.ceil(newsTotalResults/20) < 20 ? Math.ceil(newsTotalResults/20) : 20; // with free version of API it is not possible to get all data
        return (
            <> 
                <div className='news-list-wrapper'>
                    {newsList.map((news, i) => (<NewsItem key={i} news={news} id={i} />))}
                </div>

                <ReactPaginate
                    previousLabel={"← Previous"}
                    nextLabel={"Next →"}
                    pageCount={pageCount}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    previousLinkClassName={"pagination-link"}
                    nextLinkClassName={"pagination-link"}
                    disabledClassName={"pagination-link--disabled"}
                    activeClassName={"pagination-link--active"}
                    forcePage={newsPage}
                />
            </>
        );
    };

    const drawInfoText = () => {
        if (newsErrorMessage) {
            return (<p className='no-news-found'>{newsErrorMessage.error.message}</p>);
        }
        if (!searchUsed) {
            return (<p className='use-filter-text'>Please, use filter to find news.</p>);
        }
        if (!newsList.length) {
            return (<p className='no-news-found'>No news found. Please update search params.</p>);
        }
    }

    const handlePageClick = ({ selected: selectedPage }) => {
        loadNews(searchParams, selectedPage + 1);
    };

    return (
        <div className='search-news-wrapper'>
            <NewsSearchForm loadNews={loadNews} searchParams={searchParams} setSearchUsed={setSearchUsed} />
            
            {
            isNewsLoading ? <Loader /> : 
            
            <>
                {drawInfoText()}

                {newsList.length ? drawNewsWithPagination() : null}
            </>
            }
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        searchParams: state.news.params,
        newsList: state.news.newsList,
        isNewsLoading: state.news.isLoading,
        newsTotalResults: state.news.totalResults,
        newsErrorMessage: state.news.errorMessage,
        newsPage: state.news.page
    }
};

const mapDispatchToProps = (dispatch) => ({
    loadNews: (params, page) => dispatch(loadNews(params, page)),
    resetNews: () => dispatch(resetNews())
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchNews);