module.exports = {
    root:true,
    'extends':[
        'plugin:vue/essential',
        '@vue/standard'
    ],
    rules:{
        'generator-star-spacing':'off',
        'no-debugger':process.env.NODE_ENV === 'production'?'error':'off',
        'no-undef':'off',
        'camelcase':'off'
    },
    parseOptions:{
        parser:'babel-eslint'
    }
}