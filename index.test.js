import parseFilterExpression from './filter-parser'

test(`parse kendo filter string to sql`,()=>{
    const str=`(FirstOrderedOn~eq~'2023-06-03T04:00:00.000Z'~and~ProductID~eq~1)`;
    const result=parseFilterExpression(str);
    expect(result).toBe(`FirstOrderedOn = '2023-06-03T04:00:00.000Z' OR ProductID = '1'`)
})