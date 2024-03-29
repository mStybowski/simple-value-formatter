const data = [
    {
        valueReal: 1.65,
        productId: 4563
    },
    {
        valueReal: 5.150,
        productId: 4563
    },
    {
        valueReal: 8.028,
        productId: 4563
    },
    {
        valueReal: 6.448,
        productId: 4563
    },
    {
        valueReal: 7.6974,
        productId: 4564
    }
]

const settings = {
    precision: 2,
    suffix: "$43"
}

const pipe = (...functions) => args => functions.reduce((arg, fn) => fn(arg), args);

const getValueFormatter = (settings) => {
    const {precision, suffix} = settings;

    const addSuffix = (text) => text + suffix;
    const addPrefix = (text) => text + suffix;
    const toFixedPrecision = (value) => value.toFixed(precision);
    // meh
    const dataFormatter = (el) => {
        const labelFormatter = pipe(toFixedPrecision, addSuffix);
        const label = labelFormatter(el.valueReal)
        return {
            ...el,
            
            label
        }
    }
    return (dataArray) => {
        return dataArray.map(dataFormatter);
    }
}

const myValueFormatter = getValueFormatter(settings);

console.log(myValueFormatter(data));

