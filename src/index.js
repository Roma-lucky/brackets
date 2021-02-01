module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 === 1) {
    return  false;
  }

  let arr= [];
  bracketsConfig.forEach(element => {
    arr.push(element.join(''));
  });
  for(i=0; i<arr.length;i++) {
    if(str.includes(arr[i])) {
      str = str.replace(arr[i], '');
      i =-1;
    }

  
  }
  if(str.length === 0) {
    return true;

  }else{
    return false;
  }
}