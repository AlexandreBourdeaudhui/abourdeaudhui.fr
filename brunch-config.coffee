exports.config =
  files:
    stylesheets:
      joinTo: 'css/app.css'
      order:
        before: 'app/styles/index.scss'

    javascripts:
      joinTo: 'js/app.js'

  paths:
    watched: ['app', 'vendor']

  plugins:
    uglify:
      compress:
        drop_console: true
        drop_debugger: true

    postcss:
      processors: [
        require('autoprefixer')
      ]

    sass:
      mode: 'ruby'

  modules:
    autoRequire:
      'js/app.js': ['src/index']
