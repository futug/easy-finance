const burger = document.querySelector(".burger-menu");
const burgerItems = document.querySelectorAll(".burger-menu__item");
const burgerItemsHor = document.querySelectorAll(".burger-menu__item-horizont");
const menu = document.querySelector(".header__nav");
const accordQuest = document.querySelectorAll(".about__accordion-question");
const tabsBtn = document.querySelectorAll(".how-works__tabs-item");
const tabBackground = document.querySelector(".how-works__tabs-background");
const renderTitle = document.querySelector(".how-works__render-title");
const renderSubtitle = document.querySelector(".how-works__render-subtitle");
const renderPicture = document.querySelector(".how-works-picture");
const calcTabs = document.querySelectorAll(".how-works__calc-choise-item");
const calcTabsBackground = document.querySelector(".how-works__calc-choise-back");
const calcForms = document.querySelectorAll(".how-works__calc-body");
const calcSliderSum = document.querySelector(".creditSum");
const calcSlideSumValue = document.querySelectorAll(".range__slider-value > span");
const calcSliderPercent = document.querySelector(".creditPercent");
const calcSliderPeriod = document.querySelector(".creditPeriod");

const calcCurrency = document.querySelector('.loan-currency');
const creditTypeSelect = document.querySelector('.credit-type');
const sumRangeStartPosition = document.querySelector('.start-point');
const sumRangeEndPosition = document.querySelector('.end-point');
const defaultAttributes = {
  min: calcSliderSum.getAttribute('min'),
  max: calcSliderSum.getAttribute('max'),
  value: calcSliderSum.getAttribute('value'),
  step: calcSliderSum.getAttribute('step')
};
const anchors = document.querySelectorAll('a[href*="#"]');
const menuWrapper = document.querySelector('.header__inner-top-wrapper');
const siteLogo = document.querySelector('.header__logo-link');
const langChoise = document.querySelectorAll('.header__lang');


langChoise.forEach((el) => {
    el.addEventListener('click', (event) => {
        langChoise.forEach((el) => {
            el.classList.remove('choisen');
        });
        event.currentTarget.classList.add('choisen');
    });
});



