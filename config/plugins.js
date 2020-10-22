module.exports = ({ env }) => ({
    // ...
    upload: {
        provider: 'cloudinary',
        providerOptions: {
            cloud_name: env('dz69ocbgz'),
            api_key: env('416148235216896'),
            api_secret: env('SX0CpG1JRrCtLCTn_U59snqkhL8'),
        },
    },
    // ...
});