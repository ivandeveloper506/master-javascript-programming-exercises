function addProperty(obj, key) {
  // your code here

    obj.myProperty = key;
}

var myObj = {};
addProperty(myObj,'myProperty');
console.log(myObj.myProperty);