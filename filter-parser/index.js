const convertFilterToSQL = (filter) => { // 替换~为相应的操作符
    filter = filter.replace(/~eq~/g, ' = ');
    filter = filter.replace(/~neq~/g, ' <> ');
    filter = filter.replace(/~gt~/g, ' > ');
    filter = filter.replace(/~gte~/g, ' >= ');
    filter = filter.replace(/~lt~/g, ' < ');
    filter = filter.replace(/~lte~/g, ' <= ');
    filter = filter.replace(/~and~/g, ' AND ');
    filter = filter.replace(/~or~/g, ' OR ');


    // 在LIKE操作符后添加通配符%
    filter = filter.replace(/~startswith~'([^']+)'/gi, " LIKE '$1%'");
    filter = filter.replace(/~contains~'([^']+)'/gi, " LIKE '%$1%'");


    // 匹配最内层的括号表达式
    const regex = /\(([^()]+)\)/g;

    // 递归函数，将括号表达式转换为SQL查询
    function convertExpressionToSQL(expression) {
        return expression.replace(regex, (match, innerExpression) => {
            const sql = convertExpressionToSQL(innerExpression);
            return `(${sql})`;
        });
    }

    return convertExpressionToSQL(filter);
}
export default parseFilterExpression = convertFilterToSQL;
