var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');


MongoClient.connect('mongodb://localhost:27017/school', function(err, db) {

    assert.equal(err, null);
    console.log("Successfully connected to MongoDB.");

    var query = {"category_code": "biotech"};
	

   // var cursor = db.collection('companies').find(query);
	
var cursor = db.collection("grades").find({});
cursor.sort({"grade": -1});
cursor.skip(4);
cursor.limit(2);

    cursor.forEach(
        function(doc) {
            console.log( doc );
        },
        function(err) {
            assert.equal(err, null);
            return db.close();
        }
    );

});
