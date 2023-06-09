import {toSQL} from './filter-parser'
import _ from 'lodash';
const cases=[
    {
        "filter": "(UnitsInStock~lte~1~and~ProductName~startswith~'chai'~and~UnitPrice~neq~18~and~ProductID~eq~1)",
        "result": "(UnitsInStock <= 1 AND ProductName LIKE 'chai%' AND UnitPrice <> 18 AND ProductID = 1)"
    },
    {
        "filter": "((ProductID~eq~1~or~ProductID~eq~2)~and~(UnitPrice~gte~0~and~UnitPrice~lte~10))",
        "result": "((ProductID = 1 OR ProductID = 2) AND (UnitPrice >= 0 AND UnitPrice <= 10))"
    },
    {
        "filter": "(ProductID~eq~1~or~ProductID~eq~2)",
        "result": "(ProductID = 1 OR ProductID = 2)"
    },
    {
        "filter": "(FirstOrderedOn~eq~datetime'2023-06-03T04:00:00.000Z'~and~ProductID~eq~1)",
        "result": "(FirstOrderedOn = '2023-06-03 04:00:00' AND ProductID = 1)"
    },
    {
        "filter": "(ProductID~eq~2~and~FirstOrderedOn~eq~datetime'2023-06-05T00-00-00')",
        "result": "(ProductID = 2 AND FirstOrderedOn = '2023-06-05 00:00:00')"
    }
]

_(cases).forEach(c=>{
    const {filter,result}=c;
    
    test(`parse '${filter}' to sql`,()=>{
        const testResult=toSQL(filter);
        console.log(testResult);
        expect(testResult).toBe(result);
    });
});

