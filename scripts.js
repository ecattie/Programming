
//String Object Variable
/*
var toDo = ["Dust","Vacuum","Dishes","Laundry"];
   document.write("<ul class='list-group'>");
   for (var i = 0; i < toDo.length; i++){
document.write("<li class= 'list-group-item'>" + toDo[i] + '</li>');
}
document.write("</ul>");
*/



//Array

var toDo = [{name:"Dust the house.", due:"Tuesday", 'complete':true},
{name:"Vacuum upstsair and downstairs.", due:"Wednesday", 'complete':true},
{name:"Wash the dishes.", due:"Thursday", 'complete':true},
{name:'Do the laundry.', due:"Friday", 'complete':true}];

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



