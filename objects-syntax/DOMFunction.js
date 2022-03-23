

var newDiv = document.createElement('div');
newDiv.className = 'divSection';
newDiv.setAttribute('title', 'Hello Div');
var newDivText = document.createTextNode(`I can count!Look`);

for (i = 1; i <= 5; i++) {
    newDivText = document.createTextNode(`I can count! Look ${i}`);
    newDiv.textContent = (`I can count! Look ${i}`);
    console.log(newDiv.textContent);
}
newDiv.style.backgroundColor = 'gray';