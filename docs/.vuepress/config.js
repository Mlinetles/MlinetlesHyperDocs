module.exports = {
    title: 'MlinetlesHyper',
    description: 'MlinetlesHyper的文档网站',
    themeConfig: {
        nav: [
            {
                text: 'mnd相关',
                items: [
                    { text: 'mnd介绍', 'link': '/mnd/' }
                ]
            }
        ],
        sidebar: {
            '/mnd/': [
                ['', 'mnd文件'],
                ['format', 'mnd格式']
            ],
            '/': [
                ['', '首页'],
                ['/mnd/', 'mnd文件']
            ]
        }
    },
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    }
}