doStuff.controller('doStuffController', [function() {
  this.toDoList = [];

  this.newTask = function() {
    this.toDoList.push({description: this.newTaskDescription, isCompleted: false});
    this.newTaskDescription = null;
  };

  this.deleteTask = function(task) {
    var index = this.toDoList.indexOf(task);
    this.toDoList.splice(index, 1);
  };

  this.sumActive = function(){
    var active = 0;  
    this.toDoList.forEach(function(task){
      if (task.isCompleted===false) {
        active++
      }     
    });
    return active;
  };
}]);