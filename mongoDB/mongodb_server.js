var mongodb = require('mongodb');

var server = new mongodb.Server('127.0.0.1', 27017, {});

var client = new mongodb.Db('mydatabase', server, {w:1});

// this is dosen't work.
client.open(function(err) {
    if(err){ throw err;}
    client.collection('test_insert', function(err, collection) {
        if(err) throw err;
        console.log('We are now able to perform quires.');
        // collection.insert({
        //     "title":"I like cake",
        //     "body":"It is quite good."
        //     },{safe:true}, function(err, documents) {
        //         if(err) throw err;
        //         console.log('Document ID is: ' + documents[0]._id);
        // });

        collection.find({"title":"I like cake"}).toArray(
            function(err, results) {
                if(err) throw err;
                console.log(results);
            }
        );
    });
});



client.close();