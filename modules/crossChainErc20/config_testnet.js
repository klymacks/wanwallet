"use strict";

const config = {};
const path = require('path');
const settings = require('../settings.js');

config.network = "testnet";
global.wanchain_js_sdk_testnet =  true;
config.socketUrl = 'wss://apitest.wanchain.info';

// log path
config.logPathPrex = path.join(settings.userDataPath,'log',config.network);

config.ccLog = path.join(config.logPathPrex, 'crossChainLog.log');
config.ccErr = path.join(config.logPathPrex, 'crossChainErr.log');
config.mrLog = path.join(config.logPathPrex, 'ccMonitorLog.log');
config.mrErr = path.join(config.logPathPrex, 'ccMonitorErr.log');

// db path
config.databasePathPrex = path.join(settings.userDataPath, 'Db',`${config.network}DB`);

// for E20 new contract
config.ethHtlcAddrE20      = "0x4a8f5dd531e4cd1993b79b23dbda21faacb9c731";
config.wanHtlcAddrE20      = "0xfc0eba261b49763decb6c911146e3cf524fa7ebc";

config.confirmBlocks            = 2;
config.tryTimes                 = 3;

module.exports = config;


