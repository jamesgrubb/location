module.exports = {
  covertToCss : {
    options : {
        style: 'expanded',
        lineNumbers: true
    },
    files : [{

        expand: true,
        cwd : 'scss',
        src : ['*.scss'],
        dest : 'css',
        ext: '.css'
            
        }]
  }
}