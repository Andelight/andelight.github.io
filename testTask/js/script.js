let docBtn = document.querySelector('.doc_button'),
    transBtn = document.querySelector('.transaction_button'),
    flag = false;

transBtn.addEventListener('click', () => {
  let main = document.querySelector('.main');
    main.style.display = 'none';
  
  if (flag === false) {
    emptyWindowCreating();
  }
});

docBtn.addEventListener('click', () => {
  let main = document.querySelector('.main');
  main.style.display = 'block';
});


function emptyWindowCreating () {
  flag = true;
  
  let window = document.createElement('div');
  window.innerText = "Список транзакций пуст!";

  window.classList.add('window');
  document.body.appendChild(window);
}