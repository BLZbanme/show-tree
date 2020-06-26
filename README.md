# 用途：辅助leetcode刷题

#### 为什么要做这个网页

有两点：

第一点：leetcode刷题时写测试用例很麻烦，如下

​		[5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]表示一个二叉树

```
      5
     / \
    4   8
   /   / \
  11  13  4
 /  \      \
7    2      1
```

​		写测试用例需要写如下代码

````javascript
var a = new TreeNode(5);
var b = new TreeNode(4);
var c = new TreeNode(8);

var d = new TreeNode(11);
var e = new TreeNode(13);
var f = new TreeNode(4);

var g = new TreeNode(7);
var h = new TreeNode(2);
var i = new TreeNode(1);

a.left = b;
a.right = c;
b.left = d;
c.left = e;
c.right = f;
d.left = g;
d.right = h;
f.right = i;

console.log(hasPathSum(a, 22))
````

第二点：有时候某些测试用例报错后，我会用草稿纸画这个二叉树的形状，分析报错原因，由于草稿纸上画完全二叉树也很浪费时间，所以做了一个简单的可视化树状结构



#### 使用方法：

输入一个number数组，number数组表示一个完全二叉树

如[5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]。

    	  5
    	 / \
    	4   8
       /   / \
      11  13  4
     /  \      \
    7    2      1
- 点击"show"按钮就可以展示树的形状，以及下方会返回json格式的树的代码
- 点击"copy"按钮就能直接copy该树的json代码。

**注：**现在暂只支持深度为4以下的树展示
