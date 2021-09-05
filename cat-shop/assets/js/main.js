//сортировка
//база данных кошек
let catCardsDataBase = [
  {
    "id": 0,
    "cat-name": "Кот полосатый",
    "cat-price": "30 000 руб.",
    "cat-age": "3",
    "cat-color": "Коричневый окрас",
    "cat-photo": "./assets/img/cat-card-1.png",
    "cat-discount": "25"
  },
  {
    "id": 1,
    "cat-name": "Кот крутой",
    "cat-price": "50 000 руб.",
    "cat-age": "2",
    "cat-color": "Черный окрас",
    "cat-photo": "./assets/img/cat-card-3.png",
    "cat-discount": ""
  },
  {
    "id": 2,
    "cat-name": "Кот ворчливый",
    "cat-price": "20 000 руб.",
    "cat-age": "5",
    "cat-color": "Рыжий окрас",
    "cat-photo": "./assets/img/cat-card-2.png",
    "cat-discount": ""
  },
  {
    "id": 3,
    "cat-name": "Кот полосатый",
    "cat-price": "35 000 руб.",
    "cat-age": "4",
    "cat-color": "Серый окрас",
    "cat-photo": "./assets/img/cat-card-3.png",
    "cat-discount": "30"
  },
  {
    "id": 4,
    "cat-name": "Кот волосатый",
    "cat-price": "10 000 руб.",
    "cat-age": "7",
    "cat-color": "Белый окрас",
    "cat-photo": "./assets/img/cat-card-2.png",
    "cat-discount": ""
  },
  {
    "id": 5,
    "cat-name": "Кот жирный",
    "cat-price": "40 000 руб.",
    "cat-age": "12",
    "cat-color": "Черный окрас",
    "cat-photo": "./assets/img/cat-card-1.png",
    "cat-discount": ""
  },
  {
    "id": 6,
    "cat-name": "Кот полосатый",
    "cat-price": "33 000 руб.",
    "cat-age": "5",
    "cat-color": "Коричневый окрас",
    "cat-photo": "./assets/img/cat-card-3.png",
    "cat-discount": "50"
  },
  {
    "id": 7,
    "cat-name": "Кот полосатый",
    "cat-price": "30 000 руб.",
    "cat-age": "3",
    "cat-color": "Коричневый окрас",
    "cat-photo": "./assets/img/cat-card-2.png",
    "cat-discount": ""
  },
  {
    "id": 9,
    "cat-name": "Кот крутой",
    "cat-price": "50 000 руб.",
    "cat-age": "2",
    "cat-color": "Черный окрас",
    "cat-photo": "./assets/img/cat-card-3.png",
    "cat-discount": ""
  },
  {
    "id": 9,
    "cat-name": "Кот ворчливый",
    "cat-price": "20 000 руб.",
    "cat-age": "5",
    "cat-color": "Рыжий окрас",
    "cat-photo": "./assets/img/cat-card-1.png",
    "cat-discount": "40"
  },
  {
    "id": 10,
    "cat-name": "Кот полосатый",
    "cat-price": "35 000 руб.",
    "cat-age": "4",
    "cat-color": "Серый окрас",
    "cat-photo": "./assets/img/cat-card-3.png",
    "cat-discount": ""
  },
  {
    "id": 11,
    "cat-name": "Кот волосатый",
    "cat-price": "10 000 руб.",
    "cat-age": "7",
    "cat-color": "Белый окрас",
    "cat-photo": "./assets/img/cat-card-2.png",
    "cat-discount": ""
  },
  {
    "id": 12,
    "cat-name": "Кот жирный",
    "cat-price": "40 000 руб.",
    "cat-age": "12",
    "cat-color": "Черный окрас",
    "cat-photo": "./assets/img/cat-card-1.png",
    "cat-discount": "40"
  },
  {
    "id": 13,
    "cat-name": "Кот полосатый",
    "cat-price": "33 000 руб.",
    "cat-age": "5",
    "cat-color": "Коричневый окрас",
    "cat-photo": "./assets/img/cat-card-3.png",
    "cat-discount": ""
  },
];

document.querySelector('.found-cats').textContent = `Найдено ${catCardsDataBase.length} котов`;

const sortByPrice = document.querySelector('.sort-by-price');
const sortByPriceArrow = document.querySelector('.sort-by-price .arrow');
const sortByAge = document.querySelector('.sort-by-age');
const sortByAgeArrow = document.querySelector('.sort-by-age .arrow');

const catCards = document.querySelector('.cat-cards');

let outPut = 6;
let alreadyOutput = outPut;
let canOutput = catCardsDataBase.length - alreadyOutput;

const outputCatCards = (endOutput) => {
  catCards.textContent = '';

  for (let i = 0; i < endOutput; i++) {
    const catCard = document.createElement('div.cat-card');
    catCard.innerHTML = `
      <div class="cat-card">
        <div class="card-background">
          <div class="discount none">
            <span>-${catCardsDataBase[i]["cat-discount"]}%</span>
          </div>
          <div class="favorites disable"></div>
          <img src="${catCardsDataBase[i]["cat-photo"]}" alt="" />
        </div>
        <span class="cat-name">${catCardsDataBase[i]["cat-name"]}</span>
        <div class="main-info">
          <div class="color">${catCardsDataBase[i]["cat-color"]}</div>
          <div class="age">
            <span class="num">${catCardsDataBase[i]["cat-age"]} мес.</span>
            <span class="title">Возраст</span>
          </div>
          <div class="amount">
            <span class="num">4</span>
            <span class="title">Кол-во лап</span>
          </div>
        </div>
        <span class="cat-price">${catCardsDataBase[i]["cat-price"]} руб.</span>
        <div class="btn-buy">Купить</div>
      </div>
    `;
    let d = catCard.children[0].children[0].children[0];
    if (catCardsDataBase[i]["cat-discount"]) {
      d.classList.remove('none');
    }
    catCards.append(catCard);
  }
};

