module.exports = {
    /*
     ** Headers of the page
     */
    head: {
        title: 'starter',
        head: {
            script: [
                { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' },
                { src: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js' }
            ]
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Nuxt.js project' }
        ],
        link: [
            { href: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css', rel: 'stylesheet' },
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    /*
     ** Global CSS
     */
    css: ['~assets/css/main.css'],
    /*
     ** Add axios globally
     */
    build: {
        vendor: ['axios'],
        /*
         ** Run ESLINT on save
         */
        extend(config, ctx) {
            if (ctx.isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    exclude: /(node_modules)/
                })
            }
        }
    }
}
