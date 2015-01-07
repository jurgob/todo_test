var React = require('react');

var TodoPage= require('./TodoPage');
var CreditsPage= require('./CreditsPage');

var TodoApp = React.createClass({
    render: function () {
        return (
            <div>
                <RouteHandler/>
            </div>
        );
    }
});


//var Router = window.ReactRouter
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var RouteHandler= Router.RouteHandler;
var Link = Router.DefaultRoute;

var routes = (
    <Route name='TodoApp'  handler={TodoApp} path="/">
        <Route name="credits"   handler={CreditsPage} />
        <DefaultRoute handler={TodoPage} />
    </Route>
);

Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.getElementById('TodoApp'));
});




