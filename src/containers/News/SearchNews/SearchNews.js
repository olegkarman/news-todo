import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loadNews } from '../../../redux/actions/newsActions';
import NewsSearchForm from '../NewsSearchForm/NewsSearchForm';
import Loader from '../../../components/Loader/Loader';
import NewsItem from '../../../components/NewsItem/NewsItem';
import ReactPaginate from "react-paginate";
import './SearchNews.css';

const SearchNews = ({searchParams, loadNews, newsList, isNewsLoading, newsTotalResults, newsErrorMessage}) => {
    const [searchUsed, setSearchUsed] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    let pageCount = 0;

    const drawNewsWithPagination = () => {
        pageCount = Math.ceil(newsTotalResults/20);
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
                    forcePage={currentPage}
                />
            </>
        );
    };

    const handlePageClick = ({ selected: selectedPage }) => {
        setCurrentPage(selectedPage);
        loadNews(searchParams, selectedPage + 1);
    };

    return (
        <div className='search-news-wrapper'>
            <NewsSearchForm loadNews={loadNews} searchParams={searchParams} setSearchUsed={setSearchUsed} />

            {
            isNewsLoading ? <Loader /> : 
            
            <>
                {
                !searchUsed && !newsList.length ? 
                    <p className='use-filter-text'>Please, use filter to find news</p> 
                : 
                    <p className='no-news-found'>No news found. Please, update the search params.</p>
                }


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
        newsErrorMessage: state.news.errorMessage
    }
};

const mapDispatchToProps = (dispatch) => ({
    loadNews: (params, page) => dispatch(loadNews(params, page))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchNews);