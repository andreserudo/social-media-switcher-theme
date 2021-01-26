const btnSwitch = document.getElementsByClassName('switchButton');

document.addEventListener('change', () => {
  const theme = document.getElementById("theme");
  const themeClass = theme.className;
  
  if(themeClass === 'content dark') {
    theme.className = 'content';
  } else {    
    theme.className = 'content dark';
  }
})

