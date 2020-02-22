var elemHigh;

		function highlightFirst(){
      var a = document.getElementById("myList").children;
      if (elemHigh != undefined){
        elemHigh.style.color = 'black';
      };
      elemHigh = a[0]; // не пойму почему не срабатывает document.getElementById("myList").firstChild?
      elemHigh.style.color = 'red';
    };

    function highlightLast(){
      var a = document.getElementById("myList").children;
      if (elemHigh != undefined){
        elemHigh.style.color = 'black';
      };
      elemHigh = a[a.length-1];
      elemHigh.style.color = 'red';
    };

    function highlightNext(){
      var a = document.getElementById("myList").children;
      if (elemHigh != undefined){
        elemHigh.style.color = 'black';
      };
      if (elemHigh != a[a.length-1]) {
        elemHigh = elemHigh.nextElementSibling;        
      } else { elemHigh = a[0]; 
      };
      elemHigh.style.color = 'red';
    };

    function highlightPrev(){
      var a = document.getElementById("myList").children;
      if (elemHigh != undefined){
        elemHigh.style.color = 'black';
      };
      if (elemHigh != a[0]) {
        elemHigh = elemHigh.previousElementSibling;        
      } else { elemHigh = a[a.length-1]; };
      elemHigh.style.color = 'red';
    };


		function append() {
      var newItem = document.createElement("li");
      newItem.innerHTML = 'следующий пункт';
      document.getElementById("myList").appendChild(newItem);         
    };

		function remove() {
      var child = document.getElementById("myList");
      var oneChild = child.lastChild;
      child.removeChild(oneChild);         
    };

    function appendOnTop() {
      var newItem = document.createElement("li");
      newItem.innerHTML = 'предыдущий пункт';
      document.getElementById("myList").insertBefore(newItem, document.getElementById("myList").childNodes[0]);         
    };