


document.addEventListener('DOMContentLoaded', () => {
  const minimizeBtn = document.getElementById('minimizeBtn');
  const maximizeBtn = document.getElementById('maximizeBtn');
  const closeBtn = document.getElementById('closeBtn');

  if (minimizeBtn) {
    minimizeBtn.addEventListener('click', () => {
      window.api.send('minimizeApp');
    });
  }

  // if (maximizeBtn) {
  //   maximizeBtn.addEventListener('click', () => {
  //     window.api.send('maximizeApp');
  //   });
  // }

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      window.api.send('closeApp');
    });
  }
});

  