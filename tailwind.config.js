module.exports = {
    content: [
      './_drafts/**/*.html',
      './_includes/**/*.html',
      './_layouts/**/*.html',
      './_pages/**/*.html',
      './_posts/*.md',
      './*.md',
      './*.html',
    ],
    theme: {
      theme: {
        colors: {
          'Primary' : '#111',
          'Secondary' : '#ec9d36',
          'Link-Main' : '#fff',
          'Link-Hover' : '#ec9d36',
          'Link-Dropdown' : '#999',
          'Danger-Main' : 'fe3939',
          'Danger-Seconday' : '#ffabab',
          'Warning-Main': '#faa318',
          'Warning-Seconday': '#ffe6b3',
          'Success-Main': '#28c028',
          'Success-Seconday': '#b3ffb3',
          'Info-Main': '#26c0c0',
          'Info-Seconday': '#b3ffff',
          'Splat-1': '#8e0800',
          'Splat-2': '#ffa300',
        },
        extend: {},
      },
    },
    plugins: []
  }