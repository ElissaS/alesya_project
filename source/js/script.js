const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.head-menu__toggle');

// убрала __container
const tabContainer = document.querySelector('.tabs-countries');
const tabTitleList = document.querySelector('.tabs-countries__list');
const tabsTitles = Array.from(tabTitleList.children);
const contentOfTabs = Array.from(document.querySelectorAll('.tabs-countries__content'));
console.log(tabContainer);


// активирование меню
navMain.classList.remove('main-nav--nojs');
navMain.classList.add('main-nav--closed');

// убрала __container
tabContainer.classList.remove('tabs-countries--nojs');


function hideTabsContent(a) {
  for (let i = a; i < contentOfTabs.length; i++) {
    console.log('hide');
    contentOfTabs[i].classList.remove('show-content');
    contentOfTabs[i].classList.remove('is-active');
    contentOfTabs[i].classList.add("hide-content");
    contentOfTabs[i].classList.remove('is-active');
    tabsTitles[i].classList.remove("is-active");
    console.log('hide-tab');
  }
}

function showTabsContent(b) {
  console.log('show');
  if (contentOfTabs[b].classList.contains('hide-content')) {
    console.log('show if');
    hideTabsContent(0);
    contentOfTabs[b].classList.remove('hide-content');
    contentOfTabs[b].classList.add('show-content');
    contentOfTabs[b].classList.add('is-active');
    tabsTitles[b].classList.add("is-active");
  }
}

tabContainer.onclick = function (evt) {
  let target = evt.target;
  if (target.className == 'tabs-countries__tab') {
  console.log(target);
    for (let i = 0; i < tabsTitles.length; i++) {
      if (target == tabsTitles[i]) {
        showTabsContent(i);

        console.log(i);
        break;
      }
    }
  }
}


