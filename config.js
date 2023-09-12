 window.$docsify = {
  name: 'DLS - BDS在线管理工具',
  repo: 'https://github.com/Snowxkh/DlSweb-v2',
  loadNavbar: true,
  loadSidebar: true,
  subMaxLevel: 3,
  coverpage: true,
    search: {
    paths: 'auto',
    placeholder: '搜索',
    noData: '找不到结果',
    depth: 3,
  },
  
  themeable: {
          readyTransition : true, // default
          responsiveTables: true  // default
  },

  plugins: [
    function(hook) {
      var footer = [
        '<hr/>',
        '<footer>',
        '<span><a href="https://github.com/Snowxkh">StarTech org.</a> &copy;2023.</span>',
        '<span>Proudly published with <a href="https://github.com/docsifyjs/docsify" target="_blank">docsify</a>.</span>',
        '</footer>'
      ].join('');

      hook.afterEach(function(html) {
        return html + footer;
      });
    }
  ]
};
