
/*to calculate the length*/
var uno = document.getElementsByTagName('li');
var cnt = document.getElementById('countt');
var len = uno.length;
cnt.textContent = len.toString();
console.log(uno.length);

/*to add close at the end*/
var nodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < nodelist.length; i++) {
  var span = document.createElement("span");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  nodelist[i].appendChild(span);
}

/*to close the list*/
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

/*to check the task*/
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
  if(len>0)
  {
    len = len-1;
    cnt.textContent = len.toString();
  }
}, false);

/*to add new list*/
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myinput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("write something!!");
  }
  else{
    document.getElementById("unordered").appendChild(li);
  }
  document.getElementById("myinput").value = "";
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  len=len+1;
  li.appendChild(span);
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
  cnt.textContent = (len).toString();
}

