var React = require('react');
var MegaTodoStore = require('./MegaTodoStore');
var MegaTodoActions = require('./MegaTodoActions');
//var EventEmitter = require('events').EventEmitter;

var DeleteItemBtn = React.createClass({
    deleteItem: function (e) {
        // Passing order of task
        this.props.clicked(this.props.item);
    },
    render: function () {
        return (<button className="itemDelete" data-order={this.props.order}  onClick={this.deleteItem} >X</button> );
    }
});

var CheckItem = React.createClass({
    getInitialState: function() {
        return {item: this.props.item };
    },
    modifyItem: function (e) {
        // Passing order of task
        this.props.clicked(this.props.item);
    },
    render: function () {
        return (<input className="itemCheck" type="checkbox" checked={this.props.item.done}  onChange={this.modifyItem}  />);
    }
});

var TodoList = React.createClass({
    handleDeleteItem: function(item){
        MegaTodoActions.deleteItem(item);
        return;
    },
    handleModifyItem: function(item){
        MegaTodoActions.toggleComplete(item)
        return;
    },
    render: function() {
        var handleDeleteItem = this.handleDeleteItem;
        var handleModifyItem = this.handleModifyItem;
        var _items = this.props.items;
        var createItem = function(item, idx) {
            return (
                <li key={item.id}  >
                    <CheckItem clicked={handleModifyItem} item={item}   />
                    <span className="itemLabel" >{item.text}</span>
                    <DeleteItemBtn clicked={handleDeleteItem}  item={item}  />
                </li>
            );
        };
        return (
            <div>
                <div class="itemsCompletedCounter" >items completed: {_items.filter(function(el){ return el.done }).length}</div>
                <ul>{this.props.items.map(createItem)}</ul>
            </div>
        );
    }
});

var TodoPage = React.createClass({
    getInitialState: function() {
        return {items: MegaTodoStore.getItems(), text: ''};
    },
    componentDidMount: function() {
        MegaTodoStore.addChangeListener(this._onChange);
    },
    _onChange: function() {
        this.setState({items: MegaTodoStore.getItems()});
    },
    onChange: function(e) {
        this.setState({text: e.target.value});
    },
    handleSubmit: function(e) {
        e.preventDefault();
        if(!this.state.text)
            return;

        this.setState({text: nextText});
        MegaTodoActions.createItem(this.state.text);
        var nextText = '';

    },
    render: function() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input name="addItemText" className="addItemText" onChange={this.onChange} value={this.state.text} />
                    <button name="addItemBtn" className="addItemBtn"  >{'Add'}</button>
                </form>

                <TodoList items={this.state.items}   />
            </div>
        );
    }
});

module.exports = TodoPage;