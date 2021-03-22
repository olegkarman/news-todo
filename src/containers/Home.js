import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './Main/Main';
import Navbar from './Navbar/Navbar';
import NewsDetailPage from './News/NewsDetailPage/NewsDetailPage';
import SearchNews from './News/SearchNews/SearchNews';
import TodoDetailPage from './Todos/TodoDetailPage/TodoDetailPage';
import TodosList from './Todos/TodosList/TodosList';

const Home = () => {
  return (
    <div className="News-Todo">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/search-news" component={SearchNews} />
        <Route path="/search-news/:id" component={NewsDetailPage} /> 
        <Route exact path="/todos" component={TodosList} />
        <Route path="/todos/:id" component={TodoDetailPage} />
      </Switch>
    </div>
  );
}

export default Home;
