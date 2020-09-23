// .vuepress/config.js
module.exports = {
    title: 'InterviewNotes', 
    description : '面试笔记',
    base : '/interviewnotes/',
    themeConfig: {
    //   logo: '/assets/img/logo.png',
      nav: [
        { text: 'Java', link: '/Java/' },
        { text: '算法', link: '/算法/' },
        { text: '计算机网络', link: '/计算机网络/' },
        { text: '数据库', link: '/数据库/' },
        { text: '操作系统', link: '/操作系统/' },
        {
            text: '其它',
            ariaLabel: 'others',
            items: [
              { text: 'Android', link: '/Android' },
              { text: 'hadoop', link: '/hadoop/' },
              { text: '面经', link: '/面经/' },
              { text: '运维开发', link: '/运维开发/' }
            ]
        }
      ],
      sidebar: {
        '/Java/': [
          '',    
          '设计模式', 
          'Java面试题1',
          'Java面试题2',
          'Java面试题3',
          'JVM',
          'NIO',
          'Spring',
        ],
        '/算法/': [
            '',  
            '常见算法', 
            '算法面试题',
            'Tree相关',
          ],
        '/数据库/': [
            '',    
            'MySQL面试题', 
            'Redis面试题'
        ],
        '/计算机网络/': [
          '',    
          '计算机网络面试题', 
        ],        
        '/操作系统/': [
          '',    
          '操作系统面试题',
          'Linux命令',
       ],
       '/hadoop/': [
        '',  
        '大数据面试题', 
        'Hadoop面试题' 
        ],
        '/运维开发/': [
          '',  
          'Docker使用', 
          '负载均衡',
          '运维开发面试题'
          ],
        '/': [
          '',    
          '/Java/',
          '/数据库/',
          '/操作系统/',
          '/hadoop/',
          '复习资料', 
          '求职准备' 
        ]
      },
      lastUpdated: 'Last Updated', // string | boolean
    }
  }