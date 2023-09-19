/**
 * * 题目名称：最后一个单词的长度
 * * 题目地址：https://leetcode-cn.com/problems/length-of-last-word
 */

// * 思路：
// 给你一个字符串 s，由若干单词组成，单词前后用一些空格字符隔开。返回字符串中 最后一个 单词的长度。
// 单词 是指仅由字母组成、不包含任何空格字符的最大子字符串


// 测试用例
const isValid = (s) => {
    let str = s.trim().split(' ')
    return str[str.length-1].length
}
let test = "   fly me   to   the moon  "

console.time('执行用时');
console.log(isValid(test));
console.timeEnd('执行用时');