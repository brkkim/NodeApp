var assert = require('assert');

// db, document and collection becomes input paramters

// insert document function
exports.insertDocument = function(db, document, collection, callback) {
    // get the documents collection
    var coll = db.collection(collection);

    // insert some documents
    coll.insertOne(document, function(err, result){
        assert.equal(err, null);
        console.log("Inserted: " + result.result.n + " documents into the document collection " + collection);
        callback(result);
    });
};

// query document function
exports.findDocuments = function(db, collection, callback) {
    // get the docuemnts collection
    var coll = db.collection(collection);
    // find some documents
    coll.find({}).toArray(function(err, docs) {
        assert.equal(err, null);
        callback(docs);
    });
};

// remove document
exports.removeDocument = function (db, document, collection, callback) {
    // get the documents collection
    var coll = db.collection(collection);
    // delete a document
    coll.deleteOne(document, function(err, result) {
        assert.equal(err, null);
        console.log("Removed the document " + document);
        callback(result);
    });
};

// update existing document
exports.updateDocument = function(db, document, update, collection, callback) {
    // get the documents collection
    var coll = db.collection(collection);
    // update document where a is 2 set b equal to 1
    coll.updateOne(document, {$set: update}, null, function(err, result) {
        assert.equal(err, null);
        console.log("Updated the document with " + update);
        callback(result);
    })
};
