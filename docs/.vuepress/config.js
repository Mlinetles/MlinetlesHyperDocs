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
        sidebar: [
            ['/', '首页'],
            {
                title: 'mnd文件',
                path: '/mnd/',
                children: [
                    ['./format', 'mnd格式']
                ]
            }
        ]
    }
}