var config = {
    API_ENDPOINT: 'gateway-vertx-' + process.env.OPENSHIFT_BUILD_NAMESPACE,
    SECURE_API_ENDPOINT: 'gateway-vertx-' + process.env.OPENSHIFT_BUILD_NAMESPACE,
    SSO_ENABLED: process.env.SSO_URL ? true : false
};

if (process.env.COOLSTORE_GW_ENDPOINT != null) {
    config.API_ENDPOINT = process.env.COOLSTORE_GW_ENDPOINT;
} else if (process.env.COOLSTORE_GW_SERVICE != null) {
    config.API_ENDPOINT = process.env.COOLSTORE_GW_SERVICE + '-' + process.env.OPENSHIFT_BUILD_NAMESPACE;
}

if (process.env.SECURE_COOLSTORE_GW_ENDPOINT != null) {
    config.SECURE_API_ENDPOINT = process.env.SECURE_COOLSTORE_GW_ENDPOINT;
} else if (process.env.SECURE_COOLSTORE_GW_SERVICE != null) {
    config.SECURE_API_ENDPOINT = process.env.SECURE_COOLSTORE_GW_SERVICE + '-' + process.env.OPENSHIFT_BUILD_NAMESPACE;
}

console.log('API_ENDPOINT:', config.API_ENDPOINT);
console.log('SECURE_API_ENDPOINT:', config.SECURE_API_ENDPOINT);

module.exports = config;
