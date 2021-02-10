function money_round(num) {
  return Math.ceil(num * 100) / 100;
}


const x = (changeReturnedStart, changeRequiredStart, denomination, inDrawer, emptyStart) => {
  let isEmpty = emptyStart && (inDrawer[1] !== 0) ? true :false
  let changeRequired = changeRequiredStart
  let changeReturned = changeReturnedStart
  let hold
  // console.log(emptyState);
  if (inDrawer[1] <= changeRequired) {
    changeRequired = changeRequired - inDrawer[1]
    changeReturned.push(inDrawer)
    isEmpty = true
  } else {
    hold = Math.floor(changeRequired / denomination)
    changeRequired = money_round(changeRequired - money_round(denomination * hold))
    changeReturned.push([inDrawer[0], denomination * hold])
    isEmpty = false
  }
  return {changeRequired, changeReturned, empty:isEmpty}
}




function checkCashRegister(price, cash, cid) {
  let hold = {
    changeRequired : cash - price,
    changeReturned: [],
    empty: true
  }
  
  if (hold.changeRequired > 100 && cid[8][1] !== 0){
    hold = x(hold.changeReturned, hold.changeRequired, 100, cid[8], hold.empty)
  } 
  if (hold.changeRequired > 50 && cid[7][1] !== 0){
    hold = x(hold.changeReturned, hold.changeRequired, 50, cid[7], hold.empty)
  } 
  if (hold.changeRequired > 10 && cid[6][1] !== 0){
    hold = x(hold.changeReturned, hold.changeRequired, 10, cid[6], hold.empty)
  } 
  if (hold.changeRequired > 5 && cid[5][1] !== 0){
    hold = x(hold.changeReturned, hold.changeRequired, 5, cid[5], hold.empty)
  }
  if (hold.changeRequired > 1 && cid[4][1] !== 0){
    hold = x(hold.changeReturned, hold.changeRequired, 1, cid[4], hold.empty)
  }
  if (hold.changeRequired > .25 && cid[3][1] !== 0){
    hold = x(hold.changeReturned, hold.changeRequired, .25, cid[3], hold.empty)
  }
  if (hold.changeRequired > .1 && cid[2][1] !== 0){
    hold = x(hold.changeReturned, hold.changeRequired, .1, cid[2], hold.empty)
  }
  if (hold.changeRequired > .5 && cid[1][1] !== 0){
    hold = x(hold.changeReturned, hold.changeRequired, .05, cid[1], hold.empty)
  }
  if (hold.changeRequired > .01 && cid[0][1] !== 0){
    hold = x(hold.changeReturned, hold.changeRequired, .01, cid[0], hold.empty)
  }
  return hold.changeRequired
    ? {status: "INSUFFICIENT_FUNDS", change: []}
    : hold.empty === true
    ? {status: "CLOSED",change: cid}
    : {status: "OPEN", change: hold.changeReturned}
}


// checkCashRegister(90.5, 300, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 200]]);
// console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
// console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
// console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
// console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
// console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));