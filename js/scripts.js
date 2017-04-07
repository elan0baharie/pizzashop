//U.I.
function guestPizza(size, price)  {
  this.size = {sm: 8, med: 10, lg: 14},
  this.tempCostHold = 0;
  this.finalPrice = 0;
  this.topDetect = function () {

    var topArray = document.getElementsByName('toppng-lst');
      for(var i = 0; i < topArray.length; i++) {
        if(topArray[i].checked) {
          console.log(parseInt(topArray[i].value));
          this.tempCostHold = this.tempCostHold + parseInt(topArray[i].value);
        }
      };
      return this.tempCostHold;
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

  $("#toppng-form").submit(function(event) {
    event.preventDefault();
    newGuestPizza.finalPrice = newGuestPizza.topDetect();
    return newGuestPizza.finalPrice;
  });

  $("#price-form").submit(function(event) {
    event.preventDefault();
    $("#costBox").text(newGuestPizza.finalPrice);



  });

});// Doc Ready
