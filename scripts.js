//String Object Variable
/*
var toDo = ["Dust","Vacuum","Dishes","Laundry"];
   document.write("<ul class='list-group'>");
   for (var i = 0; i < toDo.length; i++){
}
document.write("<li class= 'list-group-item'>" + toDo[i] + '</li>');
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
    
  try{
    compList(toDo[i]);
    }
    catch(error){
        alert("There was an error:" + error);
    } 
  
    }
    
document.write('<li class= "list-group-item">' + toDo[i].name + '</li>');
document.write('</ul>');


function compList(list){
     if (typeof list.name == "null") {
    throw 'WARNING!!!';
    }
   
}
*/
//jquery CRUD


function printRule(rule) {
    if (typeof rule.complete == 'undefined') {
        throw ('"The complete status is missing for" + toDo[i].task + "."');
    }
    if (rule.complete === true) {
        return ('<li class = "list-group-item success">' + rule.description + '</li>');
    } else {
        return ('<li class = "list-group-item">' + rule.description + '</li>');


}

function removeCompleted() {
    $('.success').remove();
}

}



$(document).ready(function() {

    var toDo = [{
        description: 'Dust the house.',
        dueDate: 'Tuesday',
        'complete': true
    },
                {
        description: 'Vacuum upstair and downstairs.',
        dueDate: 'Wednesday',
        'complete': false
    },
                {
        description: 'Wash the dishes.',
        dueDate: 'Thursday',
        'complete': true
    },
                {
        description: 'Do the laundry.',
        dueDate: 'Friday',
        'complete': false
    }];
    var chores = '<ul class="list-group">';
    for (var i = 0; i < toDo.length; i++) {
        //        $('<li class= "list-group-item">').append(toDo[i] + '</li>');
        try {
            chores += printRule(toDo[i]);
        } catch (error) {
            console.log("There was an error:" + error);
        }
    }
    chores += '</ul>';
        console.log(chores);
    $('.container-inner').append(chores);

 



/*
Assignment: To-Do List #5 - Event Listening
Due: November 13, 2013
The final iteration of the to-do list will handle user events such as clicks, double-clicks, keypresses, and form submissions. 
You’ll use jQuery to bind event listeners to DOM elements in an unobtrusive manner.  
 
 
Listen for double-clicks to mark a task complete 
(hint - should modify the HTML of the task AND it should also modify the underlying object in your task array.)
 
Bind your new “Add Task” function from last week to a form with fields where users can fill out a name and hit “submit.”
docs.google.com/document/d/15uvKXpM7xIw72_g203pe0X-R5D6VwKtcZNB-73GskyI/edit?usp=sharing


bootstrap add text field and submit button
*/
   
    $('#submitTaskForm').on('submit', function(event) {
        event.preventDefault();
        var submitTask = $(this).find('input').val();
        addTask(submitTask);
        console.log(submitTask);

    });


//write .on submit remove text from input field
  


//Object constructor function for new chores
//constructor function

function Task(description) {
    //set var obj
    var obj = {};
    obj.description = description;
    obj.complete = false;
//    var dueDate = new dueDate();
//    dueDate.setDate(dueDate.getDate() + 7);
//    obj.dueDate = dueDate;
    return obj;
}

function addTask(description) {
    var newTask = new Task(description);
    toDo.push(newTask);
    var $li = printRule(newTask);
    $('ul.list-group').append($li);
}

function markComplete($description){
    $description.addclass('success');
    
        if($description.text().indexof(toDo[i]) < -1){
        toDo[i].complete = true;
            }
    }
 //  markComplete 
    $('ul.list-group').on('dblclick', 'li', function(){
        markComplete($(this));

});

//close document ready function
});








