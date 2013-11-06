
//String Object Variable
/*
var toDo = ["Dust","Vacuum","Dishes","Laundry"];
   document.write("<ul class='list-group'>");
   for (var i = 0; i < toDo.length; i++){
document.write("<li class= 'list-group-item'>" + toDo[i] + '</li>');
}
document.write("</ul>");
*/


/*
//Array

var toDo = [{'name':"Dust the house.", 'due':"Tuesday", 'complete':true},
{'name':"Vacuum upstsair and downstairs.", 'due':"Wednesday", 'complete':true},
{'name':"Wash the dishes.", 'due':"Thursday", 'complete':true},
{'name':'Do the laundry.', 'due':"Friday", 'complete':true}];

  document.write("<ul class='list-group'>");

for (var i = 0; i < toDo.length; i++){
    
  document.write('<li class= "list-group-item">' + toDo[i].name + '</li>');
  
  try{
    compList(toDo[i]);
    }
    catch(error){
        alert("There was an error:" + error);
    } 
  
    }

document.write('</ul>');


function compList(list){
     if (typeof list.name == "null") {
    throw 'WARNING!!!';
    }
   
}
*/


//jquery CRUD

function printRule(rule){
    if (typeof rule.complete == 'undefined'){
        throw('"The complete status is missing for" + toDo[i].task + "."');
    }

    if (rule.complete === true) {
        return ('<li class = "list-group-item">' + 'Done' + '</li>');
    
    } else { 
        return ('<li class = "list-group-item">' + rule.task + rule.task + '</li>');
        }
}

$(document).ready(function() { 
    var toDo = 
        [{task:'Dust the house.', due:'Tuesday', 'complete':true},
        {task:'Vacuum upstair and downstairs.', due:'Wednesday', 'complete':false},
        {task:'Wash the dishes.', due:'Thursday', 'complete':true},
        {task:'Do the laundry.', due:'Friday', 'complete':false}];

var chores = '<ul class="list-group">';

    for (var i = 0; i < toDo.length; i++) {
//        $('<li class= "list-group-item">').append(toDo[i] + '</li>');

  
      try{
        chores += printRule(toDo[i]);
        }
        catch(error) {
            console.log("There was an error:" + error);
        } 
  
    }

chores += '</ul>';

console.log(chores);

$('.container').append(chores);

});


//Object constructor function for new chores


function AnotherToDo () {
    this.anotherTask = task;
    this.anotherDue = due;
    this.anotherComplete = complete;
}

       var task = new task ('Make an appointment for the car.'); 
        
        var due = new Date();
        due.setFullYear(2013,13,13);
        
        var complete = new complete (false);
    
        var AnotherToDo = new AddToDo ('another');
        

function AddToDo (){
            return(AnotherToDo());
        }

 //       var addTask = new task ();







