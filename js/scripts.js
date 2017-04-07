//U.I.
function guestPizza(size, price)  {
  this.size = {sm: 8, med: 10, lg: 14},
  this.tempCostHold = 0;
  this.finalPrice = 0;
  this.pepperoni = {name: "Pepperoni", price: 3},
  this.mushroom = {name: "Mushroom", price: 2},
  this.onion = {name: "Onion", price: 1},
  this.sausage = {name: "Sausage", price: 3},
  this.bacon = {name: "Bacon", price: 3},
  this.xtrCz = {name: "Extra Cheese", price: 2},
  this.blkOlv = {name: "Black Olives", price: 2},
  this.createPrice = function () {
    this.finalPrice = this.tempCostHold;
    return this.finalPrice;
  }
}

//B.L.

$(document).ready(function() {

  var newGuestPizza = new guestPizza();

  $("#btnSml").click(function(event) {
    event.preventDefault();
    newGuestPizza.tempCostHold = newGuestPizza.size.sm;
    console.log(newGuestPizza.tempCostHold);
  });// Small Pizza Size btn

  $("#btnMed").click(function(event) {
    event.preventDefault();
    newGuestPizza.tempCostHold = newGuestPizza.size.med;
    console.log(newGuestPizza.tempCostHold);
  });// Med Pizza Size btn

  $("#btnLrg").click(function(event) {
    event.preventDefault();
    newGuestPizza.tempCostHold = newGuestPizza.size.lg;
    console.log(newGuestPizza.tempCostHold);
  });// Lg Pizza Size btn

  $("#btnPep").click(function(event) {
    event.preventDefault();
    newGuestPizza.tempCostHold = newGuestPizza.tempCostHold + newGuestPizza.pepperoni.price;
    console.log(newGuestPizza.tempCostHold);
  });// Pepperoni btn

  $("#btnMsh").click(function(event) {
    event.preventDefault();
    newGuestPizza.tempCostHold = newGuestPizza.tempCostHold + newGuestPizza.mushroom.price;
    console.log(newGuestPizza.tempCostHold);
  });// Mushroom btn

  $("#btnOn").click(function(event) {
    event.preventDefault();
    newGuestPizza.tempCostHold = newGuestPizza.tempCostHold + newGuestPizza.onion.price;
    console.log(newGuestPizza.tempCostHold);
  });// Onion btn

  $("#btnSsg").click(function(event) {
    event.preventDefault();
    newGuestPizza.tempCostHold = newGuestPizza.tempCostHold + newGuestPizza.sausage.price;
    console.log(newGuestPizza.tempCostHold);
  });// Sausage btn

  $("#btnBcn").click(function(event) {
    event.preventDefault();
    newGuestPizza.tempCostHold = newGuestPizza.tempCostHold + newGuestPizza.bacon.price;
    console.log(newGuestPizza.tempCostHold);
  });// Bacon btn

  $("#btnCz").click(function(event) {
    event.preventDefault();
    newGuestPizza.tempCostHold = newGuestPizza.tempCostHold + newGuestPizza.xtrCz.price;
    console.log(newGuestPizza.tempCostHold);
  });// Extra Cheese btn

  $("#btnOlv").click(function(event) {
    event.preventDefault();
    newGuestPizza.tempCostHold = newGuestPizza.tempCostHold + newGuestPizza.blkOlv.price;
    console.log(newGuestPizza.tempCostHold);
  });// Black Olive btn


  $("#price-form").submit(function(event) {
    event.preventDefault();
    newGuestPizza.createPrice();
    $("#costBox").text(newGuestPizza.finalPrice);



  });

});// Doc Ready
