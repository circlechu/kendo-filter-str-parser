import * as FilterConverter from './filter-parser'
import _ from 'lodash';
const cases=[
    {
        "filter": "(UnitsInStock~lte~1~and~ProductName~startswith~'chai'~and~UnitPrice~neq~18~and~ProductID~eq~1)",
        "result": "(x.UnitsInStock <= 1 &&  /^chai/gi.test( x.ProductName ) && x.UnitPrice != 18 && x.ProductID === 1)"
    },
    {
        "filter": "(UnitsInStock~lte~1~and~ProductName~contains~'chai'~and~UnitPrice~neq~18~and~ProductID~eq~1)",
        "result": "(x.UnitsInStock <= 1 &&  /chai/gi.test( x.ProductName ) && x.UnitPrice != 18 && x.ProductID === 1)"
    },
    {
        "filter": "((ProductID~eq~1~or~ProductID~eq~2)~and~(UnitPrice~gte~0~and~UnitPrice~lte~10))",
        "result": "(( x.ProductID === 1 || x.ProductID === 2 ) && ( x.UnitPrice >= 0 && x.UnitPrice <= 10 ))"
    },
    {
        "filter": "(ProductID~eq~1~or~ProductID~eq~2)",
        "result": "( x.ProductID === 1 || x.ProductID === 2 )"
    },
    // {
    //     "filter": "(FirstOrderedOn~eq~'2023-06-03T04:00:00.000Z'~and~ProductID~eq~1)",
    //     "result": "(FirstOrderedOn = '2023-06-03T04:00:00.000Z' AND ProductID = 1)"
    // },
    // {
    //     "filter": "(FirstOrderedOn~gte~'2023-06-03T04:00:00.000Z'~and~ProductID~eq~1)",
    //     "result": "(FirstOrderedOn >= '2023-06-03T04:00:00.000Z' AND ProductID = 1)"
    // }
]

_(cases).forEach(c=>{
    const {filter,result}=c;
    
    test(`parse '${filter}' to sql`,()=>{
        const testResult=FilterConverter.toLodash(filter);
        console.log(testResult);
        expect(testResult).toBe(result);
    });
});

