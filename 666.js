var num = 10;
var str = "sm|al|l";
var str1 = "world";
console.log(num);
// 在控制台输出
alert("我是弹出框");
// 弹出框
document.write("显示");
// 显示在页面中
document.write(str.length);
document.write(str.charAt(2));
// charAt(num)用于输出字符串中索引为num的字符
var str4 = str.concat(str1);
// a.concat(b,c,d,e,f,.....)按顺序连接字符串a,b,c,d,e,f,.....
var str2 = str.substring(0,1);
// a.substring(num1,num2)用于取出字符串中索引从num1到num2的所有字符
var str3 = str.indexOf("s",0)
// a.indexOf(b,num)用于从索引为num的字符开始搜索b字符（字符串）返回字符索引
var str5 = str.trim()
// a.trim()用于删除字符串两端的空格，制表符，回车符等等
var str6 = str.trimEnd()
// a.trimEnd()(a.trimStart())用于删除字符串后方（前方）的空格等
var str7 = str.split("|",2)
// a.split(b,num)用于分割字符串b是分割规则，num是返回数组最大元素个数
