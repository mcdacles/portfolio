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

// Navigation Bar active class
const sections = document.querySelectorAll('section');
const navigations = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
  // Navigation bar toggle
  let header = document.querySelector('#header');
  let windowPosition = window.scrollY > 500;

  header.classList.toggle('scrolling-active', windowPosition);

  let current = '';

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;

    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  navigations.forEach((navigation) => {
    navigation.classList.remove('active');
    if (navigation.classList.contains(current)) {
      navigation.classList.add('active');
    }
  });
});

// Messenger Plugin
var chatbox = document.getElementById('fb-customer-chat');
chatbox.setAttribute('page_id', '105405028852629');
chatbox.setAttribute('attribution', 'biz_inbox');

// Your SDK code
window.fbAsyncInit = function () {
  FB.init({
    xfbml: true,
    version: 'v14.0'
  });
};

(function (d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s);
  js.id = id;
  js.src = 'https://connect.facebook.net/en_GB/sdk/xfbml.customerchat.js';
  fjs.parentNode.insertBefore(js, fjs);
})(document, 'script', 'facebook-jssdk');
