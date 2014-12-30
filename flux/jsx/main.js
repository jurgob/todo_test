require.config({
    baseUrl: "./",
    paths: {
        'jquery': 'http://code.jquery.com/jquery-1.11.1.min.js',
        'html_shiv': '//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.min.js',
        'html_shiv_printshiv':'//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv-printshiv.min.js',
        'es5_sham': 'http://cdnjs.cloudflare.com/ajax/libs/es5-shim/4.0.5/es5-shim.min.js',
        'react': 'https://cdnjs.cloudflare.com/ajax/libs/react/0.12.1/react-with-addons.min.js',
        'jsx_transformer': 'https://cdnjs.cloudflare.com/ajax/libs/react/0.12.1/JSXTransformer.js',
        'flux': 'bower_components/flux/dist/Flux.js',
        'react_router': 'bower_components/react-router/dist/react-router.min.js'
    },
    shim: {
        'react':{
            deps: ['jquery','html_shiv','html_shiv_printshiv', 'es5_sham'  ],
            exports: 'React'
        },
        'flux': ['react'],
        'react_router': ['react']
    },
    deps: ['jsx/mega_todo']
});

