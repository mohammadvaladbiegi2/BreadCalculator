let Price = document.querySelector(".Price");
let btn = document.querySelector(".btn");
let NumberBread = document.querySelector(".NumberBread");
let NumberNylon = document.querySelector(".NumberNylon");
let NumberSesame = document.querySelector(".NumberSesame");
let btn_minuse = document.querySelector(".btn_minuse");
let btn_plus = document.querySelector(".btn_plus");
let All = document.querySelector(".All");
let NumberDamage = document.querySelector(".NumberDamage");
let Cont_Bread_Sasame = document.querySelector(".Cont_Bread_Sasame");
let error = document.querySelector(".error");
let SesameBread = 0;

let damage = 0;
let Nylon = 0;
let Sesame = 0;
let zarar = 0;
function BreadCalculator(TotalPrice) {
  let CountBread = (TotalPrice / 2300).toFixed(2);
  NumberBread.classList.add("active");
  let showCountBread = Math.floor(CountBread);
  NumberBread.innerHTML = `تعداد نان : ${showCountBread.toLocaleString(
    "fa"
  )}       🍞`;
  damage += showCountBread * 2300;
  zarar = TotalPrice - damage;
  if (zarar >= 500) {
    if (zarar >= 1000) {
      NumberNylon.classList.add("active");
      Nylon++;
      zarar = zarar - 1000;
      NumberNylon.innerHTML = "تعداد نایلون : 1📥";
      damage += 1000;
    } else {
      NumberNylon.classList.remove("active");
    }

    if (zarar >= 500) {
      let SesameCalculation = Math.floor(zarar / 500);
      NumberSesame.classList.add("active");
      NumberSesame.innerHTML = `تعداد کنجد : ${SesameCalculation.toLocaleString(
        "fa"
      )}          🍪`;

      let ContSesame = SesameCalculation * 500;
      zarar = zarar - ContSesame;
      damage += ContSesame;
    }
  } else {
    NumberNylon.classList.remove("active");
    NumberSesame.classList.remove("active");
  }
  All.classList.add("active");
  if (zarar) {
    NumberDamage.classList.add("active");
  } else {
    NumberDamage.classList.remove("active");
  }
  All.innerHTML = `مجموع : ${damage.toLocaleString("fa")}`;
  NumberDamage.innerHTML = `ضرر : ${zarar.toLocaleString("fa")}`;
  damage = 0;
  Nylon = 0;
  Sesame = 0;
  zarar = 0;
  SesameBread = 0;
}

btn_minuse.addEventListener("click", () => {
  if (SesameBread > 0) {
    SesameBread--;
  }
  Cont_Bread_Sasame.innerHTML = SesameBread;
});

btn_plus.addEventListener("click", () => {
  SesameBread++;
  Cont_Bread_Sasame.innerHTML = SesameBread;
});

btn.addEventListener("click", () => {
  let value = +Price.value;

  if (value) {
    if (SesameBread) {
      let PriceSesameBread = SesameBread * 2500;
      let lastPrice = value + PriceSesameBread;
      if (lastPrice >= 2300) {
        BreadCalculator(lastPrice);
        Price.value = "";
        Cont_Bread_Sasame.innerHTML = 0;
        error.classList.remove("active");
      } else {
        error.classList.add("active");
      }
    } else {
      if (value >= 2300) {
        BreadCalculator(value);
        Price.value = "";
        error.classList.remove("active");
      } else {
        error.classList.add("active");
        NumberBread.classList.remove("active");
        NumberNylon.classList.remove("active");
        NumberSesame.classList.remove("active");
        All.classList.remove("active");
        NumberDamage.classList.remove("active");
      }
    }
  }
});
