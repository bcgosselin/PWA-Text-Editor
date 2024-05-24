const butInstall = document.getElementById('buttonInstall');

window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  window.installPrompt = event;
  butInstall.classList.remove('hidden');
});

butInstall.addEventListener('click', async () => {
  const promptEvent = window.installPrompt;
  if (!promptEvent) return;

  promptEvent.prompt();
  window.installPrompt = null;
  butInstall.classList.add('hidden');
});

window.addEventListener('appinstalled', (event) => {
  console.log('App installed successfully', event);
  window.installPrompt = null;
});