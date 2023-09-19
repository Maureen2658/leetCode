/**
 * * 题目名称：最长公共前缀
 * * 题目地址：https://leetcode-cn.com/problems/longest-common-prefix
 */
// 题目

// 14. 最长公共前缀
// 简单
// 编写一个函数来查找字符串数组中的最长公共前缀。

// 如果不存在公共前缀，返回空字符串 ""。

 

// 示例 1：

// 输入：strs = ["flower","flow","flight"]
// 输出："fl"
// 示例 2：

// 输入：strs = ["dog","racecar","car"]
// 输出：""
// 解释：输入不存在公共前缀。
 

// 提示：

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] 仅由小写英文字母组成
// * 思路：
// 声明一个变量装公告前缀，一个变量装数组第一项，会是一个字符串
// 遍历这个字符，用every遍历所有数组的对应字符串遍历的选项，判断是否每一项都对应，是前缀每次加等于她，不是立即结束循环，不然会出现所有共同拥有的字符串比如['car', 'cir'] 得到‘cr

const isValid = (str) => {
    let prefix = ''
    let pre = str[0]
    for(i=0;i<=pre.length-1;i++) {
        // console.log(pre[i]);
       if(str.every((m,j) => m[i] === pre[i])){
        prefix+=pre[i]
       } else {
        console.log('这里结束');
        return prefix
       }
    }
    console.log(prefix);
    return prefix

}



// 测试用例
let test =  ['car', 'cir']

console.time('执行用时');
console.log(isValid(test));
console.timeEnd('执行用时');