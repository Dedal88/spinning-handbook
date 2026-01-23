'use strict';
// создаём переменные с описанием для каждого вида рыбы
const desShuka = document.getElementById('Щука').innerHTML;
const desSudak = document.getElementById('Судак').innerHTML;
const desOkun = document.getElementById('Окунь').innerHTML;
const desZhereh = document.getElementById('Жерех').innerHTML;

// устанавливаем минимально возмужную дату для выбора
// текущей датой, чтобы не было возможности выбора даты из прошлого
let now = new Date();
let dat = document.getElementById('dat');
dat.min = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;

// создаём объект fishes, содержащий виды рыб с описанием и др. св-ми
const fishes = {
  Щука: {
    descrip: desShuka, // описание рыбы
    months: {
      // календарь клёва рыбы
      1: 'слабый клёв, пассивное поведение.',
      2: 'клёв.',
      3: 'жор, рыба активна.',
      4: 'жор, рыба активна.',
      5: 'жор, рыба активна.',
      6: 'клёв.',
      7: 'слабый клёв, значительно хуже клюют крупные особи.',
      8: 'клёв.',
      9: 'клёв.',
      10: 'жор, что рыба активна и уходит на глубину.',
      11: 'жор, что рыба активна и уходит на глубину.',
      12: 'слабый клёв, пассивное поведение.',
    },
    regLov: {
      // водоёмы, в которых эта рыба водится по регионам
      'В Ивановской области':
        'Уводьское водохранилище, р. Уводь, Горьковское водохранилище, р. Волга, оз. Ламское, оз. Западное, оз. Заборье, оз. Поныхарь, пруды Тейковсого района, р. Теза, р. Клязьма, оз. Юрцино.',
      'В Ярославской области':
        'Рыбинское водохранилище, р. Волга, оз. Искробольское, оз. Плещеево, р.Соть, р. Которосль, оз. Неро, р. Мимошня, Угличское водохранилище.',
    },
  },
  Судак: {
    descrip: desSudak, // описание рыбы
    months: {
      // календарь клёва рыбы
      1: 'слабый клёв.',
      2: 'слабый клёв, который улучшается во время оттепели или снегопада.',
      3: 'слабый клёв, который улучшается во время оттепели или снегопада.',
      4: 'клёв.',
      5: 'клёв.',
      6: 'жор, рыба активна.',
      7: 'слабый клёв, значительно хуже клюют крупные особи.',
      8: 'жор, что рыба активна и клёв усиливается с приходом прохлады.',
      9: 'жор, что рыба активна и перемещается на более глубокие места.',
      10: 'жор, что рыба активна и перемещается на более глубокие места.',
      11: 'слабый клёв, пассивное поведение.',
      12: 'слабый клёв, пассивное поведение.',
    },
    regLov: {
      // водоёмы, в которых эта рыба водится
      'В Ивановской области':
        'Уводьское водохранилище, р. Уводь, Горьковское водохранилище, р. Волга, р. Теза, оз. Заборье.',
      'В Ярославской области':
        'Рыбинское водохранилище, р. Волга, р.Соть, оз. Неро, р. Мимошня, Угличское водохранилище.',
    },
  },
  Окунь: {
    descrip: desOkun, // описание рыбы
    months: {
      // календарь клёва рыбы
      1: 'слабый клёв, пассивное поведение.',
      2: 'слабый клёв, пассивное поведение.',
      3: 'жор, рыба активна.',
      4: 'клёв.',
      5: 'клёв.',
      6: 'клёв.',
      7: 'клёв.',
      8: 'жор, рыба активна.',
      9: 'жор, рыба активна.',
      10: 'клёв.',
      11: 'слабый клёв, пассивное поведение.',
      12: 'клёв.',
    },
    regLov: {
      // водоёмы, в которых эта рыба водится
      'В Ивановской области':
        'Уводьское водохранилище, р. Уводь, Горьковское водохранилище, р. Волга, оз. Ламское, оз. Западное, оз. Поныхарь, пруды Тейковсого района, р. Теза, р. Клязьма.',
      'В Ярославской области':
        'Рыбинское водохранилище, р. Волга, оз. Искробольское, оз. Плещеево, р.Соть, р. Которосль, оз. Неро, р. Мимошня, Угличское водохранилище.',
    },
  },
  Жерех: {
    descrip: desZhereh, // описание рыбы
    months: {
      // календарь клёва рыбы
      1: 'что клёв отсутствует.',
      2: 'что клёв отсутствует.',
      3: 'что клёв отсутствует.',
      4: 'клёв.',
      5: 'жор, рыба активна.',
      6: 'клёв.',
      7: 'клёв.',
      8: 'жор, рыба активна.',
      9: 'клёв.',
      10: 'слабый клёв.',
      11: 'слабый клёв, пассивное поведение.',
      12: 'что клёв отсутствует.',
    },
    regLov: {
      // водоёмы, в которых эта рыба водится
      'В Ивановской области':
        'Уводьское водохранилище, р. Уводь, Горьковское водохранилище, р. Волга, оз. Заборье, р. Теза, р. Клязьма.',
      'В Ярославской области':
        'Рыбинское водохранилище, р. Волга, р.Соть, р. Которосль, оз. Неро, р. Мимошня, Угличское водохранилище.',
    },
  },
};

