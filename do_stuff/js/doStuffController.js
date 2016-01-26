(function () {
  "use strict";
  doStuff.controller('doStuffController', [function() {
    this.toDoList = [];
    this.tab = 1;

    this.newTask = function() {
      this.toDoList.push({desc: this.newTaskDesc, isCompleted: false});
      this.newTaskDesc = null;
    };

    this.completeTask = function(task) {
      var index = this.toDoList.indexOf(task);
      this.toDoList[index].isCompleted = true;
    };

    this.deleteAllTasks = function(task) {
      this.toDoList = [];
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
  
    // Not used, but keeping this here as it may be useful in future.
    this.deleteTask = function(task) {
      var index = this.toDoList.indexOf(task);
      this.toDoList.splice(index, 1);
    };
  }]);
}());