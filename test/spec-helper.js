/* eslint-env node, mocha */

'use strict';

const chai      = require('chai');
const jsdom     = require('mocha-jsdom');
const sinon     = require('sinon');
const sinonChai = require('sinon-chai');

require('reflect-metadata');
require('rxjs/Observable');
require('rxjs/add/observable/throw');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/debounceTime');
require('rxjs/add/operator/map');

global.sandbox = sinon.sandbox.create();
global.sinon   = sinon;

chai.should();
chai.use(sinonChai);
jsdom();

afterEach(() => {
  global.sandbox.restore();
});
