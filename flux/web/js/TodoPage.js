var React = require('react');

var DeleteItemBtn = React.createClass({
    deleteItem: function (e) {
        // Passing order of task
        this.props.clicked(this.props.order);
    },
    render: function () {
        return (<button className="itemDelete" data-order={this.props.order}  onClick={this.deleteItem} >X</button> );
    }
});

var CheckItem = React.createClass({
    getInitialState: function() {
        return {item: this.props.item, itemIdx: this.props.order };
    },

    modifyItem: function (e) {
        // Passing order of task
        this.props.clicked(this.props.order, !this.props.item.done);
    },
    render: function () {
        return (<input className="itemCheck" type="checkbox" checked={this.props.item.done}  onChange={this.modifyItem}  />);
    }
});

var TodoList = React.createClass({
    handleDeleteItem: function(idx){
        //console.log('handleDeleteItem: '+idx);

        this.props.items.splice(idx, 1)
        this.setState(this.state);
        return;
    },
    handleModifyItem: function(idx, isDone){
        //console.log('handleDeleteItem: '+idx);
        this.props.items[idx]['done'] = isDone
        this.setState(this.state);
        return;
    },
    render: function() {
        var handleDeleteItem = this.handleDeleteItem;
        var handleModifyItem = this.handleModifyItem;
        var createItem = function(item, idx) {
            return (
                <li>
                    <CheckItem clicked={handleModifyItem} order={idx} item={item}  />
                    <span className="itemLabel" >{item.text}</span>
                    <DeleteItemBtn clicked={handleDeleteItem}  order={idx} item={item}  />
                </li>
            );
        };
        return (
            <div>
                <div class="itemsCompletedCounter" >items completed: {this.props.items.filter(function(el){ return el.done }).length}</div>
                <ul>{this.props.items.map(createItem)}</ul>
            </div>
        );
    }
});

var TodoPage = React.createClass({
    getInitialState: function() {
        return {items: [{ 'text' : 'dog', 'done': true}, { 'text' : 'cat', 'done': false}], text: ''};
    },
    onChange: function(e) {
        this.setState({text: e.target.value});
    },
    handleSubmit: function(e) {
        e.preventDefault();
        //var nextItems = this.state.items.concat([this.state.text]);
        if(!this.state.text)
            return;
        var nextItems = this.state.items.concat([{'text': this.state.text, 'done' : false}]);
        var nextText = '';
        this.setState({items: nextItems, text: nextText});
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