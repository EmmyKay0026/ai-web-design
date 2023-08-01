const cursor = document.getElementById('cursor');
const cursorStyle = cursor.style;
const btns=document.getElementsByClassName("btn");
const blacken=document.getElementsByClassName("blacken");


    document.addEventListener('mousemove', e => {
    window.requestAnimationFrame(() => {
    cursorStyle.top = `${ e.clientY - cursor.offsetHeight/2 }px`;
    cursorStyle.left = `${ e.clientX - cursor.offsetWidth/2 }px`;
  });
});
	
	
	let btn= Array.from(btns);
	btn.forEach(but => {
		but.addEventListener('mouseenter', function() {
			cursor.classList.add('focus');
		})
		but.addEventListener('mouseleave', function() {
		  cursor.classList.remove('focus');
		})
	});
  
	
  let blackens= Array.from(blacken);
  blackens.forEach(blacke => { 
	  blacke.addEventListener('mouseenter', function() {
		  cursor.classList.add('cursor-black');
	  })
	  blacke.addEventListener('mouseleave', function() {
		  cursor.classList.remove('cursor-black');
	  })
	});