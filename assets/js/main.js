let wave = document.getElementById('wave');
// let btn = document.getElementById('btn');

function SendMail() {
  var params = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    email: document.getElementById('message').value
  };
  emailjs
    .send('service_279186a', 'template_email_template', params)
    .then(function () {
      alert('Message sent!');
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('message').value = '';
    });
}

window.addEventListener('scroll', function () {
  // Parallax effect
  // let value = window.scrollY;

  // wave.style.top = value * 0.1 + 'px';
  // btn.style.top = value + 0.05 + 'px';

  // Navigation bar toggle
  let header = document.querySelector('header');
  let windowPosition = window.scrollY > 500;

  header.classList.toggle('scrolling-active', windowPosition);

  // Make banner button z-index: -2
  // let windowPosition1 = window.scrollY > 300;
  // btn.classList.toggle('disappear', windowPosition1);
});

// Messenger Plugin
var chatbox = document.getElementById('fb-customer-chat');
chatbox.setAttribute('page_id', '105405028852629');
chatbox.setAttribute('attribution', 'biz_inbox');

// Your SDK code
window.fbAsyncInit = function () {
  FB.init({
    xfbml: true,
    version: 'v13.0'
  });
};

(function (d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s);
  js.id = id;
  js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
  fjs.parentNode.insertBefore(js, fjs);
})(document, 'script', 'facebook-jssdk');
