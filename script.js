
  const toggleButton = document.getElementById('toggle-button');
  const body = document.body;

  // Check local storage for dark mode preference
  const darkMode = localStorage.getItem('dark-mode');

  if (darkMode === 'enabled') {
    body.classList.add('dark-mode');
  } else {
    body.classList.add('light-mode');
  }

  // Function to enable dark mode
  const enableDarkMode = () => {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
    localStorage.setItem('dark-mode', 'enabled');
  };

  // Function to disable dark mode
  const disableDarkMode = () => {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    localStorage.setItem('dark-mode', 'disabled');
  };

  // Toggle dark mode on button click
  toggleButton.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
      disableDarkMode();
    } else {
      enableDarkMode();
    }
  });
