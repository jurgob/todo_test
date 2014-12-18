require.config({
    baseUrl: "./",
    paths: {
        'jquery': 'http://code.jquery.com/jquery-1.11.1.min',
        'handlebars':'http://builds.handlebarsjs.com.s3.amazonaws.com/handlebars-v1.3.0',
        'ember': 'http://builds.emberjs.com/tags/v1.8.1/ember',
        'ember_data': 'http://builds.emberjs.com/tags/v1.0.0-beta.11/ember-data'
    },
    shim: {
        'ember_data': ['ember'],
        'ember': {
            deps: ['jquery','handlebars' ],
            exports: 'Ember'
        }
    },
    deps: ['mega_todo']
});


