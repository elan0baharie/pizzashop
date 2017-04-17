//U.I.


function guestPizza(size, price)  {
  this.size = {sm: 8, med: 10, lg: 14},
  this.tempCostHold = 0;
  this.finalPrice = 0;
  this.topList = [];
  this.pepperoni = {name: "Pepperoni", price: 3},
  this.mushroom = {name: "Mushroom", price: 2},
  this.onion = {name: "Onion", price: 1},
  this.sausage = {name: "Sausage", price: 3},
  this.bacon = {name: "Bacon", price: 3},
  this.xtrCz = {name: "Extra Cheese", price: 2},
  this.blkOlv = {name: "Black Olives", price: 2}
}

guestPizza.prototype.sizeCalc = function (size) {
  this.tempCostHold = 0;
  console.log(size);
  if(size === " ") {
    this.tempCostHold = 0;
    console.log("exit");
    return;
  } else if (size === "small") {
    this.tempCostHold = this.tempCostHold + this.size.sm;
    console.log(this.tempCostHold);
  } else if (size === "med") {
    this.tempCostHold = this.tempCostHold + this.size.med;
    console.log(this.tempCostHold);
  } else if (size === "lrg") {
    this.tempCostHold = this.tempCostHold + this.size.lg;
    console.log(this.tempCostHold);
  }
}

guestPizza.prototype.topTst = function () {
  var val = [];
  $(':checkbox:checked').each(function(i){
    val[i] = $(this).val();
    this.topList = val;
  });
  return val;
}


guestPizza.prototype.topCalc = function () {
  console.log(this.topList);
  var ary = this.topList;
  var pepTest = ary.includes("Pepperoni");
  var mshTest = ary.includes("Mushroom");
  var onTest = ary.includes("Onion");
  var ssgTest = ary.includes("Sausage");
  var bcnTest = ary.includes("Bacon");
  var xczTest = ary.includes("Extra Cheese");
  var olvTest = ary.includes("Black Olives");
  if (pepTest === true) {
    console.log("Pep");
    this.tempCostHold = this.tempCostHold + this.pepperoni.price;
    ary.shift();
    this.topCalc();
  } else if (mshTest === true) {
    console.log("Mush");
    this.tempCostHold = this.tempCostHold + this.mushroom.price;
    ary.shift();
    this.topCalc();
  } else if (onTest === true) {
    console.log("Onyon");
    this.tempCostHold = this.tempCostHold + this.onion.price;
    ary.shift();
    this.topCalc();
  } else if (ssgTest === true) {
    console.log("Saus");
    this.tempCostHold = this.tempCostHold + this.sausage.price;
    ary.shift();
    this.topCalc();
  } else if (bcnTest === true) {
    console.log("Bacooo");
    this.tempCostHold = this.tempCostHold + this.bacon.price;
    ary.shift();
    this.topCalc();
  } else if (xczTest === true) {
    console.log("X Cz");
    this.tempCostHold = this.tempCostHold + this.xtrCz.price;
    ary.shift();
    this.topCalc();
  } else if (olvTest === true) {
    console.log("Olvs");
    this.tempCostHold = this.tempCostHold + this.blkOlv.price;
    ary.shift();
    this.topCalc();
  } else {
    console.log(this.tempCostHold);
    return;
  }

}


//B.L.

$(document).ready(function() {

    var newGuestPizza = new guestPizza();

  $("#start").click(function (event) {
    event.preventDefault();



    $("select#pzSize").on('change', function () {
        var valueSelected = this.value;
        newGuestPizza.sizeCalc(valueSelected);
        console.log(valueSelected);
    });

    $("#cnfrm").click(function (event) {
      event.preventDefault();
      newGuestPizza.topList = newGuestPizza.topTst();
      console.log(newGuestPizza.topList);
      newGuestPizza.topCalc();
      // $("div.orderPnlBg").hide(1000);
    });



    $("div.rt-btns-sec").show(1000);
    $("div.cent-sec").show(1000);
    $("div.lft-btns-sec").hide(500);
  });



  $("#cancel").click(function (event) {
    event.preventDefault();
      $("div.lft-btns-sec").show(1000);
      $("div.rt-btns-sec").hide(500);
      $("div.cent-sec").hide(500);
  });



  $("button.button-spacing").click(function(event) {
    event.preventDefault();
    $(this).toggleClass('active');
  });


  $("#toppng-form").submit(function(event) {
    event.preventDefault();
    newGuestPizza.createPrice();
    $("#priceSect").show(800);
    $("#costBox").text("$" + newGuestPizza.finalPrice);



  });

});// Doc Ready
