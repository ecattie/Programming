
//String Object Variable

var toDo = ["Dust","Vacuum","Dishes","Laundry"];
    for (var i = 0; i < toDo.length; i++){
document.write('<li>' + toDo[i] + '</li>');
}


//Array

var toDo = {};
toDo[1] = {name: "Dust", due:"Tuesday", complete:true};
toDo[2] = {name:"Vacuum", due:"Wednesday", complete:true};
toDo[3] = {name:"Dishes", due:"Thursday", complete:true};
toDo[4] = {name:"Laundry", due:"Friday", complete:true};

for (var i = 0; i <= 3; i++){
  document.write("<li>" + name + "</li>");
}

/*
function lastElement(array) {
  if (array.length > 0)
    return array[array.length - 1];
  else
    return undefined;
}

show(lastElement([1, 2, undefined]));
*/
/*
//correct example
var myObject = {};
myObject["123"] = { "A": 123, "B": 456 };  // add 
myObject["123"] = { "C": 123, "D": 456 };  // add more elements to array in element!
myObject["124"] = { "A": 123, "B": 456 };
myObject["125"] = { "A": 123, "B": 456 };
console.log(myObject);

// 2. delete first property in array
for (property in myObject){
        delete myObject[property];
        break;
    }

// 3. show first remaining property
for (property in myObject){
        x = property;
        console.log("first remaining property is " + x );
        break;
    }
*/


/*
function trainFare(zone, roundTrip, offPeakHours) {


// get base fare from value of zone - 1 through 6
        var baseFare = zone;
        
// calculate discount if roundTrip is true (double baseFare, subtract $0.50);
        if (roundTrip == true){
            baseFare = (baseFare * 2 - .50)
        } 
// calculate another discount is offPeakHours is true (another $0.50 off.)
         if (offPeakHours == true){
            baseFare = (baseFare - .50)
         }
// return fare
    return baseFare;
}
*/