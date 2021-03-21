export const extractSearchData = data => {
    return "" + Object.keys(data).filter(k => data[k] || (typeof data[k] === 'string' && data[k].length))
        .map(k => `${k}=${data[k].replace(' ', '+')}`).join('&');
};