# **JS中排序算法**

- Bubble sort
- Selection sort
- Insertion sort
- Merge sort
- Quicksort
- Shellsort

# 算法优劣术语

### **稳定性**
- 稳定：如果a原本在b前面，而a=b，排序之后a仍然在b的前面 
- 不稳定：如果a原本在b的前面，而a=b，排序之后a可能会出现在b的后面

### **排序方法**
- 内排序：所有排序操作都在内存中完成 
- 外排序（External sorting）：由于数据太大，因此把数据放在磁盘中，而排序通过磁盘和内存的数据传输才能进行

## 复杂度（Complexity）

分为时间复杂度和空间复杂度，一般使用`Big-O`来表示复杂程度。

### **时间复杂度（Time Complexity）**
- 时间复杂度: 一个算法执行所耗费的时间。
    - 平均时间复杂度（average：The average-case complexity: when the data looks average）
    - 最好情况下的时间复杂度（best：The best-case complexity: when the data looks the best）
    - 最坏情况下的时间复杂度（worst：The worst-case complexity: when the data looks the worst）

### **空间复杂度（Space Complexity）**
- 空间复杂度: 运行完一个程序所需内存的大小。


**10种算法的比较图**
![10种算法](images/ArraySort.png)
![复杂度](images/big-o-complexity.png)

![中文版](images/tenSorts.png)

图片名词解释： n: 数据规模 k:“桶”的个数 

In-place: 占用常数内存，不占用额外内存 Out-place: 占用额外内存

[What is a plain English explanation of “Big O” notation?](https://stackoverflow.com/questions/487258/what-is-a-plain-english-explanation-of-big-o-notation)

[The big O notation: The complexity is usually expressed with the Big O notation.](https://stackoverflow.com/questions/487258/what-is-a-plain-english-explanation-of-big-o-notation)

[Big-O CheatSheet](http://bigocheatsheet.com/)

# 如何学习算法

### 第一阶段

先不要看这两本书（算法 和 算法导论这两本）。因为这样效率很低。

你应该先死记硬背一些基本算法：插入、冒泡、快速和归并排序；二分查找。

了解一些常用数据结构如链表，二叉树，排序二叉树，哈希表。这些信息都可以通过互联网获得。

### 第二阶段

你死记硬背完成后就开始刷题，建议上[leetcode](https://leetcode.com)，做“容易”难度的题目。

完成之后开始了解**动态规划**(一种让程序有记忆的暴力方法)。


然后再做“中等”难度的题目。

做题过程中实在没想出解法应该立刻上网找答案，不要浪费时间，想不出来不代表你笨，只是因为你没掌握工具。然后记下答案，过几天再做这道题。

---

找到工作以后的再去想这些


### 第三阶段

大概过去3个月，就可以看书了，从比较薄的那本（算法第四版）看起。

Coursera上出了一系列算法视频教程，把一个算法以动画的形式展现出来，非常适合新手。课程名字就叫Algorithm，普林斯顿大学的，分为Part 1和Part 2。

看视频一边看一边做笔记，看完一个单元跟着把代码写一遍。看完整个教程之后把所有算法都默写一遍，忘记的算法复习一遍。就酱。

以面试为目的，我用的“cracking the coding interview”，题目是按照array, stack&queue, 链表，树图，递归这种章节安排的，每章节题目7-8个，不多，难度中等，找感觉很有帮助。

第一遍自己写不出来的话（我就是，这么弱！），画图分析，抄背默。一遍做完再做一遍，第二遍就快很多，理解也深刻了，所谓读书百遍，其意自现，算法也一样。



		
