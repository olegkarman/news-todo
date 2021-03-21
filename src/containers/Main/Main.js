import React from 'react';
import './Main.css';

const Main = () => {
    return (
        <div className="main-wrapper">
            <a href="/todos">{`<- Todos`}</a>
            <a href="/search-news">{`Search News ->`}</a>
        </div>
    )
};

export default Main;