function printArray(arr) {
  for (var key in arr) {
    print(arr[key]);
  }
}

  printArray([0,1,2,3]);  // 正常

  var a = new Array(10);
  printArray(a);  // 发生错误

  a = document.getElementsByTagName('*');
  printArray(a);  // 发生错误

  a = [0,1,2,3];
  a.buhu = 'wine';
  printArray(a);  // 发生错误

  a = new Array;
  a[3] = 3;
  printArray(a);  // 发生错误

/* not good */
function printArray(obj) {
  for (var key in obj) {
    print(obj[key]);
  }
}

/* good */
function printArray(obj) {
  for (var key in obj) {
    if (!obj.hasOwnProperty(key)) {
      return;
    }
    print(obj[key]);
  }
}

