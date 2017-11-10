function bubble(arr, n) {
    // n 表示数组长度~
    for (var i = 0; i < n - 1; i++) {
        var temp;
        if (arr[i] > arr[i + 1]) {
            temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        }
    }
}

function bubbleSort_Baby(arr, n) {
    // n 为数组长度

    // 对前面 n 个数进行一次冒泡，最大值找到，放到最末尾
    bubble(arr, n);

    // 对前面 n-1 个数进行一次冒泡，第二大值找到，放到倒数第二位
    bubble(arr, n - 1);

    // 对前面 n-2 个数进行一次冒泡，...
    bubble(arr, n - 2);

    //...
    //...  不断执行冒泡这个步骤
    //...

    // 对前面 2 个数进行一次冒泡
    bubble(arr, 2);

    // 对前面 1 个数进行一次冒泡
    bubble(arr, 1);

    //返回数组
    return arr;
}

var array = [14,3,8,1,23,6];

bubbleSort_Baby(array, 6);