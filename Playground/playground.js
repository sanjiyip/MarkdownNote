var div = document.querySelector('div');
var classNames = div.classList.toggle('user');

var btn = document.querySelector('input');
btn.addEventListener('click', function(){
    btn.classList.toggle('active');
});
var head = document.head;
console.log(head);

var charset = document.charset;
console.log(charset);

// var classNames = div.className.split(/\s+/);

// var pos = -1,
//     i,
//     len;

// for (i = 0, len=classNames.length; i < len; i++) {
//     if(classNames[i] === 'user') {
//         pos = i;
//         break;
//     }    
// }

// classNames.splice(i,1);

// div.className = classNames.join(" ");   