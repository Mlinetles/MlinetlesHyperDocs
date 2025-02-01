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
            },
            {
                text: 'Fabric',
                items: [
                    {
                        text: '首页',
                        link: '/fabric/'
                    }
                ]
            }
        ],
        sidebar: {
            '/fabric/': [
                ['', '首页'],
                ['sg', '源生成器']
            ],
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