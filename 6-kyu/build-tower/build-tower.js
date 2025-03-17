function towerBuilder(nFloors) {
  var arr = [];
  
 
  for (var i = 1; i <= nFloors; i++) {
    var space = " ".repeat(nFloors - i);  
    var star = "*".repeat(2 * i - 1);  
    arr.push(space + star + space);    
  }
  
  return arr;
}
​