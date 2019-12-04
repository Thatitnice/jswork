var lamp = {
    red: {
        odj : document.getElementById('red'),
        timeout : 3,
        style: ['red', 'gray', 'gray'],
        next: 'green'
    },
    yellow: {
        odj: document.getElementById('yellow'),
        timeout:2,
        style: ['gray' , 'yellow' , 'gray'],
        next: 'red'
    },
    green: {
        odj: document.getElementById('green'),
        timeout:2,
        style: ['gray' , 'gray' , 'green'],
        next: 'yellow'
    },
    changeStyle(style) {
        this.red.odj.className = style[0];
        this.yellow.odj.className = style[1];
        this.green.odj.className = style[2];
    }
};
 var count = {
     odj: document.getElementById('count'),
     change: function(num) {
         this.odj.innerHTML = (num < 10 )? ('0' + num) : num;
     }
 };
 var now = lamp.green;
 var timeout = now.timeout;
 lamp.changeStyle(now.style);
 count.change(timeout);
 setInterval(function() {
     if (--timeout <= 0) {
         now = lamp[now.next];
         timeout = now.timeout;
         lamp.changeStyle(now.style);
     }
     count.change(timeout);
 },1000);