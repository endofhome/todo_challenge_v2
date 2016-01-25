doStuff.controller('doStuffController', [function() {
  this.toDoList = [
    {
      name: 'Build ToDo app',
      isCompleted: false
    },
    {
      name: 'Hang out washing',
      isCompleted: false
    },
    {
      name: 'more stuff...',
      isCompleted: false
  }];

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