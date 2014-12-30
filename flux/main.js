require.config({
    baseUrl: "./",
    paths: {
        'jquery': 'http://code.jquery.com/jquery-1.11.1.min',
        'html_shiv': 'http://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.min',
        'html_shiv_printshiv':'http://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv-printshiv.min',
        'es5_sham': 'http://cdnjs.cloudflare.com/ajax/libs/es5-shim/4.0.5/es5-shim.min',
        'react': 'http://cdnjs.cloudflare.com/ajax/libs/react/0.12.1/react-with-addons.min',
        'jsx_transformer': 'http://cdnjs.cloudflare.com/ajax/libs/react/0.12.1/JSXTransformer',
        'flux': 'bower_components/flux/dist/Flux',
        'react_router': 'bower_components/react-router/dist/react-router.min',
        'react_router_shim':'react_router_shim'
    },
    shim: {
        'react':{
            deps: ['jquery','html_shiv','html_shiv_printshiv', 'es5_sham'  ],
            exports: 'React'
        },
        'flux': ['react'],
        'react_router_shim': {
            exports: 'React'
        },
        'react_router': {
            deps: ['react_router_shim'],
            exports: 'ReactRouter'
        }
    },
    deps: ['jsx/mega_todo']
});

