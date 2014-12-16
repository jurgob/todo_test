var DeleteItemBtn = React.createClass({
    deleteItem: function (e) {
        // Passing order of task
        this.props.clicked(this.props.order);
    },
    render: function () {
        return (<button className="itemDelete" data-order={this.props.order}  onClick={this.deleteItem} >X</button> );
    }
});

var TodoList = React.createClass({
    handleDeleteItem: function(idx){
        //console.log('handleDeleteItem: '+idx);
        this.props.items.splice(idx, 1)
        this.setState(this.state);
        return;
    },
    render: function() {
        var handleDeleteItem = this.handleDeleteItem
        var createItem = function(item, idx) {
            return (
                <li>
                    <input className="itemCheck" type="checkbox" />
                    <span className="itemLabel" >{item.text}</span>
                    <DeleteItemBtn clicked={handleDeleteItem}  order={idx} item={item}  />
                </li>
            );
        };
        return <ul>{this.props.items.map(createItem)}</ul>;
    }
});

var TodoApp = React.createClass({
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
                <h3>TODO</h3>

                <form onSubmit={this.handleSubmit}>
                    <input name="addItemText" className="addItemText" onChange={this.onChange} value={this.state.text} />
                    <button name="addItemBtn" className="addItemBtn"  >{'Add'}</button>
                </form>
                <TodoList items={this.state.items}   />
            </div>
        );
    }
});

React.render(<TodoApp />, $('#TodoApp')[0]);