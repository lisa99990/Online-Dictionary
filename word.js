var wordSearch = function(connection, termQuery,res){
    connection.query("SELECT * FROM entries where word = '"+termQuery+"'", function (err, result, fields) {
        if (err) throw err;
        var resultArray = JSON.parse(JSON.stringify(result));
        res.json(resultArray);
      });
}

exports.wordSearch = wordSearch;