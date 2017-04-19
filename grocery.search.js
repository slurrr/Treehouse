//Searches an inventory of groceries after prompting user

var inStock = [ 'apples', 'eggs', 'milk', 'cookies', 'cheese', 'bread', 'lettuce', 'carrot', 'broccoli', 'pizza', 'potato', 'crackers', 'onion', 'tofu', 'frozen dinner', 'cucumber'];
var search;

function print(message) {
  document.write('<p>' + message + '</p>');
}

function printList(list) {
      var listHTML = "<ul>";
      for ( var i=0; i<list.length; i++) {
        listHTML += "<li>" + list[i] + "</li>";
      }
      listHTML += "</ul>"
      print(listHTML); 
}

search = prompt("Search the store to see what we have in stock. Type 'list' for all available items and 'quit' to exit.").toLowerCase();

while (true) {
  if (search === 'quit') {
    break;
  } else if (search === 'list') {
    printList(inStock);
    break;
  } else if (inStock.indexOf(search) > -1) {
    print("Yes, we have " + search + " in stock.");
    break;
  } else {
    print("Sorry we are out of " + search);
    break;
  }
}
