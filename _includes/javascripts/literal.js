// Length is 3.
var a1 = new Array(x1, x2, x3);

// Length is 2.
var a2 = new Array(x1, x2);

// 如果 x1 是一个数字且是自然数，length 将是 x1
// 如果 x1 是一个数字且但不是自然数，将抛出错误
// 否则，数组将有一个元素以 x1 作为其值。
var a3 = new Array(x1);

// Length is 0.
var a4 = new Array();

/* good */
var a = [x1, x2, x3];
var a2 = [x1, x2];
var a3 = [x1];
var a4 = [];

/* not good */
var o = new Object();

var o2 = new Object();
o2.a = 0;
o2.b = 1;
o2.c = 2;
o2['strange key'] = 3;

/* good */
var o = {};

var o2 = {
  a: 0,
  b: 1,
  c: 2,
  'strange key': 3
};
