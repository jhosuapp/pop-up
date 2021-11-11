const button = document.querySelectorAll('#button');
const modal = document.getElementById('modal');
const close = document.getElementById('close');

button.forEach( (btn) =>{
    btn.addEventListener('click', ()=>{
        modal.classList.add('active');
    })
});

close.addEventListener('click', () =>{
    modal.classList.remove('active');
})