// .vitepress/config.js
export default {
  // 站点级选项
  lang: 'zh-CN',
  title: 'ljs-vue3',
  description: 'ljs-vue3（V3JS，基于若依分离版V3.8.5后端服务的前端框架，支持vite和rsbuild）与 ljs-tools（Vue3 前端工具库与常用组件全家桶，基于 Element Plus）的官方文档：框架手册 + 完整 API',
  outDir: '../docs-dist', // 构建产物输出目录。勿用 ../public：public/ 已是 npm 发布元文件目录，混入会被打进发布包（2026-10-22）
  srcExclude: ['public/**'], // public/ 是静态资源目录（llms.txt、ai/*.md 在此），只拷贝不渲染成页面（2026-10-23）
  base: '/ljs-vue3/',
  head: [
    ['meta', { name: "keywords", content: "ljs-vue3, 若依, ruoyi, ljs-tools, vue3工具库, 前端工具库, 工具库, element-plus, vue3组件, 国密, sm2, sm4, mqtt, websocket, 水印, html转pdf, 表单验证, 日期工具, vite搭建vue3项目, vue3, rsbuild, rspack, rsbuild搭建vue3项目, ljs-vue3文档, ljs文档, 龙九山, ljs, LJS" }],
    ['link', { rel: 'icon', href: '/ljs-vue3/favicon.ico' }]
  ],
  // 主题级选项
  themeConfig: {
    siteTitle: 'ljs-vue3 | API文档',
    logo: '/logo.png',
    aside: true,
    outline: 'deep', // 右侧锚点菜单
    search: {
      provider: 'local'
    },
    nav: [
      { text: '联系我', link: '/callMe' },
      { text: 'ljs-tools', link: 'https://www.npmjs.com/package/ljs-tools' },
      { text: '框架ljs-vue3版(V3JS)', link: 'https://github.com/LJS-Y/ljs-vue3' },
    ],
    sidebar: [
      {
        text: '简介',
        collapsible: true, // 收起图标
        collapsed: false, // 是否默认收起
        items: [
          { text: '为什么有了它？', link: '/vue3JS' },
          { text: '什么是ljs-tools？', link: '/ljs-tools' }
        ]
      },
      {
        text: '框架',
        collapsible: true, // 收起图标
        collapsed: true, // 是否默认收起
        items: [
          { 
            text: '框架描述',
            collapsible: true, // 收起图标
            collapsed: false, // 是否默认收起
            items: [
              { text: 'vite', link: '/ljs-vue/buildTools/vite/' },
              { text: 'rsbuild', link: '/ljs-vue/buildTools/rsbuild/' },
              { text: 'rsbuild-module-platform', link: '/ljs-vue/buildTools/rsbuildModule/' },
              { text: 'uniapp', link: '/ljs-vue/buildTools/uniapp/' },
              { text: 'uniapp-vue3', link: '/ljs-vue/buildTools/uniapp-vue3/' },
            ]
          },
          { 
            text: '前端手册(rsbuild)',
            collapsible: true, // 收起图标
            collapsed: false, // 是否默认收起
            items: [
              { text: '全局参数', link: '/ljs-vue/frontManual/config' },
              { text: '通用方法', link: '/ljs-vue/frontManual/function' },
              { text: '请求', link: '/ljs-vue/frontManual/request' },
              { text: '字典', link: '/ljs-vue/frontManual/dict' },
              { text: '路由', link: '/ljs-vue/frontManual/router' },
              { text: '框架组件', link: '/ljs-vue/frontManual/components' },
              { text: '权限', link: '/ljs-vue/frontManual/power' },
              { text: '生成页面', link: '/ljs-vue/frontManual/page' },
              { text: 'echarts的快速应用', link: '/ljs-vue/frontManual/echarts' },
            ]
          },
          { text: '前端运行部署', link: '/ljs-vue/runAndBuild/' },
          { text: 'Nginx配置', link: '/ljs-vue/nginxConfig/' },
        ]
      },
      {
        text: 'ljs-tools',
        collapsible: true, // 收起图标
        collapsed: false, // 是否默认收起
        items: [
          {
            text: '组件',
            collapsible: true, // 收起图标
            collapsed: false, // 是否默认收起
            items: [
              { text: 'LJSLoading', link: '/ljs-tools/components/LJSLoading/' },
              { text: '分页（Pagination）', link: '/ljs-tools/components/Pagination/' },
              { text: '右键菜单', link: '/ljs-tools/components/RightMenu/' },
              { text: '区间日期', link: '/ljs-tools/components/DateRange/' },
              { text: '类型日期', link: '/ljs-tools/components/DatetypeChooseDate/' },
              { text: '类型区间日期', link: '/ljs-tools/components/DatetypeChooseDateRange/' },
              { text: '字典回显卡', link: '/ljs-tools/components/DictTag/' },
              { text: '粒子运动', link: '/ljs-tools/components/Particles/' },
              { text: '内容缩略', link: '/ljs-tools/components/TextAbbreviation/' }
            ]
          },
          {
            text: '方法库',
            collapsible: true, // 收起图标
            collapsed: false, // 是否默认收起
            items: [
              { text: '菜单（LJSmenu）', link: '/ljs-tools/function/menu/' },
              { text: '基础（LJSbase）', link: '/ljs-tools/function/base/' },
              { text: '数字（LJSnum）', link: '/ljs-tools/function/num/' },
              { text: '日期（LJSdate）', link: '/ljs-tools/function/date/' },
              { text: '表单（LJSfc）', link: '/ljs-tools/function/form/' },
              { text: '报表数据处理（LJSecDC）', link: '/ljs-tools/function/echartsDataChange/' },
              { text: '缓存（LJSsession）', link: '/ljs-tools/function/session/' },
              { text: '加解密（LJScryptoJs）', link: '/ljs-tools/function/cryptoJs/' },
              { text: '国密（LJSsm）', link: '/ljs-tools/function/smCrypto/' },
              { text: '颜色处理（LJSrgbC）', link: '/ljs-tools/function/rgbColor/' },
              { text: 'URL检测与应用（LJSurl）', link: '/ljs-tools/function/url/' },
              { text: 'elementPlus相关（LJSEl）', link: '/ljs-tools/function/elementPlus/' },
              { text: '水印（LJSWatermark）', link: '/ljs-tools/function/watermark/' },
              { text: '脱敏（LJSprivacy）', link: '/ljs-tools/function/privacy/' }
            ]
          },
          {
            text: '全局变量',
            collapsible: true, // 收起图标
            collapsed: false, // 是否默认收起
            items: [
              { text: 'websocket（LJSws）', link: '/ljs-tools/variable/websocket/' },
              { text: 'html转pdf下载（htmlPdf）', link: '/ljs-tools/variable/htmlToPDF/' }
            ]
          },
          {
            text: '类',
            collapsible: true, // 收起图标
            collapsed: false, // 是否默认收起
            items: [
              { text: 'Mqtt', link: '/ljs-tools/class/mqtt/' }
            ]
          },
        ]
      },
    ]
  }
}