const sortUpByPrice = () => {
  for (let i = 0; i < catCardsDataBase.length; i++) {
    for (let j = 0; j < catCardsDataBase.length; j++) {
      if (catCardsDataBase[i]["cat-price"] >= catCardsDataBase[j]["cat-price"]) {
        let temp = catCardsDataBase[i];
        catCardsDataBase[i] = catCardsDataBase[j];
        catCardsDataBase[j] = temp;
      }
    }
  }
};
const sortDownByPrice = () => {
  for (let i = 0; i < catCardsDataBase.length; i++) {
    for (let j = 0; j < catCardsDataBase.length; j++) {
      if (catCardsDataBase[i]["cat-price"] <= catCardsDataBase[j]["cat-price"]) {
        let temp = catCardsDataBase[i];
        catCardsDataBase[i] = catCardsDataBase[j];
        catCardsDataBase[j] = temp;
      }
    }
  }
};

const sortUpByAge = () => {
  for (let i = 0; i < catCardsDataBase.length; i++) {
    for (let j = 0; j < catCardsDataBase.length; j++) {
      if (Number(catCardsDataBase[i]["cat-age"]) >= Number(catCardsDataBase[j]["cat-age"])) {
        let temp = catCardsDataBase[i];
        catCardsDataBase[i] = catCardsDataBase[j];
        catCardsDataBase[j] = temp;
      }
    }
  }
};
const sortDownByAge = () => {
  for (let i = 0; i < catCardsDataBase.length; i++) {
    for (let j = 0; j < catCardsDataBase.length; j++) {
      if (Number(catCardsDataBase[i]["cat-age"]) <= Number(catCardsDataBase[j]["cat-age"])) {
        let temp = catCardsDataBase[i];
        catCardsDataBase[i] = catCardsDataBase[j];
        catCardsDataBase[j] = temp;
      }
    }
  }
};

const showMoreCaption = document.querySelector('.show-more');
const showMoreBtn = document.querySelector('.show-more button');

const changeShowMoreBtn = () => {
  if (canOutput < outPut) {
    showMoreBtn.textContent = `Показать ещё ${canOutput}`;
  } else {
    showMoreBtn.textContent = `Показать ещё ${outPut}`;
  }
}

showMoreBtn.addEventListener('click', () => {
  alreadyOutput += outPut;
  if (alreadyOutput < catCardsDataBase.length) {
    outputCatCards(alreadyOutput);
    canOutput = catCardsDataBase.length - alreadyOutput;
    changeShowMoreBtn();
  } else {
    outputCatCards(catCardsDataBase.length);
    showMoreCaption.style.display = 'none';
  }
});

outputCatCards(alreadyOutput);

sortByPrice.addEventListener('click', () => {
  if (sortByPriceArrow.classList.contains('arrow-up')) {
    sortByPriceArrow.classList.add('arrow-down');
    sortByPriceArrow.classList.remove('arrow-up');
    sortUpByPrice();
  } else {
    sortByPriceArrow.classList.add('arrow-up');
    sortByPriceArrow.classList.remove('arrow-down');
    sortDownByPrice();
  }
  const amountCatCards = document.querySelectorAll('.cat-card');
  outputCatCards(amountCatCards.length);
});

sortByAge.addEventListener('click', () => {
  if (sortByAgeArrow.classList.contains('arrow-up')) {
    sortByAgeArrow.classList.add('arrow-down');
    sortByAgeArrow.classList.remove('arrow-up');
    sortUpByAge();
  } else {
    sortByAgeArrow.classList.add('arrow-up');
    sortByAgeArrow.classList.remove('arrow-down');
    sortDownByAge();
  }
  const amountCatCards = document.querySelectorAll('.cat-card');
  outputCatCards(amountCatCards.length);
})

//кнопка добавить в избранное
const favorites = document.querySelectorAll('.favorites');
const addedToFavorites = document.querySelector('.added-to-favorites');
const removedFromFavorites = document.querySelector('.removed-from-favorites');

favorites.forEach((item) => {
  item.addEventListener('click', () => {
    if (item.classList.contains('enable')) {
      item.classList.add('disable');
      item.classList.remove('enable');

      if (addedToFavorites.classList.contains('show')) {
        addedToFavorites.style.display = 'none';
        setTimeout(() => {
          addedToFavorites.classList.remove('show');
          addedToFavorites.style.display = '';
        });
      }

      removedFromFavorites.classList.add('show');
      setTimeout(() => {
        removedFromFavorites.classList.remove('show');
      }, 1500);
    } else {
      item.classList.add('enable');
      item.classList.remove('disable');

      if (removedFromFavorites.classList.contains('show')) {
        removedFromFavorites.style.display = 'none';
        setTimeout(() => {
          removedFromFavorites.classList.remove('show');
          removedFromFavorites.style.display = '';
        });
      }

      addedToFavorites.classList.add('show');
      setTimeout(() => {
        addedToFavorites.classList.remove('show');
      }, 1500);
    }
  });
});

//кнопка пролистать наверх
const btnUp = document.querySelector('.btn-up');

const hideBtnUp = () => {
  if (window.scrollY === 0) {
    btnUp.classList.remove('scrolled');
  } else {
    btnUp.classList.add('scrolled');
  }
};
const scrollToUpOfPage = () => {
  scroll({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
}

window.addEventListener('scroll', hideBtnUp);

btnUp.addEventListener('click', scrollToUpOfPage);


const em = document.querySelector('.email');
patterns = "*@gmail.com || *@yandex.ru || *@mail.ru"
em.setAttribute('pattern', patterns)