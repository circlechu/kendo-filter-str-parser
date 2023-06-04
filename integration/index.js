import * as FilterConverter from '../filter-parser/'
import _ from 'lodash';
import data from './json';
import moment from 'moment';

const dataQuery=(filter,result)=>{
    const query=FilterConverter.toLodash(filter);
    const filterFn=new Function('x', 'moment',`return ${query}`);
    const testResult=_(data).filter(x=>filterFn(x,moment)).map(d=>d.ProductID).join(',');
    
    return testResult;
}

export default dataQuery;