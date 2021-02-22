const counters = document.querySelectorAll('.counter')
const speed = 400;


counters.forEach(counter =>{
  const updateCount = () =>{
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const inc = target / speed;

    if(count < target){
      counter.innerText = Math.ceil(count + inc);
      setTimeout(updateCount, 4);
    }else{
      count.innerText = target
    }
  }

  updateCount();
})

