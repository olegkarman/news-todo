export const dateFormater = (data, propertiesArray) => {
    let formatedData = {...data};
    propertiesArray.forEach(propertie => {
        if (formatedData[propertie]) {
            formatedData[propertie] = formatedData[propertie].toISOString();
        }
    });

    return formatedData;
}