/**
 * * 题目名称：有效的括号
 * * 题目地址：https://leetcode-cn.com/problems/valid-parentheses
 */
// 题目
// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 每个右括号都有一个对应的相同类型的左括号。
 

// 示例 1：

// 输入：s = "()"
// 输出：true
// 示例 2：

// 输入：s = "()[]{}"
// 输出：true
// 示例 3：

// 输入：s = "(]"
// 输出：false
 

// 提示：

// 1 <= s.length <= 104
// s 仅由括号 '()[]{}' 组成

// * 思路：
// 声明一个对象，key是左边的括号，value是右边的括号，
// 声明一个空数组，遍历字符串，判断当前的字符串是不是对象的key是push到数组，不是就判断数组最后一个等于不等于该值，不等于说明不是以正确顺序闭合返回false
// 遍历结束判断数组长度，如果是0返回true，有长度返回false
function isValid1(str) {
    if(str.length<=1) return false
    const strObj = {'(':')','[':']', '{': '}','a':'b'}
    const strList = []
    for(i=0;i<=str.length-1;i++) {
        let val = str[i]
        if(strObj[val]) {
            strList.push(val)
        } else {
            if (!(strObj[strList.pop()]=== val)) {
                return false
            }
            
        }
    }
    console.log(strList.length, 'list');
    return !strList.length
}

// 解法二
const isValid2 = function(s) {
    s=s.replace('()','').replace('[]','').replace('{}','')
    console.log(s);
    return !s.length
  };



// 测试用例
let test = '测试'

console.time('执行用时');
console.log(isValid2('(])[{}'));
console.timeEnd('执行用时');