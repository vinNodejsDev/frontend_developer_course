const firstName = 'Vitalii';
const lastName = 'Kushnir';
const age = 23;

let str;

str = "Hello, my name is " + firstName + ' ' + lastName;

str = "<ul>" +
        "<li>First name: " + firstName+" </li>" +
        "<li>Last name: " + lastName+" </li>" +
        "<li>Age: " + age+" </li>" +
      "</ul>";

// ES6
str = ` 
<ul>
    <li>First name: ${firstName}</li> 
    <li>Last name:  ${lastName}</li>
    <li>Age: ${age}</li>
    <li>Math.random: ${(Math.random()*10).toFixed(2)}</li>
    
</ul>`;

console.log(str);
document.body.innerHTML = str;