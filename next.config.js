module.exports = {
    images: {
        domains: ['bpj.org.uk'],
    },
    webpack: (config, { isServer }) => {
        if (!isServer) {
            // Unset client-side javascript that only works server-side
            // https://github.com/vercel/next.js/issues/7755#issuecomment-508633125
            config.node = { fs: 'empty', module: 'empty' };
        }

        config.module.rules.push({
            test: /\.md$/,
            use: 'raw-loader',
        });

        return config;
    },
};
