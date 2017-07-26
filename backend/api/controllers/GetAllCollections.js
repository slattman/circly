'use strict';

module.exports = {
  GetAllCollections : GetAllCollections
}

var protobuf = require("protobufjs");
var protos = require("../../protos/out/ts/model.js")

function GetAllCollections(req, res) {
    var mock1  = protos.model.Collection.create()
    mock1.name = "mock collection"
    mock1.createdTsMicros = 123456
    mock1.description = "simple mock collection"
    mock1.subscriberIds = []

    var mock2  = protos.model.Collection.create()
    mock2.name = "mock collection 2"
    mock2.createdTsMicros = 123456
    mock2.description = "simple mock collection 2"
    mock2.subscriberIds = []

    res.json([mock1, mock2])
}
