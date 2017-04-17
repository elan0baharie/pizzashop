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
  this.blkOlv = {name: "Black Olives", price: 2},
  this.createPrice = function () {
    this.finalPrice = this.tempCostHold;
    return this.finalPrice;
  }
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
    console.log(val);
    this.topList = val;
    console.log(this.topList);
  });
}

//
// guestPizza.prototype.topCalc = function () {
//   console.log(this);
//   console.log(selections);
//   $("input:checkbox[name=tp-grp]:checked").each(function(){
//     selections.push($(this).val());
//     console.log(newGuestPizza.selections);
//   });
  //
  // var toppingsLst = document.getElementsByName('tp-grp');
  // for (var i = 0; i <= toppingsLst.length ; i++) {
  //   selections.splice(hope);
  //   console.log(selections.value);
  // }
  // if(selections.includes("Pepperoni") === true) {
  //   console.log("exit");
  //   return;
  // } else if (selections.includes("Mushroom") === true) {
  //   console.log("exit");
  //   return;
  // } else if (selections.includes("Onion") === true) {
  //   console.log("exit");
  //   return;
  // } else if (selections.includes("Sausage") === true) {
  //   console.log("exit");
  //   return;
  // }
// }


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

    $("input:checkbox[name=tp-grp]").on('change', function () {
      newGuestPizza.topCalc();
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

  $("#cnfrm").click(function (event) {
    event.preventDefault();
    newGuestPizza.topTst();

    // $("div.orderPnlBg").hide(1000);
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
