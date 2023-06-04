import * as FilterConverter from './filter-parser/index.js';
import _ from 'lodash';
import moment from 'moment';
import data from './json/data.json' assert {type:'json'};

let filters=[];
let filter="(ProductID~eq~1~and~FirstOrderedOn~eq~datetime'2020-01-01T05:00:00.000Z')";
filters.push(filter);
filter="(FirstOrderedOn~lte~datetime'2020-02-18T05:00:00.000Z')";
filters.push(filter);
filter="FirstOrderedOn~lt~datetime'2020-01-17T05:00:00.000Z'";
filters.push(filter);
filter="(FirstOrderedOn~gte~datetime'2023-03-30T04:00:00.000Z')";
filters.push(filter);
filter="(FirstOrderedOn~gt~datetime'2023-03-30T04:00:00.000Z')";
filters.push(filter);
filter="(FirstOrderedOn~gt~datetime'2023-03-30T04:00:00.000Z'~and~FirstOrderedOn~lt~datetime'2023-05-01T04:00:00.000Z')";
filters.push(filter);

const testcases=_(filters).map((filterStr)=>{
    const result=FilterConverter.toLodash(filterStr);
    // const filterFun=eval(`x=>{
    //     return ${query}
    // }`);
    // const result=_(data).filter(x=>filterFun(x)).map(d=>d.ProductID).join(',')
    return {
        filter:filterStr,
        result
    }
}).value();


console.log(JSON.stringify(testcases,null,4));

