const accordion = document.querySelector(".accordion");

let currActiveBtn = null;
let currActiveAnswer = null;

const plusIconClass = "accordion__toggle-btn--plus";
const minusIconClass = "accordion__toggle-btn--minus";
const showAnswerClass = "accordion__answer--show";

accordion.addEventListener("click", (e) => {
  const elem = e.target;

  if (!elem.dataset.id) return;

  const answer = document.getElementById(`answer-${elem.dataset.id}`);

  const btnElem =
    elem.tagName === "BUTTON"
      ? elem
      : elem.closest(".accordion__header").querySelector("button");

  if (currActiveBtn?.dataset.id !== elem.dataset.id && currActiveBtn) {
    currActiveBtn.classList.remove(minusIconClass);
    currActiveBtn.classList.add(plusIconClass);
    currActiveAnswer.classList.remove(showAnswerClass);
  }

  btnElem.classList.toggle(plusIconClass);
  btnElem.classList.toggle(minusIconClass);
  answer.classList.toggle(showAnswerClass);

  currActiveBtn = btnElem;
  currActiveAnswer = answer;
});
