/**
 * * 题目名称：验证回文串
 * * 题目地址：https://leetcode-cn.com/problems/valid-palindrome
 */

// * 思路：
// 如果在将所有大写字符转换为小写字符、并移除所有非字母数字字符之后，短语正着读和反着读都一样。则可以认为该短语是一个 回文串,利用双指针遍历。
// 字母和数字都属于字母数字字符。


// 给你一个字符串 s，如果它是 回文串 ，返回 true ；否则，返回 false 


// 测试用例
const isPalindrome = (s) => {
    let str = s.toLowerCase().replace(/[^0-9a-z]/g, '').trim()
    for(let f=0,l=str.length-1; f<l;f++,l--) {
        if(str[f] !==str[l]) return false
        
    }
    return true

}

let test = "race ae car"

console.time('执行用时');
console.log(isPalindrome(test));
console.timeEnd('执行用时');