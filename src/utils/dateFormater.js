import moment from 'moment';

export const dateToSearchFormater = (data, propertiesArray) => {
    let formatedData = {...data};
    propertiesArray.forEach(property => {
        if (formatedData[property]) {
            formatedData[property] = new Date(formatedData[property]).toISOString();
        }
    });

    return formatedData;
};

export const dateToSaveFormater = (data, propertiesArray) => {
    let formatedData = {...data};
    propertiesArray.forEach(property => {
        if (formatedData[property]) {
            formatedData[property] = moment(new Date(formatedData[property])).format('MM-DD-YYYY');
        }
    });

    return formatedData;
};