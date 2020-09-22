
/*to calculate the length*/
var uno = document.getElementsByTagName('li');
var cnt = document.getElementById('countt');
var len = uno.length;
var cek = false;
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
  close[i].onclick = function(e) {
    e.stopPropagation();
    var div = this.parentElement;
    if(!div.classList.contains('checked')){
      len = len - 1;
    }
    div.style.display = "none";
    cnt.textContent = len.toString();
  }
}

/*to check the task*/
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
  if(len>0 && ev.target.classList.contains('checked'))
  {
    len = len-1;
    cnt.textContent = len.toString();
  }
  else if(!ev.target.classList.contains('checked'))
  {
    len = len+1;
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
    close[i].onclick = function(e) {
      e.stopPropagation();
      var div = this.parentElement;
      if(!div.classList.contains('checked')){
        len = len - 1;
      }
      div.style.display = "none";
      cnt.textContent = len.toString();
    }
  }
  cnt.textContent = (len).toString();
}



