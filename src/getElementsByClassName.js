// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node){
  var result = [];
  node = node || document.body;
  // check classname
  if(node.classList && node.classList.contains(className)) {
    result = result.concat(node);
  }
  // check for children & iterate thru children w/recursive call
  if(node.childNodes){
    Array.prototype.forEach.call(node.childNodes, function(childNode){
      result = result.concat(getElementsByClassName(className, childNode));
    });
  }
  return result;
};