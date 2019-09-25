window.addEventListener('DOMContentLoaded', function() {
  let docBtn = document.querySelector('.doc_button'),
    transBtn = document.querySelector('.transaction_button'),
    flag = false;

  transBtn.addEventListener('click', () => {
    let main = document.querySelector('.main');
    main.style.display = 'none';
    transBtn.style.borderBottom = "3px solid #87d4f0";
    docBtn.style.borderBottom = 'none';
    
    if (flag === false) {
      emptyWindowCreating();
    }
  });

  let windowCl = document.createElement('div');

  docBtn.addEventListener('click', () => {
    let main = document.querySelector('.main');
    main.style.display = 'block';
    docBtn.style.borderBottom = "3px solid #87d4f0";
    transBtn.style.borderBottom = 'none';

    if (windowCl != null) windowCl.remove();
    flag = false;
  });


  function emptyWindowCreating () {
    flag = true;
    windowCl.innerText = "Список транзакций пуст!";

    windowCl.classList.add('window');
    document.body.appendChild(windowCl);
  }
})
