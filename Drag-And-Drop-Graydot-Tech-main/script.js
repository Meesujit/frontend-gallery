
/* These functions work together to enable the drag and drop functionality, handle the drop event, and reset the containers when needed. */

 // This variable keep track of item being draged
var draggedItem = null;

// Triggered when the drag operation starts

function drag(event) {

  // sets the draggedItem variable to the dragged item, stores the item's text content as data in the event's data transfer object
  //adds the "dragging" class to the item to provide visual feedback
  draggedItem = event.target;
  event.dataTransfer.setData("text/plain", event.target.textContent);

  event.target.classList.add("dragging");
}

//This function is triggered when an item is being dragged over a valid drop target. It prevents the default behavior of the browser, allowing the item to be dropped.
function allowDrop(event) {
  event.preventDefault();
}

// This function is triggered when an item is dropped onto a drop target. It prevents the default behavior, retrieves the data (text content) of the dropped item from the event's data transfer object
function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("text/plain");
  var droppedItemsContainer = document.getElementById("dropped-items");

  // creates a new <div> element to represent the dropped item, adds appropriate classes and content to the new item, appends it to the dropped-items container.
  var newItem = document.createElement("div");
  newItem.className = "item";
  newItem.textContent = data;
  droppedItemsContainer.appendChild(newItem);

  //removes the "dragging" class from the dragged item, and displays a success message
  draggedItem.classList.remove("dragging");
  document.getElementById("success-message").textContent = "Item dropped successfully!";
}

// the reset button is clicked. It resets the contents of both containers and clears the success message by setting their inner HTML and text content to their initial values.

function resetContainers() {
  document.getElementById("first-container").innerHTML = `
    <div class="item" draggable="true" ondragstart="drag(event)">Image</div>
    <div class="item" draggable="true" ondragstart="drag(event)">Text</div>
    <div class="item" draggable="true" ondragstart="drag(event)">Icon</div>
  `;

  document.getElementById("dropped-items").innerHTML = "";
  document.getElementById("success-message").textContent = "";
}