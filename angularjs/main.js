require.config({
    baseUrl: "./",
    paths: {
        'jquery': 'http://code.jquery.com/jquery-1.11.1.min',
        'angular':'http://ajax.googleapis.com/ajax/libs/angularjs/1.2.16/angular',
        'angular-route': 'http://ajax.googleapis.com/ajax/libs/angularjs/1.2.16/angular-route.min',
        'angularAMD': 'bower_components/angularAMD/angularAMD.min'
    },
    shim: { 'angularAMD': ['angular'], 'angular-route': ['angular'], 'angular': ['jquery']  },
    deps: ['mega_todo']
});





