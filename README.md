# MovableElements

The 'moveElements.js' script allows any element with the class name 'movable', the ability to be moved anywhere in the body by dragging it to a desired location. 'moveElements.js' is located in the js folder.

**Note:** If one intends to add elements dynamically to the document, they would have to call the makeMovable() function afterwards so that the event listeners and their respective functions (that make moving elements possible) are added to those newly added elements. 

========================

* Other Important Notes *

- If there's a transform on the movable element, on first 
drag it will glitch to that transform value's position. In short, ensure
translate transformations are not present on the element's styles, which 
includes other classes that are added to that same element.

- The element must be positioned absolutely for seamless, non-glitching
movement. It may glitch with relative positioning, so ensure that at least 
the last class that the element has in its classList has its position
property set to absolute.

- I have not tested if other types of transforms (e.g rotation, scale) affect 
the smoothness of the movement, so you can test it out yourself if it is a must
for your project. Otherwise, for me I just set the entire transform property to
none to avoid any issues like those so far mentioned.
