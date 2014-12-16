var DeleteItemBtn = React.createClass({displayName: 'DeleteItemBtn',
    deleteItem: function (e) {
        // Passing order of task
        this.props.clicked(this.props.order);
    },
    render: function () {
        return (React.createElement("button", {className: "itemDelete", 'data-order': this.props.order, onClick: this.deleteItem}, "X") );
    }
});

var CheckItem = React.createClass({displayName: 'CheckItem',
    getInitialState: function() {
        return {item: this.props.item, itemIdx: this.props.order };
    },
    modifyItem: function (e) {
        // Passing order of task
        this.props.clicked(this.props.order, !this.props.item.done);
    },
    render: function () {
        return (React.createElement("input", {className: "itemCheck", type: "checkbox", checked: this.props.item.done, onChange: this.modifyItem}));
    }
});

var TodoList = React.createClass({displayName: 'TodoList',
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
                React.createElement("li", null, 
                    React.createElement(CheckItem, {clicked: handleModifyItem, order: idx, item: item}), 
                    React.createElement("span", {className: "itemLabel"}, item.text), 
                    React.createElement(DeleteItemBtn, {clicked: handleDeleteItem, order: idx, item: item})
                )
            );
        };
        return (
            React.createElement("div", null, 
                React.createElement("div", {class: "itemsCompletedCounter"}, "items completed: ", this.props.items.filter(function(el){ return el.done }).length), 
                React.createElement("div", {class: "itemsCompletedCounter"}, "items: ", this.props.items.length), 
                React.createElement("ul", null, this.props.items.map(createItem))
            )
        );
    }
});

var TodoApp = React.createClass({displayName: 'TodoApp',
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
            React.createElement("div", null, 
                React.createElement("h3", null, "TODO"), 
                React.createElement("form", {onSubmit: this.handleSubmit}, 
                    React.createElement("input", {name: "addItemText", className: "addItemText", onChange: this.onChange, value: this.state.text}), 
                    React.createElement("button", {name: "addItemBtn", className: "addItemBtn"}, 'Add')
                ), 

                React.createElement(TodoList, {items: this.state.items})
            )
        );
    }
});

React.render(React.createElement(TodoApp, null), $('#TodoApp')[0]);





