/* Mobile Menu */
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.link-wrap');
const hambgOne = document.querySelector('.btoggleone');
const hambgTwo = document.querySelector('.btoggletwo');
const hambgThree = document.querySelector('.btogglethree');

//Mobile menu

const mobileMenu = () => {
  menu.classList.toggle('is.active');
  menuLinks.classList.toggle('active');
  hambgOne.classList.toggle('onetoggled');
  hambgTwo.classList.toggle('twotoggled');
  hambgThree.classList.toggle('threetoggled');
};

menu.addEventListener('click', mobileMenu);

/* Mobile Menu */

/* SCroll pos */

const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const home = document.querySelector('#home-link');
  const about = document.querySelector('#about-link');
  const projects = document.querySelector('#projects-link');
  const footer = document.querySelector('#footer-link');
  const aboutTitle = document.querySelector('.about-title');
  const projectsTitle = document.querySelector('.projects-title');
  const footerTitle = document.querySelector('.footer-title');
  let scrollPos = window.scrollY;
  //console.log(scrollPos)

  //adds 'highlight' class to my menu items

  if (window.innerWidth > 960 && scrollPos < 660) {
    home.classList.add('highlight');
    about.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    about.classList.add('highlight');
    home.classList.remove('highlight');
    projects.classList.remove('highlight');
    aboutTitle.classList.add('slide-about');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2345) {
    projects.classList.add('highlight');
    about.classList.remove('highlight');
    footer.classList.remove('highlight');
    projectsTitle.classList.add('slide-projects');

    return;
  } else if (window.innerWidth > 960 && scrollPos < 3000) {
    projects.classList.remove('highlight');
    about.classList.remove('highlight');
    footer.classList.add('highlight');
    footerTitle.classList.add('slide-footer');
    return;
  }
  if ((elem && window.innerWidth < 1200) || elem) {
    elem.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

document.querySelector('.home-anc').addEventListener('click', event => {
  if (window.innerWidth <= 960) {
    menuLinks.classList.remove('active');
  }
});

document.querySelector('.about-anc').addEventListener('click', event => {
  if (window.innerWidth <= 960) {
    menuLinks.classList.remove('active');
  }
});

document.querySelector('.projects-anc').addEventListener('click', event => {
  if (window.innerWidth <= 960) {
    menuLinks.classList.remove('active');
  }
});

document.querySelector('.footer-anc').addEventListener('click', event => {
  if (window.innerWidth <= 960) {
    menuLinks.classList.remove('active');
  }
});

const btnAll = document.getElementById('btn-all');
const btnReact = document.getElementById('btn-react');
const btnNode = document.getElementById('btn-node');
const btnOther = document.getElementById('btn-other');

const spotifyImage = document.getElementById('spotify-img');
const webshopImage = document.getElementById('webshop-img');
const dashboardImage = document.getElementById('dashboard-img');
const klarnaImage = document.getElementById('klarna-img');
const countdownImage = document.getElementById('countdown-img');

btnAll.addEventListener('click', () => {
  spotifyImage.classList.remove('remove');
  webshopImage.classList.remove('remove');
  dashboardImage.classList.remove('remove');
  klarnaImage.classList.remove('remove');
  countdownImage.classList.remove('remove');
  btnAll.classList.add('highlighted-btn');
  btnReact.classList.remove('highlighted-btn');
  btnNode.classList.remove('highlighted-btn');
  btnOther.classList.remove('highlighted-btn');
});

btnReact.addEventListener('click', () => {
  spotifyImage.classList.remove('remove');
  webshopImage.classList.remove('remove');
  dashboardImage.classList.add('remove');
  klarnaImage.classList.add('remove');
  countdownImage.classList.add('remove');
  btnAll.classList.remove('highlighted-btn');
  btnReact.classList.add('highlighted-btn');
  btnNode.classList.remove('highlighted-btn');
  btnOther.classList.remove('highlighted-btn');
});

btnNode.addEventListener('click', () => {
  spotifyImage.classList.add('remove');
  webshopImage.classList.add('remove');
  dashboardImage.classList.add('remove');
  klarnaImage.classList.remove('remove');
  countdownImage.classList.add('remove');
  btnAll.classList.remove('highlighted-btn');
  btnReact.classList.remove('highlighted-btn');
  btnNode.classList.add('highlighted-btn');
  btnOther.classList.remove('highlighted-btn');
});

btnOther.addEventListener('click', () => {
  spotifyImage.classList.add('remove');
  webshopImage.classList.add('remove');
  dashboardImage.classList.remove('remove');
  klarnaImage.classList.add('remove');
  countdownImage.classList.remove('remove');
  btnAll.classList.remove('highlighted-btn');
  btnReact.classList.remove('highlighted-btn');
  btnNode.classList.remove('highlighted-btn');
  btnOther.classList.add('highlighted-btn');
});

/* The four buttons */

const motivation = document.querySelector('.motivation');
const worketh = document.querySelector('.worketh');
const innovation = document.querySelector('.innovation');
const interests = document.querySelector('.interests');

motivation.addEventListener('click', () => {
  motivation.classList.toggle('hey');
  if (motivation.classList.contains('hey')) {
    motivation.innerHTML = '"Just work like hell" - Elon Musk';
  } else if (!motivation.classList.contains('hey')) {
    motivation.innerHTML = 'Staying motivated ? Tap me.';
  }
});

worketh.addEventListener('click', () => {
  worketh.classList.toggle('hey');
  if (worketh.classList.contains('hey')) {
    worketh.innerHTML = 'Respect, productivty & discipline';
  } else if (!worketh.classList.contains('hey')) {
    worketh.innerHTML = 'My work ethic ? Tap me.';
  }
});

innovation.addEventListener('click', () => {
  innovation.classList.toggle('hey');
  if (innovation.classList.contains('hey')) {
    innovation.innerHTML =
      'Following trends, staying creative, thinking scalable';
  } else if (!innovation.classList.contains('hey')) {
    innovation.innerHTML = ' Staying innovative ? Tap me.';
  }
});

interests.addEventListener('click', () => {
  interests.classList.toggle('hey');
  if (interests.classList.contains('hey')) {
    interests.innerHTML = 'Finance, data analytics & video games. ';
  } else if (!interests.classList.contains('hey')) {
    interests.innerHTML = 'My interests ?  Tap me.';
  }
});

// const express = require('express');
// const path = require('path');
// const dotenv = require('dotenv');
// const livereload = require('livereload');
// const connectLivereload = require('connect-livereload');

// const app = express();
// const router = express.Router();

// app.use(connectLivereload());

// // Allow clients to reach the following folder contents:
// app.use('/style', express.static(__dirname + '/style'));
// app.use('/img', express.static(__dirname + '/img'));
// app.use('/fonts', express.static(__dirname + '/fonts'));
// app.use('/scripts', express.static(__dirname + '/scripts'));
// app.use('/cv', express.static(__dirname + '/cv'));
// dotenv.config(express.static(__dirname + '../.env'));

// const liveReloadServer = livereload.createServer();
// liveReloadServer.watch(path.join(__dirname, '/style'));
// liveReloadServer.watch(path.join(__dirname, '/img'));
// liveReloadServer.watch(path.join(__dirname, '/fonts'));
// liveReloadServer.watch(path.join(__dirname, '/scripts'));
// liveReloadServer.watch(path.join(__dirname, '/cv'));

// router.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname + '/index.html'));
// });

// //add the router
// app.use('/', router);
// const PORT = process.env.PORT || 3000;
// const HOST = process.env.HOST || '0.0.0.0';
// app.listen(PORT, HOST, function () {
//   console.log(`App listening on port ${HOST}:${PORT}`);
//   liveReloadServer.server.once('connection', () => {
//     setTimeout(() => {
//       liveReloadServer.refresh('/');
//     }, 100);
//   });
// });
