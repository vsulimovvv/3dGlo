const popup = () => {

  const popup = document.querySelector('.popup'), // popup
    popupContent = document.querySelector('.popup-content'), //popup-content
    popupBtns = document.querySelectorAll('.popup-btn'),
    // popupInput = popup.querySelectorAll('input');
    form3Name = document.querySelector('#form3-name'),
    form3Phone = document.querySelector('#form3-phone'),
    form3Email = document.querySelector('#form3-email');

  const openPopup = () => {

    popup.style.display = 'block'; // показываем попап
    

    if (document.documentElement.clientWidth > 768) { // проверяем ширину браузера
      const start = Date.now(); // записать в переменную время старта анимации
      let timer = setInterval(() => {
        let timePassed = Date.now() - start; // сколько прошло времени

        if (timePassed >= 800) { // если прошедшее время >= 800, то остановить анимацию
          clearInterval(timer);
          return;
        }
        draw(timePassed);
      });

      let draw = timePassed => {
        let hContent = getComputedStyle(popupContent).height.split('px')[0];
        hContent = -hContent / 2 + 'px';
        popupContent.style.top = timePassed / 16 + '%';
        popupContent.style.marginTop = hContent;
      }
    }
  }
  popupBtns.forEach(item => {
    item.addEventListener('click', openPopup);

  });
  popup.addEventListener('click', (event) => {
    let target = event.target;

    if (target.classList.contains('popup-close')) {
      popup.style.display = "none";
      form3Name.value = '';
      form3Phone.value = '';
      form3Email.value = '';

    } else {
      target = target.closest('.popup-content');

      if (!target) {
        popup.style.display = "none";
      }
    }
  });
};

export default popup;