// создаём функцию, которая будет отрабатывать при нажатии на копку "Получения информации"
// и выводить информацию в соответствии с заполненными полями и выбранными значениями
function getInform() {
  // получаем элементы содержание которых будем менять
  const inform = document.getElementById('information');
  const nameFish = document.getElementById('name');
  const picFish = document.getElementById('pic');
  const desFish = document.getElementById('descripFish');
  const desKlev = document.getElementById('desKlev');
  const infKlev = document.getElementById('infKlev');
  const desRegLov = document.getElementById('desRegLov');
  const infRegLov = document.getElementById('infRegLov');
  // получаем элементы select, чтобы далее получить
  // текущее выбранное значение
  const fish = document.getElementById('fishes');
  const regLovSel = document.getElementById('regLov');
  // реализуем логику работы нашей функции
  for (let item in fishes) {
    const selReg = regLovSel.options[regLovSel.selectedIndex].value;
    if (item === fish.options[fish.selectedIndex].value) {
      inform.innerHTML = fishes[item].descrip;
      nameFish.innerHTML = `"${item}"`;
      picFish.src = `Images/${item}.jpg`;
      desFish.hidden = false;
      if (dat.value != '') {
        const numMonth = dat.valueAsDate.getMonth() + 1;
        const klev = fishes[item].months[numMonth];
        desKlev.innerHTML = 'Информация о клёве рыбы';
        infKlev.innerHTML = `На выбранную дату по календарю клёва ожидается: ${klev} `;
      } else {
        desKlev.innerHTML = '';
        infKlev.innerHTML = '';
      }
      if (selReg != '') {
        desRegLov.innerHTML = 'Наличие рыбы в водоёмах выбранного региона';
        infRegLov.innerHTML =
          selReg +
          ' ' +
          item.toLocaleLowerCase() +
          ' водится в следующих водоёмах: ' +
          fishes[item].regLov[selReg];
      } else {
        desRegLov.innerHTML = '';
        infRegLov.innerHTML = '';
      }
    }
  }
}

// получаем элемент кнопки и назначаем для него событие щелчка мыши
const but = document.getElementById('but');
but.onclick = getInform;

// sider bar menu

function sidebarMenu() {
  const hamburger = document.querySelector('.hamburger');
  const sidebarMenu = document.querySelector('.sidebar-menu');
  const sidebarCloseBtn = document.querySelector('.sidebar-menu__close-btn');
  const sidebarOverlay = document.querySelector('.sidebar-menu__overlay');
  const sidebarLinks = document.querySelectorAll('.sidebar-menu__link');

  function openSidebarMenu() {
    sidebarMenu.classList.add('sidebar-menu_open');
    document.body.style.overflow = 'hidden';
  }

  function closeSidebarMenu() {
    sidebarMenu.classList.remove('sidebar-menu_open');
    document.body.style.overflow = 'auto';
  }

  hamburger.addEventListener('click', openSidebarMenu);
  sidebarCloseBtn.addEventListener('click', closeSidebarMenu);
  sidebarOverlay.addEventListener('click', closeSidebarMenu);

  sidebarLinks.forEach((link) => {
    link.addEventListener('click', closeSidebarMenu);
  });

  swipeSidebar(closeSidebarMenu, sidebarOverlay, sidebarMenu);
}

function swipeSidebar(closeSidebar, sidebarOverlay, sidebarMenu) {
  let touchStartX = 0;
  let touchEndX = 0;
  const swipeThreshold = 50;

  function handleTouchStart(e) {
    touchStartX = e.changedTouches[0].screenX;
  }

  function handleTouchEnd(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }

  function handleSwipe() {
    const swipeDistance = touchEndX - touchStartX;

    if (
      swipeDistance > swipeThreshold &&
      sidebarMenu.classList.contains('sidebar-menu_open')
    ) {
      closeSidebar();
    }
  }

  sidebarOverlay.addEventListener('touchstart', handleTouchStart, {
    passive: true,
  });
  sidebarOverlay.addEventListener('touchend', handleTouchEnd, {
    passive: true,
  });

  const sidebarContent = document.querySelector('.sidebar-menu__content');
  sidebarContent.addEventListener('touchstart', handleTouchStart, {
    passive: true,
  });
  sidebarContent.addEventListener('touchend', handleTouchEnd, {
    passive: true,
  });
}

sidebarMenu();
