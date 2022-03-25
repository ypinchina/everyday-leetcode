// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/solution/by-ypinchina-70rc/
// 解题思路
// 一开始想的时候是使用暴力破解，代码如下


// function maxProfit(prices: number[]): number {
//     let max = 0
//     for (let i = prices.length - 1; i >= 0; i--) {
//         for (let j = i - 1; j >= 0; j--) {
//             let profit = prices[i] - prices[j]
//             max = Math.max(max, profit)
//         }
//     }
//     return max
// };
// 但是走到205个实例的时候寄了， n^2的时间复杂度终究才是太高了。被现实殴打。
// 所以还是使用贪心算法吧。这道题不像是简单的题目，如果是简单题，
// 暴力算法应该是给过得。应为动态规划和谈心算法的思路也不一定很容易想出来。

// 贪心算法其实也是暴力解法的一种，但是转变一下思路，就可以节省很多性能
// 维护一个最小买入的变量，维护一个最大收益的变量 ，单词循环遍历即可得出结果

// 代码

function maxProfit(prices: number[]): number {
    let max = 0
    let buy = prices[0]
    for (let i of prices) {
        buy = Math.min(buy, i)
        if (i > buy) {
            max = Math.max(i - buy, max)
        }
    }
    return max
};
