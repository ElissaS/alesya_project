// навигация для бургера
const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.head-menu__toggle');

// контейнер описание стран
const tabContainer = document.querySelector('.tabs-countries');
// массив тайтлов стран
const tabTitleList = document.querySelector('.tabs-countries__list');
const tabsTitles = Array.from(tabTitleList.children);

// массив контента каждой страны
const contentOfTabs = Array.from(document.querySelectorAll('.tabs-countries__content'));

const travelLinkContainer = document.querySelector('.travel-list');
const travelLinks = Array.from(document.querySelectorAll('.travel-list__link'));
const priceBuyLinks = Array.from(document.querySelectorAll('.price-card__link'));

const tabBuyLinks = Array.from(document.querySelectorAll('.tab__link'));

//модалка форма сбора контактов
const modalBuyFormContainer = document.querySelector('.modal-form');
const modalBuyForm = document.querySelector('.modal-form__form');
const modalBuyCloseButtonForm = document.querySelector('.modal-form__close-button');

//модалка "спасибо" после отправки контактов
const modalThanks = document.querySelector('.modal-thanks');
const modalThanksCloseButton = document.querySelector('.modal-thanks__close-button');

//форма сбора контактов на странице
const formSendContact = document.querySelector('.form');
const formSendButton = document.querySelector('.form__button');


// активирование меню
navMain.classList.remove('main-nav--nojs');
navMain.classList.add('main-nav--closed');

// скрывает блоки в табах стран, если js работает
tabContainer.classList.remove('tabs-countries--nojs');


function hideTabsContent(a) {
  for (let i = a; i < contentOfTabs.length; i++) {
    contentOfTabs[i].classList.remove('show-content');
    contentOfTabs[i].classList.remove('is-active');
    contentOfTabs[i].classList.add("hide-content");
    contentOfTabs[i].classList.remove('is-active');
    tabsTitles[i].classList.remove("is-active");
  }
}

function showTabsContent(b) {
  if (contentOfTabs[b].classList.contains('hide-content')) {
    hideTabsContent(0);
    contentOfTabs[b].classList.remove('hide-content');
    contentOfTabs[b].classList.add('show-content');
    contentOfTabs[b].classList.add('is-active');
    tabsTitles[b].classList.add("is-active");
  }
}

// в блоке tabs-countries при нажатии на тайтл страны делает тайтл is-active, делайт контент этой же страны is-active
// в блоке travel-list при нажатии на тайтл страны переносится в блок tabs-countries по якорю, делает тайтл is-active,
//  делайт контент этой же страны is-active
function switchTitleAndContent() {
  tabContainer.onclick = function (evt) {
    let target = evt.target;
    if (target.className == 'tabs-countries__tab') {
      for (let i = 0; i < tabsTitles.length; i++) {
        if (target == tabsTitles[i]) {
          showTabsContent(i);

          break;
        }
      }
    }
  }
  // document.addEventListener((evt) => {
  //   if (evt.target.classList.contains('tabs-countries__tab')) {
  //     tabsTitles[i].onclick = function (evt) {
  //     for (let i = 0; i < tabsTitles.length; i++) {
  //       if (target == tabsTitles[i]) {
  //         showTabsContent(i);

  //         break;
  //       }
  //     }
  //   }
  // }

  travelLinkContainer.onclick = function (evt) {
    let target = evt.target;
    if (target.className == 'travel-list__link') {
      for (let i = 0; i < tabsTitles.length; i++) {
        if (target == travelLinks[i]) {
          showTabsContent(i);

          break;
        }
      }
    }
  }
}
switchTitleAndContent();


// показывает модальное окно
const showBuyModal = function (linksArray, modalContainer) {
  linksArray.forEach((priceBuyLink) => {
    priceBuyLink.addEventListener('click', function (evt) {
      evt.preventDefault();
      modalContainer.classList.remove("modal-form--hidden");
    });
  })
}
showBuyModal(priceBuyLinks, modalBuyFormContainer);
showBuyModal(tabBuyLinks, modalBuyFormContainer);


// показывает модальное окно "спасибо"
const showThanksModal = function (evt) {
  evt.preventDefault();
  modalThanks.classList.remove("modal-thanks--hidden");
}


const closeModal = function (closeButton, modalContainer) {
  closeButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalContainer.classList.add("modal-form--hidden");
  });

  closeButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalContainer.classList.add("modal-form--hidden");
  });

  //TODO: не работает закрытие по фону
  if (modalContainer !== null) {
    modalContainer.onclick = function (evt) {
      if (evt.target === modalContainer) {
        modalContainer.classList.add("modal-form--hidden");
      }
    }
    document.addEventListener("keydown", function (evt) {
      if (evt.key === "Escape") {
        modalContainer.classList.add("modal-form--hidden");
      }
    })
  }
}
closeModal(modalBuyCloseButtonForm, modalBuyFormContainer);
closeModal(modalThanksCloseButton, modalThanks);

formSendButton.addEventListener('submit', showThanksModal());

// function showThanksModal() {
// if (modalBuyFormContainer !== null) {
//   modalBuyForm.onsubmit = function (evt) {
//     evt.preventDefault();
//     modalBuyFormContainer.classList.add("modal-form--hidden");
//     modalThanks.classList.remove("modal-thanks--hidden");
//   }
// }
// formSendContact.onsubmit = function (evt) {
//   evt.preventDefault();
//   modalThanks.classList.remove("modal-thanks--hidden");
// }
// }
// showThanksModal();
