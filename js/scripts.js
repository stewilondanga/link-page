var navigate = (function() {
	$('.dd').toggle();
	$('.dd_btn').click(function() {
		var dataName = $(this).attr('data-name');
		$('.dd').hide();
		$('.' + dataName).toggle();
	});
})();

$('#card1').hide();
let btn = document.getElementById('show');
btn.addEventListener('click',function(){
    $('#card1').show();
    btn.disabled = true;
  document.getElementById('inner').innerText= "";
});
var code = `<div class='topnav'>
<a class='active' href='#home'>Home</a>
<a href='#news'>News</a>
<a href='#contact'>Contact</a>
<a href='#about'>About</a>
</div>
---The Css File---
.topnav { overflow: hidden;}`;
document.getElementById('inner').innerText= code;

var ans = document.getElementById('givenAnswer');
var ansBtn = document.getElementById('answerBtn');
ans.innerHTML = "";
ans.placeholder = `<div class='topnav'>
<a href='#'>Given Value</a>
</div>`;
var answer = `<div class='topnav'>
<a href='#'>About Me</a>
<a href='#'>Gallery</a>
<a href='#'>Contact</a>
</div>`;

ansBtn.addEventListener('click',function(){
  if(ans.value == ''){
    alert('Enter a Value');
  }
  else{
    if(ans.value === answer){
      alert('Good Job');
    }
    else{
      alert('Write all elements and tags and classes properly');
    }
  }
});
