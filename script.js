function indexOfIgnoreCase(str, subStr) {
  if (str === null || subStr === null || str.length === 0 || subStr.length === 0) {
    return -1;
  }
  
  str = str.toLowerCase();
  subStr = subStr.toLowerCase();
  
  return str.indexOf(subStr);
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
