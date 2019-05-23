// https://github.com/leonardoanalista/cz-customizable/blob/master/cz-config-EXAMPLE.js
module.exports = {
  types: [
    {
      value: 'work',
      name: '💪  work:     工作正在进行中',
    },
    {
      value: 'feat',
      name: '✨  feat:     增加新功能(feature)',
    },
    {
      value: 'fix',
      name: '🐞  fix:      修复 bug',
    },
    {
      value: 'refactor',
      name: '🛠  refactor: 重构(即不是新增功能, 也不是修改bug的代码变动)',
    },
    {
      value: 'docs',
      name: '📚  docs:     更新文档',
    },
    {
      value: 'test',
      name: '🏁  test:     新增测试或更新现有测试',
    },
    {
      value: 'i18n',
      name: '🌐  i18n:     更新国际化语言文件',
    },
    {
      value: 'chore',
      name: '🗯  chore:    构建过程或者辅助工具的变动(配置文件，依赖管理等), 生产代码无变动',
    },
    {
      value: 'style',
      name: '💅  style:    调整代码风格(空格, 分号等)，不影响代码运行的更改',
    },
    {
      value: 'revert',
      name: '⏪  revert:   代码版本回退',
    },
  ],
  scopes: [],
  subjectLimit: 50,
  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
  skipQuestions: ['scope', 'breaking'],
  messages: {
    type: "选择您要提交的更改类型:",
    scope: '\n此次更改影响的范围(可选):',
    // used if allowCustomScopes is true
    customScope: '此次更改影响的范围:',
    subject: '本次 commit 简短描述，不超过50个字符:\n',
    body: '本次 commit 的详细描述(可选). 使用 "|" 进行换行:\n',
    breaking: '如果本次变动与上个版本不兼容, 请详细列出(可选):\n',
    footer: '如果当前 commit 针对某个 issue, 请列出关闭的 issue(可选). 例如: ISSUES CLOSED: #123, #245, #992:\n',
    confirmCommit: '确认提交?',
  },
};
