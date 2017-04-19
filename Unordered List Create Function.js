//Prints an array into an unordered list (HTML)

function printList(list) {
      var listHTML = "<ul>";
      for ( var i=0; i<list.length; i++) {
        listHTML += "<li>" + inStock[i] + "</li>";
      }
      listHTML += "</ul>"
      print(listHTML); 
}
