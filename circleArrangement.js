const circle = document.getElementById('circle');

const arrange = (diameter=150, numElements=10, childSize=25) => {
  //Set height and width of the containing circle
  circle.style.width = diameter + 'px';
  circle.style.height = diameter + 'px';
  //Get the radius of the parent less the childSize
  const radius = (diameter - childSize)/2;
  //Create a spacial step that will offset the children
  //circles evenly based the the number of them
  const step = (2*Math.PI) / numElements;
  //Declare an incementable angle that will space the 
  //proceding children based on the step
  let angle = 0;
  //Loop through the input number of children elements
  for(let i = 0; i<numElements; i++) {
    //Find the x and y coordinates of their position in the circle
    //based on the diameter of the parent and the current location
    //of the angle
    const x = Math.round(radius + radius * Math.cos(angle));
    const y = Math.round(radius + radius * Math.sin(angle));
    //Create a child element and assign it the class sub-circle
    //This will apply styles that will make it circular
    const subCirc = document.createElement('div');
    subCirc.setAttribute("class", "sub-circle");
    //Append the child to the parent circle
    circle.appendChild(subCirc);
    //Set the top, left, height and width values of the child
    setChildDimensions(subCirc, y, x, childSize);
    //increment the angle based on the step
    angle += step;
  }
}

//Helper function for setting styles
const setChildDimensions = (el, top, left, dimensions) => {
    el.style.top = top + 'px';
    el.style.left = left + 'px';
    el.style.height = dimensions + 'px';
    el.style.width = dimensions + 'px';
  }
  
  arrange(150, 10, 25);