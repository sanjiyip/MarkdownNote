var removeDuplicates = function(nums) {
    for(let i =0; i<nums.length; i++) {
        if(nums[i]=== nums[i+1]) {
            nums.splice(i,1);
        }
    }
    return nums.length;
};

var arr = [2,3,1,1,2,4,5,4];

removeDuplicates(arr);

var array = [9,2,5,6,5,4,3,1];

function insertionSort(array) {
    for(var i = 0; i < array.length; i++) {
        var temp = array[i];
        var j = i -1;
        while(j>=0 && array[j] > temp) {
            array[j+1] = array[j];
            j--;
        }
        array[j+1] = temp;
    }
}
insertionSort(array);