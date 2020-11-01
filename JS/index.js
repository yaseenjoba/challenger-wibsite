
var elementID='1';
function createNewElement() {
    // First create a DIV element.
	var txtNewInputBox = document.createElement('div');

   
    // Then add the content (a new input box) of the element.
    txtNewInputBox.innerHTML = `  
      <input type='text' id='newInputBox' class='inputBox'>
      <input type="button"  class = "clearButton"  onclick="deleteElement();"/>
      <input type="checkbox" class="checkBox">

    `;
    txtNewInputBox.setAttribute('id',toString(elementID))
    elementID+='1';

    // Finally put it where it is supposed to appear.
	document.getElementById("newElementId").appendChild(txtNewInputBox);
}
function deleteElement(){
    elementID-='1';
    var element = document.getElementById(toString(elementID));
    element.remove();
    
}
