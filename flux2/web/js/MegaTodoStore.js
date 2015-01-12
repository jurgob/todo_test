var assign = require('object-assign');
var MegaTodoConstants = require('./MegaTodoConstants');
var MegaTodoDispatcher = require('./MegaTodoDispatcher');

var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';


var _generateKey = function(){
    return (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
}

var _key2Idx = function(key){
    return _items.map(function(item){return item.id}).indexOf(key)
}


var _items =[{id:_generateKey(), 'text' : 'dog', 'done': true}, { id: _generateKey(),'text' : 'cat', 'done': false}];





var MegaTodoStore =assign({}, EventEmitter.prototype, {
    getItems:function(){
        return _items;
    },
    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

MegaTodoDispatcher.register(function(payload) {
    var action = payload.action;
    switch(action.actionType) {
        case MegaTodoConstants.TODO_CREATE:
            _items.push({id:_generateKey(), text: action.text, done: false})
            break;
        case MegaTodoConstants.TODO_UNDO_COMPLETE:
            _items[_key2Idx(action.id)].done = false
            break;
        case MegaTodoConstants.TODO_COMPLETE:
            _items[_key2Idx(action.id)].done = true
            break;
        case MegaTodoConstants.TODO_DELETE:
            _items.splice(_key2Idx(action.id), 1)
            break;
        default:
            return true;
    }

    MegaTodoStore.emitChange();
    return true;
});



module.exports = MegaTodoStore;