document.addEventListener("keydown", (event) => {
  if (event.key >= '1' && event.key <= '9') {
    const number = event.key;
    const selector = `#key-number-${number}-a`;
    const keyElement = document.querySelector(selector);
    if (keyElement) {
      keyElement.click();
    }
    event.preventDefault();
  }

  if (event.key === 'Backspace') {
    const erase = document.querySelector('#key-backspace-a');
    erase?.click();
    event.preventDefault();
  }

  // broken and I have no idea why
  if (event.key === 'n') {
    const notes = document.querySelector('#triggerNotesMode-a');
    notes?.click();
    event.preventDefault();
  }
});

