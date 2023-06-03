const parseFilterExpression = (filterExpression) => {
    const regex = /\(?([^()]+)\)?/g;
    const conditions = [];

    let matches;
    while ((matches = regex.exec(filterExpression)) !== null) {
        const subExpression = matches[1];
        const condition = parseSubExpression(subExpression);
        conditions.push(condition);
    }

    return conditions.join(' AND ');
}


const parseSubExpression = (subExpression) => { // const regex = /(\w+)~(eq|ne|gt|lt|gte|lte)~([\w.-]+)/g;
    const regex = /(\w+)~(eq|ne|gt|lt|gte|lte)~'?([^']+)'?/g // for date example: FirstOrderedOn~eq~'2023-06-03T04:00:00.000Z'
    const conditions = [];

    let matches;
    while ((matches = regex.exec(subExpression)) !== null) {
        const field = matches[1];
        const operator = matches[2];
        const value = matches[3];
        const condition = generateCondition(field, operator, value);
        conditions.push(condition);
    }

    return conditions.join(' OR ');
}

const generateCondition = (field, operator, value) => {
    const operators = {
        eq: '=',
        ne: '<>',
        gt: '>',
        lt: '<',
        gte: '>=',
        lte: '<='
    };

    return `${field} ${
        operators[operator]
    } '${value}'`;
}


export default parseFilterExpression;