function keyboard() {
    document.getElementById('letters').style.opacity = '0'; 
}

function keyboardBack() {
    document.getElementById('letters').style.opacity = '1';
}
const hide = document.getElementById('close');
hide.addEventListener('click', keyboard, false);

const reveal = document.getElementById('open');
reveal.addEventListener('click', keyboardBack, false);

const timer = document.getElementById('stopwatch');


var sec = 60;
var stoptime = true;

function startTimer() {
  if (stoptime == true) {
        stoptime = false;
        timerCycle();
    }
}
function stopTimer() {
  if (stoptime == false) {
    stoptime = true;
  }
}

function timerCycle() {
    if (stoptime == false) {
    sec = parseInt(sec);
    

    sec = sec - 1;

    if (sec == 0) {

    resetTimer();
    }
    
    timer.innerHTML = sec;

    setTimeout("timerCycle()", 1000);
  }
}

function resetTimer() {
    timer.innerHTML = '60';
    stoptime = true;
    
    sec = 60;
  
}



/*const deleteExtra = document.querySelectorAll('.box').forEach(extra => {
  extra.addEventListener('dblclick', e => {
   console.log('you clicking bastard');
   extra.removeChild();
  })
})*/

const removeTile = document.querySelectorAll('.tile').forEach(removeMe => {
  removeMe.addEventListener('contextmenu', e => {
    e.preventDefault();
    removeMe.remove();
    console.log('deleted!')
    
  })
})
function drag(ev) {
  /* Here is specified what should be dragged. */
  /* This data will be dropped at the place where the mouse button is released */
  /* Here, we want to drag the element itself, so we set it's ID. */
  ev.dataTransfer.setData("text/html", ev.target.id);

}

function allowDrop(ev) {
    /* The default handling is to not allow dropping elements. */
    /* Here we allow it by preventing the default behaviour. */
    ev.preventDefault();
  }
  

  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text/html");
    /* If you use DOM manipulation functions, their default behaviour it not to 
       copy but to alter and move elements. By appending a ".cloneNode(true)", 
       you will not move the original element, but create a copy. */
    var nodeCopy = document.getElementById(data).cloneNode(true);
    nodeCopy.classList = "newId"; /* We cannot use the same ID */
    ev.target.appendChild(nodeCopy);
    nodeCopy.onclick = function(e) {this.parentNode.removeChild(this)}
    
    //nodeCopy.addEventListener('dblclick', removeMePlease);
    
    
  /*  function removeMePlease() {
      var buhBye = document.getElementById('newId');
      buhBye.parentNode.removeChild(buhBye);
      console.log('did it!')
    }
    */
  
    
  }
    ev.preventDefault(); {
    /* In the drag event, we set the *variable* (it is not a variable name but a 
       format, please check the reference!) "text/html", now we read it out */
    var data=ev.dataTransfer.getData("text/html");
    /* As we put the ID of the source element into this variable, we can now use 
       this ID to manipulate the dragged element as we wish. */
    /* Let's just move it through the DOM and append it here */
    ev.target.appendChild(document.getElementById(data));
  }


