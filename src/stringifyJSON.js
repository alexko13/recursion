// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj){
  // primitives
  var result = obj;
  if(typeof result==='string'){
    return "\""+result+"\"";
  }else if(typeof result==='number' || result===null || typeof result==='boolean' ){
    return String(result);
  }else if(typeof result===undefined){
    return;
  }
  //Arrays
  if(result.constructor===Array){
    if(result.length===0){ 
      return '[]';
    }
    result = result.reduce(function(acc, item, i) {
      if(i===result.length-1){
        return acc = acc.concat(stringifyJSON(item));
      }else{
        return acc = acc.concat(stringifyJSON(item) + ",");
      }
    }, '[');
    return result+"]";
  }

  var keys = Object.keys(result);
  if(keys.length === 0) {
    return '{}';
  }
  var ans="";
  for(var k in result){
    if(typeof result[k]==='function' || typeof result[k]==='undefined'){
      return "{}";
    } 
    var val = stringifyJSON( result[k] )
    var key = stringifyJSON( k );
    ans = ans.concat(key+ ":" + val+",");
  }
  return ans = "{" + ans.substring(0,ans.length-1) + "}";
  // your code goes here
};