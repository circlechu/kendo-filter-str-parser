// import * as FilterConverter from './filter-parser'
// import _ from 'lodash';
// import data from './json';
// import moment from 'moment';
// const cases=[
//     {
//         "filter": "(ProductID~eq~1~and~FirstOrderedOn~eq~datetime'2020-01-01T05:00:00.000Z')",
//         "result": "1"
//     },
//     {
//         "filter": "(FirstOrderedOn~lte~datetime'2020-02-18T05:00:00.000Z')",
//         "result": "1,2,3,4"
//     },
//     {
//         "filter": "FirstOrderedOn~lt~datetime'2020-01-17T05:00:00.000Z'",
//         "result": "1"
//     },
//     {
//         "filter": "(FirstOrderedOn~gte~datetime'2023-03-30T04:00:00.000Z')",
//         "result": "75,76,77"
//     },
//     {
//         "filter": "(FirstOrderedOn~gt~datetime'2023-03-30T04:00:00.000Z')",
//         "result": "76,77"
//     },
//     {
//         "filter": "(FirstOrderedOn~gt~datetime'2023-03-30T04:00:00.000Z'~and~FirstOrderedOn~lt~datetime'2023-05-01T04:00:00.000Z')",
//         "result": "76"
//     }
// ];

// _(cases).forEach(c=>{
//     const {filter,result}=c;
//     const filterFn=FilterConverter.toLodashFn(filter);
//         const testResult=_(data).filter(x=>filterFn(x)).map(d=>d.ProductID).join(',')
//     test(`parse '${filter}' to lodash`,()=>{
        
//         console.log(testResult);
//         expect(testResult).toBe(result);
//     });
// });
