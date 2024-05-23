const butInstall = document.getElementById('buttonInstall');

let installPrompt;

window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  installPrompt = event;
  const installButton = document.getElementById('buttonInstall');
  installButton.classList.remove('hidden');
});

butInstall.addEventListener('click', async () => {
  if (installPrompt) {
    installPrompt.prompt();
    const choiceResult = await installPrompt.userChoice;
    installPrompt = null;
    console.log('User choice:', choiceResult.outcome);
  }
});

window.addEventListener('appinstalled', (event) => {
  console.log('App installed successfully');
  butInstall.classList.add('hidden');
});