// smoothanchor scroll
for (let anchor of anchors) {
  anchor.addEventListener("click", (e) => {
    e.preventDefault();
    const blockID = anchor.getAttribute("href");
    document.querySelector("" + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

// fetch('https://futug.github.io/easy-finance/rusTexts.json')
// .then((response) => response.json())
// .then((data) => {
//     var objRus = data;
//     console.log(objRus);
// })
// .catch((error) => {
//     console.log('fetching error');
// });



//   country__and__currency-check
fetch("http://ip-api.com/json")
.then((response) => response.json())
.then((data) => {
  const country = data.country;
  calcCurrency.value = (country === 'Kyrgyzstan' || country === 'Russia' || country === 'Belarus')
  ? 'rub'
  : (country === 'USA' || country === 'Uzbekistan')
    ? 'usd'
    : 'eur';

  console.log("Страна пользователя: " + country);
})
.catch((error) => {
  console.log("Ошибка при получении информации о стране: " + error);
});

// burger-menu
burger.addEventListener("click", () => {
    burgerItems.forEach((item) => {
        item.classList.toggle("burger-menu__item--active");
    });

    burgerItemsHor.forEach((horItem) => {
        horItem.classList.toggle("burger-menu__item-horizont--active");
    });
    menu.classList.toggle("header__nav--active");
});
// burger-menu

// accord
accordQuest.forEach((elem) => {
    elem.addEventListener("click", () => {
        let accordAnswer = elem.nextElementSibling;

        if (accordAnswer.style.maxHeight) {
            accordAnswer.style.maxHeight = null;
            accordAnswer.style.padding = null;
            accordAnswer.style.border = null;
            elem.querySelector(".about__accordion-ico").style.transform = null;
        } else {
            document.querySelectorAll(".about__accordion-answer").forEach((ansEl) => {
                ansEl.style.maxHeight = null;
                ansEl.style.padding = null;
                ansEl.style.border = null;
                ansEl.previousElementSibling.querySelector(".about__accordion-ico").style.transform = null;
            });
            accordAnswer.style.padding = "15px";
            accordAnswer.style.maxHeight = accordAnswer.scrollHeight + "px";
            accordAnswer.style.borderTop = "4px solid #f8f8f8";
            elem.querySelector(".about__accordion-ico").style.transform = "rotate(45deg)";
        }
    });
});
// accord
// tabs
// tabs__choice
tabsBtn.forEach((el) => {
    el.addEventListener("click", (event) => {
        tabsBtn.forEach((btn) => {
            btn.classList.remove("how-works__tabs-item--active");
        });
        event.currentTarget.classList.toggle("how-works__tabs-item--active");
    });
});
//tabs__rendering
const creditProduct = {
    personalLoan: {
        title: "Потребительский кредит на мечту",
        subtitle: "Выгодные условия для получения потребительского кредита на любые цели от 9% годовых до 5 млн.",
        pic: "./img/product-img-first.webp",
    },
    autoPurchase: {
        title: "Автокредит на ласточку",
        subtitle: "Выгодные условия для получения авто-кредита от 11% годовых до 7 млн.",
        pic: "./img/auto-purchase.webp",
    },
    mortgageLoan: {
        title: "Ипотечное кредитование на дом",
        subtitle: "Выгодные условия для получения ипотеки от 6% годовых до 15 млн, включая социальные продуктыю",
        pic: "./img/mortgage-loan.webp",
    },
    refinanceLoan: {
        title: "Рефинансирование невыгодного кредита",
        subtitle: "Выгодные условия для получения рефинансирования от 10% годовых до 10 млн",
        pic: "./img/refinance-loan.webp",
    },
};

tabsBtn.forEach((item) => {
    item.addEventListener("click", () => {
        tabsBtn.forEach((tab) => {
            tab.classList.remove("how-works__tabs-item--active");
        });

        item.classList.add("how-works__tabs-item--active");

        const productType = item.getAttribute("data-product");
            creditTypeSelect.value = productType;
    

        const productData = creditProduct[productType];

        renderTitle.textContent = productData.title;
        renderSubtitle.textContent = productData.subtitle;

        renderPicture.setAttribute("src", productData.pic);
    });
});

// calculator
// calc-choise
calcTabs.forEach((el, index) => {
    el.addEventListener("click", (event) => {
        calcTabs.forEach((tab) => {
            tab.classList.remove("how-works__calc-choise-item--active");
        });
        event.currentTarget.classList.add("how-works__calc-choise-item--active");

        // calcForms.forEach((form) => {
        //     form.classList.remove("how-works__calc-body--active");
        // });

        // calcForms[index].classList.add("how-works__calc-body--active");

        if (event.currentTarget === calcTabs[0]) {
            calcTabsBackground.style.transform = "translateX(0)";
        } else if (event.currentTarget === calcTabs[1]) {
            calcTabsBackground.style.transform = "translateX(100%)";
        }
    });
});

//ranges

calcSliderSum.addEventListener("input", () => {
    let calcResult = Number(calcSliderSum.value).toLocaleString("en-US", { useGrouping: true });
    calcSlideSumValue[0].textContent = calcResult;
});

calcSliderPercent.addEventListener("input", () => {
    calcSlideSumValue[1].textContent = calcSliderPercent.value + "%";
});

calcSliderPeriod.addEventListener("input", () => {
    calcSlideSumValue[2].textContent = calcSliderPeriod.value;
});

// Calculate monthlyPayment
function calculateMonthlyPayment() {
    const S = parseFloat(calcSliderSum.value);
    const P = parseFloat(calcSliderPercent.value) / 100;
    const N = parseFloat(calcSliderPeriod.value) * 12;
    let totalPayment = 0;
    const uniqOffers = document.querySelector(".uniq-offers");
const monthlyPayment = document.querySelector(".monthly-payment");
  
    if (calcTabs[0].classList.contains("how-works__calc-choise-item--active")) {
      const Se = Math.ceil((S * P / 12 * Math.pow((1 + P / 12), N)) / (Math.pow((1 + P / 12), N) - 1));
      uniqOffers.textContent = Math.floor(Math.random() * (40 - 3 + 1) + 3);
      monthlyPayment.textContent = Se.toLocaleString("ru-RU");
    } else if (calcTabs[1].classList.contains("how-works__calc-choise-item--active")) {
      for (let n = 1; n <= N; n++) {
        const Dn = (S / N) + ((S - (n - 1) * (S / N)) * P);
        totalPayment += Dn;
      }
      const Se = Math.ceil(totalPayment / N);
      uniqOffers.textContent = Math.floor(Math.random() * (40 - 3 + 1) + 3);
      monthlyPayment.textContent = Se.toLocaleString("ru-RU");
    }
  }
  
  calcSliderSum.addEventListener("input", calculateMonthlyPayment);
  calcSliderPercent.addEventListener("input", calculateMonthlyPayment);
  calcSliderPeriod.addEventListener("input", calculateMonthlyPayment);
  calcTabs.forEach((tab) => {
    tab.addEventListener("click", calculateMonthlyPayment);
  });
  

//   SumSlider of currency handler


  calcCurrency.addEventListener('change', () => {
    const isRub = calcCurrency.value !== 'rub';
    sumRangeStartPosition.textContent = isRub ? '5000' : defaultAttributes.min;
    sumRangeEndPosition.textContent = isRub ? '500 000' : defaultAttributes.max;
    calcSliderSum.setAttribute('min', isRub ? '5000' : defaultAttributes.min);
    calcSliderSum.setAttribute('max', isRub ? '500000' : defaultAttributes.max);
    calcSliderSum.setAttribute('value', isRub ? '10000' : defaultAttributes.value);
    calcSliderSum.setAttribute('step', isRub ? '1000' : defaultAttributes.step);
    calcSlideSumValue[0].textContent = calcSliderSum.value;
  });
  

// 
const checkboxInput = document.querySelector('.how-works__privat-input');
document.addEventListener('DOMContentLoaded', () => {
    calcSlideSumValue.textContent = calcSliderSum.value;
    if (checkboxInput.checked === false) {
        const contactCheckPrivicy = document.querySelector('.how-works__send-button').classList.add('primary-button--disabled');
    }
});




checkboxInput.addEventListener('click', () => {
  console.log('Checked:', checkboxInput.checked);
  const contactCheckPrivicy = document.querySelector('.how-works__send-button').classList.toggle('primary-button--disabled');
});


window.addEventListener("DOMContentLoaded", function() {
    if (window.innerWidth >= 1440) {
        scrollLoop();
    }
}, false);

var xScrollPosition;
var yScrollPosition;

function scrollLoop() {
    xScrollPosition = window.scrollX;
    yScrollPosition = window.scrollY;

    if (yScrollPosition > 30) {
        siteLogo.classList.add('header__logo-link--active');
        menuWrapper.classList.add('header__inner-top-wrapper--active');
    } else {
        siteLogo.classList.remove('header__logo-link--active');
        menuWrapper.classList.remove('header__inner-top-wrapper--active');
    }

    requestAnimationFrame(scrollLoop);
}



// LANGUAGE-CHOISE
fetch('https://futug.github.io/easy-finance/engTexts.json')
.then((response) => response.json())
.then((data) => {
    var objEng = data;
    console.log(objEng);
    const transElements = document.querySelectorAll('.trans');

    langChoise.forEach((el) => {
      el.addEventListener('click', (event) => {
        const targetElement = event.currentTarget;

        if (targetElement.classList.contains('eng') && targetElement.classList.contains('choisen')) {
          transElements.forEach((element, index) => {
            element.innerText = objEng['text_' + index];
          });
          const resultString = document.querySelector('.how-works__calc-results');
          resultString.innerHTML = '';
          resultString.innerHTML = '<p class="how-works__result-message trans">' +
            'Based on your criteria, we have selected <span class="uniq-offers">7</span> unique offers for you with a monthly payment of ' +
            '<span class="monthly-payment">1510₽</span>. Proceed to step 3 to get the money!' +
            '</p>' + '<a class="how-works__calc-cta primary-button trans" href="#finalstep">' +'Proceed!' + '</a>';
        } else {
          console.log('&&&');
        }
      });
    });
})
.catch((error) => {
    console.log('fetching error');
});

fetch('https://futug.github.io/easy-finance/rusTexts.json')
  .then((response) => response.json())
  .then((data) => {
    var objRus = data;
    console.log(objRus);

    const transElements = document.querySelectorAll('.trans');

    langChoise.forEach((el) => {
      el.addEventListener('click', (event) => {
        const targetElement = event.currentTarget;

        if (targetElement.classList.contains('ru') && targetElement.classList.contains('choisen')) {
          transElements.forEach((element, index) => {
            element.innerText = objRus['text_' + index];
          });
          const resultString = document.querySelector('.how-works__calc-results');
          resultString.innerHTML = '';
          resultString.innerHTML = '<p class="how-works__result-message trans">' +
            'По вашим критериям подобрали вам <span class="uniq-offers">7</span> уникальных предложений, с ежемесячным платежом от ' +
            '<span class="monthly-payment">1510₽</span>, перейдите к шагу 3, чтобы получить деньги!' +
            '</p>' + '<a class="how-works__calc-cta primary-button trans" href="#finalstep">' +'Перейти!' + '</a>';
          
        } else {
          console.log('&&&');
        }
      });
    });
  })
  .catch((error) => {
    console.log('fetching error');
  });

// ROUTING
const mainPageDefault = document.querySelector('main').innerHTML;

document.querySelectorAll('.interactive-ico').forEach((el, index) => {
  el.addEventListener('click', () => {
    document.querySelector('.header__inner-wrapper').style.display = "none";
    if (index === 0) {
    document.querySelector('main').innerHTML = ` <div class="story-content container">
    <div class="bread-crumps">
                        <a href="/index">
                            Главная
                        </a>
                        <span>></span>
                        <a href="#" class="active-rout">Ипотека семьи Олобихиных</a>
                    </div>
    <div class="title-group">
        <p class="title-group__pretitle trans">_Как именно вы помогли?</p>
        <h2 class="title-group__title trans">Истории наших клиентов</h2>
        <p class="title-group__subtitle trans">Послушайте истории наших клиентов!</p>
    </div>
    <div class="story-content__item">
        <div class="story-content__interactive-group">
            <img srcset="./img/family-photo-mortgage.webp, ./img/family-photo-mortgage.png" 
            src="./img/family-photo-mortgage.webp" 
            alt="family photo" 
            class="story-photo">
            <p class="story-content__photo-description">
                Семья Олобихиных, обратились в EF для получения лучшего предложения для улучшения жилищных условий. Полученный продукт - 2 млн 750тыс под 5.7%
            </p>
            <a href="#" class="primary-button story-content__btn">Я тоже так хочу!</a>
        </div>
        <div class="story-content__textcontent">
            <div class="blog-titles">
                <p class="how-works__step-title blog-title">Семья Олобихиных.</p>
                <p class="how-works__step-subtitle blog-subtitle">Ипотека на улучшение жилищных условий.</p>
            </div>
            <p class="story-article">Меня зовут Иван, и я хочу поделиться с вами нашим опытом с компанией Easy Finance. Я и моя жена Марина мечтали о просторном доме для нашей семьи, ведь у нас трое замечательных детей: старший сын Антон, младший сын Михаил и наша маленькая дочь Вера.

                Изучая возможности решения нашей проблемы с теснотой в нашей старой квартире, мы обратили внимание на компанию Easy Finance. Их онлайн-сервис позволяет подобрать ипотечные продукты, не требуя личной встречи с консультантом.
                
                Мы были приятно удивлены уровнем профессионализма и качеством обслуживания, которые предоставила нам компания Easy Finance. Первым шагом было заполнение подробного онлайн-вопросника, где мы указали наши предпочтения и финансовые возможности.
                
                После этого мы получили доступ к широкому выбору ипотечных продуктов различных банков и финансовых учреждений. Нам предоставили информацию о различных условиях и процентах по кредитам, что помогло нам сравнить и выбрать наиболее подходящий вариант.
                
                Оформление ипотечного кредита было простым и удобным благодаря интуитивно понятному онлайн-интерфейсу Easy Finance. Мы заполнили необходимые документы и отслеживали прогресс нашей заявки через личный кабинет. Весь процесс был прозрачным, и мы получали своевременную информацию от компании.
                
                Благодаря помощи Easy Finance, мы смогли приобрести просторную пятикомнатную квартиру в Казани, которая стала идеальным жилищем для нашей семьи. Мы благодарны компании за их профессионализм, удобный онлайн-сервис и возможность реализовать нашу мечту о просторном жилье.
                
                Easy Finance действительно сделала процесс подбора ипотечного кредита легким и удобным, и мы рекомендуем их услуги всем, кто ищет оптимальное решение для своего жилищного вопроса.
            </p>
        </div>
    </div>
</div>`; 
    } else if (index === 1) {
      document.querySelector('main').innerHTML = ` <div class="story-content container">
      <div class="bread-crumps">
                        <a href="/index">
                            Главная
                        </a>
                        <span>></span>
                        <a href="#" class="active-rout">Студия звукозаписи Korotkin - г.Тверь</a>
                    </div>
      <div class="title-group">
          <p class="title-group__pretitle trans">_Как именно вы помогли?</p>
          <h2 class="title-group__title trans">Истории наших клиентов</h2>
          <p class="title-group__subtitle trans">Послушайте истории наших клиентов!</p>
      </div>
      <div class="story-content__item">
          <div class="story-content__interactive-group">
              <img srcset="./img/photo-record-studio.webp, ./img/photo-record-studio.jpeg" 
              src="./img/photo-record-studio.webp" 
              alt="family photo" 
              class="story-photo">
              <p class="story-content__photo-description">
                  Игорь Короткин, обратился в EF для получения лучшего предложения для покупки нового оборудования для своей студии звукозаписи. Полученный продукт - 1млн 100тыс под 10.3%
              </p>
              <a href="#" class="primary-button story-content__btn">Я тоже так хочу!</a>
          </div>
          <div class="story-content__textcontent">
              <div class="blog-titles">
                  <p class="how-works__step-title blog-title">Игорь Короткин.</p>
                  <p class="how-works__step-subtitle blog-subtitle">Обновление парка оборудования в собственной студии звукозаписи.</p>
              </div>
              <p class="story-article">
              Меня зовут Игорь Короткин, и я хочу поделиться своей историей о том, как компания Easy Finance помогла мне обновить оборудование в моей студии звукозаписи. Я уже много лет работаю в музыкальной индустрии и владею своей собственной студией, но столкнулся с проблемой устаревания и выхода из строя оборудования.

              Как владельцу малого бизнеса, я знаю, насколько трудно поддерживать современный уровень оборудования в индустрии, которая постоянно развивается. Каждый год новые технологии и инструменты выходят на рынок, и чтобы оставаться конкурентоспособным, нужно постоянно обновлять и улучшать свое оборудование.
              
              Именно в этот момент я обратился к компании Easy Finance, чтобы получить финансирование для обновления оборудования в моей студии. Что меня приятно удивило, так это то, что весь процесс проходит онлайн, без необходимости личной встречи с консультантом. Для занятого предпринимателя, как я, это было идеальным решением.
              
              Первым шагом было заполнение подробного онлайн-вопросника, где я указал свои финансовые потребности и предпочтения. Easy Finance предоставил мне доступ к широкому выбору кредитных продуктов различных банков и финансовых учреждений. Я смог ознакомиться с различными условиями и процентными ставками, чтобы выбрать наиболее подходящий вариант для моего бизнеса.
              
              Оформление кредита было очень простым и удобным благодаря интуитивно понятному онлайн-интерфейсу Easy Finance. Я заполнил необходимые документы и отслеживал прогресс своей заявки через личный кабинет. Вся информация была предоставлена мне своевременно, и я всегда был в курсе текущего состояния процесса.
              
              Благодаря помощи Easy Finance, я смог получить кредит на сумму 1 миллион 100 тысяч рублей под 10.3% годовых. Эти средства позволили мне приобрести новое оборудов
              </p>
          </div>
      </div>
    </div>`;
    } else if (index === 2 ) {
      document.querySelector('main').innerHTML = ` <div class="story-content container">
      <div class="bread-crumps">
                        <a href="/index">
                            Главная
                        </a>
                        <span>></span>
                        <a href="#" class="active-rout">Зульфия Губайдулинна - кредит на образование</a>
                    </div>
      <div class="title-group">
          <p class="title-group__pretitle trans">_Как именно вы помогли?</p>
          <h2 class="title-group__title trans">Истории наших клиентов</h2>
          <p class="title-group__subtitle trans">Послушайте истории наших клиентов!</p>
      </div>
      <div class="story-content__item">
          <div class="story-content__interactive-group">
              <img srcset="./img/photo-student-story.webp, ./img/photo-student-story.jpeg" 
              src="./img/photo-student-story.webp" 
              alt="family photo" 
              class="story-photo">
              <p class="story-content__photo-description">
                  Зульфия Губайдулинна (по центру), обратилась за получением образовательной ссуды для поступления в СПБГУ. Получила ссуду 780 тыс. руб. на льготных условиях под 1.4%.
              </p>
              <a href="#" class="primary-button story-content__btn">Я тоже так хочу!</a>
          </div>
          <div class="story-content__textcontent">
              <div class="blog-titles">
                  <p class="how-works__step-title blog-title">Зульфия Губайдулинна.</p>
                  <p class="how-works__step-subtitle blog-subtitle">Образовательный кредит.</p>
              </div>
              <p class="story-article">
              Меня зовут Зульфия Губайдулина, и я хочу рассказать свою историю о том, как я получила образовательный кредит, чтобы поступить в Санкт-Петербургский государственный университет. Родом я из Южной Осетии, и для меня образование всегда было приоритетом.

В моей родной стране доступ к высшему образованию был ограничен, и мне всегда мечталось поступить в престижный университет за пределами моей родины. Однако финансовые возможности моей семьи были ограничены, и я понимала, что без финансовой поддержки будет трудно осуществить мою мечту.

Я решила обратиться за помощью к финансовым учреждениям, и мне посоветовали обратиться в банк, который предлагает образовательные кредиты. Я выбрала банк, который имел хорошую репутацию и гибкие условия кредитования для студентов.

Первым шагом было заполнение заявки на образовательный кредит, где я указала свои личные данные, финансовую информацию и подробности о поступлении в Санкт-Петербургский государственный университет. Я предоставила все необходимые документы, включая подтверждение о приеме и расходы на обучение.

После подачи заявки меня пригласили на собеседование, где я смогла рассказать о своих академических достижениях, мотивации и планах на будущее. Было важно продемонстрировать банку, что я серьезно отношусь к своему образованию и обладаю потенциалом для достижения успеха.

Благодаря усилиям и поддержке моей семьи, а также решительности, я получила образовательный кредит от банка. Банк предоставил мне возможность финансировать свое образование на сумму, необходимую для оплаты учебных сборов, проживания и других расходов в Санкт-Петербурге.
              </p>
          </div>
      </div>
    </div>`;
    }
})
})



