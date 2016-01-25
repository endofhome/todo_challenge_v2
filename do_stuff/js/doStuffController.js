doStuff.controller('doStuffController', [function() {
  this.toDoList = [];

  this.newTask = function() {
    this.toDoList.push({description: this.newTaskDescription, isCompleted: false});
    this.newTaskDescription = null;
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