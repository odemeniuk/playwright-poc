var config = {};
config.web = {};

config.web.url = process.env.URL || "http://localhost/kanboard/";
config.web.headless = process.env.HEADLESS || false;
config.web.sloMo = process.env.SLOMO || 50;
config.web.networkSubscription = process.env.NETWORK;

module.exports = config;
