module.exports = {
    title: 'LukePan',
    description: 'LukePan的文档',
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    },
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { text: '金融', link: '/fintech/' },
            { text: '电商', link: '/ecommerce/' },
            { text: '游戏', link: '/games/' },
            { text: '通信', link: '/telecom/' },
        ],
        sidebar: {
            '/fintech/': [
                'trade',
                'algorithm'
            ],
            '/': []
        }
    }
}