window.mega_todo = Ember.Application.create();


//ROUTING
mega_todo.Router.map(function() {
  this.resource('todos', { path: '/' });
    this.resource('credits', { path: '/credits' });
});

mega_todo.TodosRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('todo');
  }
});


//MODELS
mega_todo.Todo = DS.Model.extend({
  text: DS.attr('string'),
  done: DS.attr('boolean')
});


//FIX DATA
mega_todo.ApplicationAdapter = DS.FixtureAdapter.extend();
mega_todo.Todo.FIXTURES = [
 {
   id: 1,
   text: 'Dynamic Todo 1',
   done: true
 },
 {
   id: 2,
   text: 'check the checklist 2',
   done: false
 }
];


//CONTROLLERS
mega_todo.TodosController = Ember.ArrayController.extend({
  actions: {
    createTodo: function() {
      // Get the todo title set by the "New Todo" text field
      var title = this.get('newItemText');
      if (!title.trim()) { return; }

      // Create the new Todo model
      var todo = this.store.createRecord('todo', {
        text: title,
        done: false
      });

      // Clear the "New Todo" text field
      this.set('newItemText', '');

      // Save the new model
      todo.save();
    }
  },
    getCompletedItems: function(){
        return this.filterBy('done', true).get('length')
    }.property('@each.done')

});


mega_todo.TodoController = Ember.ObjectController.extend({
  actions:{
    removeTodo: function () {
      var todo = this.get('model');
      todo.deleteRecord();
      todo.save();
    }
  },

  isCompleted: function(key, value){
    var model = this.get('model');

    if (value === undefined) {
      // property being used as a getter
      return model.get('done');
    } else {
      // property being used as a setter
      model.set('done', value);
      model.save();
      return !value;
    }
  }.property('model.done')
});



