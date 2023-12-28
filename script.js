function buyButtonClick() {
    var button = document.getElementById('buyButton');
  
    button.classList.add('clicked');
  
    button.innerHTML = 'Куплено';
  
    button.onclick = null;
  }