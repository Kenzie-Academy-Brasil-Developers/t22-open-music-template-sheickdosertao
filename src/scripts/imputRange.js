export function applyInputRangeStyle() {
    const inputRange = document.querySelector(".input__ranger");
  
    inputRange.addEventListener("input", (event) => {
      const currentInputValue = event.target.value;
      const runnableTrackProgress = (currentInputValue / inputRange.max) * 100;
  
      inputRange.style.background = `linear-gradient(to right, var(--cor-input) ${runnableTrackProgress}%, var(--cor-gray-5) ${runnableTrackProgress}%)`;
    });
  }

  applyInputRangeStyle()