let mix = require('laravel-mix');

if (process.env.STATIC_ASSETS_BUILD) {
    mix.setPublicPath('public/build')
        .options({
            processCssUrls: true,
        })
        .setResourceRoot(process.env.STATIC_ASSETS_URL)
        .webpackConfig(() => ({
            output: {
                publicPath: `${process.env.STATIC_ASSETS_URL}/`,
            },
        }));
}
