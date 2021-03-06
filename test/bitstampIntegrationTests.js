'use strict';

const chai = require('chai');
const sharedTests = require('./shared/integrationTest.js');

// configure Integration tests variables below this line

const slug = 'bitstamp';
const apiHost = {
    private: 'https://www.bitstamp.net',
    public:  'https://www.bitstamp.net'
};

const publicMethodsToTest = [];
const privateMethodsToTest = [];
//const publicMethodsToTest = ['getTicker', 'getRate', 'getOrderBook'];
//const privateMethodsToTest = ['getFee', 'getTransactions', 'getBalance'];
const writeMockResponseFileForMethod = '';
const nativeCalls = [
    ['ticker']
];

// don't change below this line; only configure above this line


describe('Integration Test ' + slug + ':', function () {
    let contextIT = {                     // set context for Integration Testing
        slug: slug,
        apiHost: apiHost,
        publicMethodsToTest: publicMethodsToTest,
        privateMethodsToTest: privateMethodsToTest,
        writeMockResponseFileForMethod: writeMockResponseFileForMethod,
        nativeCalls: nativeCalls,
    };
    sharedTests.integrationTest(contextIT);
});
