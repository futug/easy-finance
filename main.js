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
const uniqOffers = document.querySelector(".uniq-offers");
const monthlyPayment = document.querySelector(".monthly-payment");
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

// const mainPageDefault = document.querySelector('body').innerHTML;

// document.querySelector('.feedback__story-card').addEventListener('click', () => {
//     document.querySelector('body').innerHTML = "<p>back</p>";
//     document.querySelector("p").addEventListener('click', () => {
//         document.querySelector('body').innerHTML = mainPageDefault;
//     })
// })