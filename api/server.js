"use strict";
exports.__esModule = true;
var apollo_server_1 = require("apollo-server");
var typeDefs_1 = require("../src/graphql/typeDefs");
var resolvers_1 = require("../src/graphql/resolvers");
// Create Apollo Server instance
var server = new apollo_server_1.ApolloServer({ typeDefs: typeDefs_1["default"], resolvers: resolvers_1["default"] });
// Start server
server.listen().then(function (_a) {
    var url = _a.url;
    console.log("Server ready at " + url);
});
