tODOer.controller('TODOerController', [function() {

  var self = this;
  var tasks = [
  ];

  self.todoList = tasks;

  self.addTask = function(newTask) {
    self.todoList.push({
      description: newTask,
      completed: false
    });
  };
}]);