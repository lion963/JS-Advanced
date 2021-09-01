function JsonToHtmlTable(json){
    let arr = JSON.parse(json);
    let outputArr = ["<table>"];
    outputArr.push(makeKeyRow(arr));
    arr.forEach((obj) => outputArr.push(makeValueRow(obj)));
    outputArr.push("</table>");

    function makeKeyRow(arr){
        let KeyRow = [];
        let keys = Object.keys(arr[0]);
        keys.forEach((key, i) => keys[i]=escapeHtml(key));
        keys.forEach(key => KeyRow.push("<th>"+key+"</th>"))
        KeyRow.unshift("    <tr>");
        KeyRow.push("</tr>")
        return KeyRow.join('')
    }

    function makeValueRow(obj){
        let ValueRow = [];
        let values = Object.values(obj);
        values.forEach((value, i) => values[i]=escapeHtml(value));
        values.forEach(value => ValueRow.push("<td>"+value+"</td>"))
        ValueRow.unshift("    <tr>")
        ValueRow.push("</tr>")
        return ValueRow.join('')

    }

    function escapeHtml(value){
        return escape(value)
    }

    console.log(outputArr.join('\n'));
}


JsonToHtmlTable(`[{"Name":"Stamat",
    "Score":5.5},
   {"Name":"Rumen",
    "Score":6}]`)


    JsonToHtmlTable(`[{"Name":"Pesho",
    "Score":4,
    "Grade":8},
   {"Name":"Gosho",
    "Score":5,
    " Grade":8},
   {"Name":"Angel",
    "Score":5.50,
    "Grade":10}]`)