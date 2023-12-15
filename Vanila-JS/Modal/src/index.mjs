import "./styles.css";

const buttonEle = document.querySelector('.modalBtn');


function closeModal(modal){
  const content = modal.querySelector('.modal-content');
  console.log('moL',content);
  content.style.display="none";
  modal.classList.remove('overlayEffect');
}
function openModal(){
  const modal = document.querySelector('.modalContainer');
  const content = document.querySelector('.modal-content');
  console.log('moL',content);
  const closeBtn = document.querySelector('.modal-close');
  closeBtn.addEventListener('click',()=>closeModal(modal));
  modal.addEventListener('click',(event)=>{
    if(event.target!==modal) return;
    closeModal(modal);
  });
  modal.classList.add('overlayEffect');
  content.style.display="block";
  console.log('modal:',modal);
}


function handleOpenModal(e){
  console.log('ee:',e);
  openModal();
  
}


buttonEle.addEventListener('click',handleOpenModal);
console.log('button:',buttonEle); 