/**
 * * 题目名称：二进制求和
 * * 题目地址：https://leetcode-cn.com/problems/add-binary
 */
// 题目
// 给你两个二进制字符串 a 和 b ，以二进制字符串的形式返回它们的和。
// 示例 1：

// 输入:a = "11", b = "1"
// 输出："100"
// 示例 2：

// 输入：a = "1010", b = "1011"
// 输出："10101"
 

// 提示：

// 1 <= a.length, b.length <= 104
// a 和 b 仅由字符 '0' 或 '1' 组成
// 字符串如果不是 "0" ，就不含前导零
// * 思路：
// 给数值加上前缀0b表示二进制的前缀，表示后面的数都是二进制数也就是0,1（八进制前缀是0o， 0x是16进制的前缀，H是16进制的后缀）,通过BigInt取整后再相加，最后使用toString(2)转2进制。如果是八进制就toString(8), 16进制toString(16), 10进制就toString(10)
const addBinary = function(a, b) {
    var a = '0b' + a
    var b = '0b' +b
    var c = BigInt(a)+BigInt(b)
    console.log(BigInt(a), BigInt(b));
    return c.toString(2)
};


// 测试用例
let a = '11'
let b='1'

console.time('执行用时');
console.log(addBinary(a, b));
console.timeEnd('执行用时');