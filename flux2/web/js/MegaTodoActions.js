var MegaTodoConstants = require('./MegaTodoConstants');
var MegaTodoDispatcher = require('./MegaTodoDispatcher');

var MegaTodoActions = {
    toggleComplete: function(todo) {
        var id = todo.id;
        if (todo.done) {
            MegaTodoDispatcher.handleViewAction({
                actionType: MegaTodoConstants.TODO_UNDO_COMPLETE,
                id: id
            });
        } else {
            MegaTodoDispatcher.handleViewAction({
                actionType: MegaTodoConstants.TODO_COMPLETE,
                id: id
            });
        }
    },
    createItem: function(text){
        MegaTodoDispatcher.handleViewAction({
            actionType: MegaTodoConstants.TODO_CREATE,
            text: text
        });
    },
    deleteItem: function(item){
        MegaTodoDispatcher.handleViewAction({
            actionType: MegaTodoConstants.TODO_DELETE,
            id: item.id
        });
    }
}


module.exports = MegaTodoActions;