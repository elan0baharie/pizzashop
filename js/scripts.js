//U.I.
function guestPizza(size, ingrd, price)  {
  this.size = {sm: 8, med: 10, lg: 14},
  this.toppings = {pepperoni: 3, mushroom: 2, onion: 1, sausage: 3, bacon: 3, xtrCheese: 2, blackOlive: 2},
  this.tempCostHold = 0;
  this.finalPrice = 0;
  this.topDetect = function () {
    var selections = [];
    var topArray = document.getElementsByName('toppng-lst');
    console.log(topArray);
      for(var i = 0; i < topArray.length; i++) {
        if(topArray[i].checked) {
          selections.push(topArray[i].value);
        }
      };
      console.log(selections);
      return selections;
  }
}
//
// guestPizza.prototype.tempPrice = function (szPref, topSum) {
//   this.
// };



//B.L.

$(document).ready(function() {

  var newGuestPizza = new guestPizza();

  $("#btnSml").click(function(event) {
    event.preventDefault();
    newGuestPizza.tempCostHold =newGuestPizza.size.sm;
  });// Small Pizza Size btn

  $("#btnMed").click(function(event) {
    event.preventDefault();
    console.log(newGuestPizza.size.med);
  });// Med Pizza Size btn

  $("#btnLrg").click(function(event) {
    event.preventDefault();
    console.log(newGuestPizza.size.lg);
  });// Lg Pizza Size btn

  $("#toppng-form").submit(function(event) {
    event.preventDefault();
    newGuestPizza.topDetect();

  });



});// Doc Ready
