/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: Sumayyah Ahmed
      Date:   11/17/2023

      Filename: project.js
*/

const menuItems = document.getElementsByClassName("menuItem");

for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("click", function () {
    calcTotal();
  });
}

function calcTotal() {
  
  let orderTotal = 0;

  
  for (let i = 0; i < menuItems.length; i++) {
    
    if (menuItems[i].checked) {
      
      orderTotal += Number(menuItems[i].value);
    }
  }

  document.getElementById("billTotal").innerHTML = formatCurrency(orderTotal);
}

 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }
 
 try {
userID = document.getElementById("IDBox").value;
if (userID === "") throw "Missing user ID";
window.alert("Your user ID is " + userID);
} catch (err) {
window.alert("You must enter a user ID");
} finally {
window.alert("Thank You");
}
