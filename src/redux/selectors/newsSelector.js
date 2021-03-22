export const getNews = (store) => store.news;

export const getNewsById = (store, id) => {
    if (!getNews(store)) {
        return {};
    }
    
    const newsList = getNews(store).newsList;
    return newsList[id];
};