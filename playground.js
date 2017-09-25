var text = "cat, bat, sat, fat";
result = text.replace(/(at)/g, "word$2");//$1表示第一个捕获组
console.log(result); 