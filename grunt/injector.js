module.exports = {
  injectingCSSandJS : {
    options : {
        template : 'index.html',
     addRootSlash : false,
     relative: true,
    }, 
    local_dependencies : {
        'index.html' , ['css/*.css' , 'js/*.js' , 'bower.json']
    }
  }
}