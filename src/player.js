/**
 * Copyright © 2024 ZazerConer's
 * Radio Stream Malaysia (Player JS)
 * https://github.com/ZazerConer/radio-stream-malaysia/blob/master/src/player.js
 * Licensed under MIT (https://github.com/ZazerConer/radio-stream-malaysia/blob/master/LICENSE)
**/

"use-strict";

const player = document.querySelector("#player");

player.insertAdjacentHTML("afterbegin", `
  <span class="stream-name"></span>
  <svg class="finder" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M.696 8c1.649-4.66 6.08-8 11.304-8 6.627 0 12 5.373 12 12 0 .683-.07 1.348-.18 2h-1.523c-1.137 0-1.316-.507-1.932-2.461-.445-1.414-1.184-3.551-2.811-3.551-1.656 0-2.297 2.215-2.893 4.006-.325.973-.521 1.561-.812 1.561-.279 0-.411-.588-.74-1.563-.616-1.822-1.319-4.003-2.965-4.003-1.705 0-2.436 2.387-2.925 3.908-.354 1.105-.466 1.659-.78 1.659-.267 0-.352-.449-.66-1.344-.701-2.041-.925-4.212-4.06-4.212h-1.023zm21.458 8c-2.297 0-2.845-1.101-3.703-3.563-.531-1.528-.588-2.074-.896-2.074-.301 0-.387.627-.979 2.312-.519 1.475-1.231 3.311-2.727 3.311-1.664 0-2.371-2.225-2.983-4.076-.339-1.024-.425-1.491-.722-1.491-.275 0-.35.42-.696 1.436-.636 1.872-1.341 4.132-3.009 4.132-1.646 0-2.399-2.223-2.809-3.551-.605-1.965-.712-2.436-1.811-2.436h-1.639c-.11.652-.18 1.317-.18 2 0 6.627 5.373 12 12 12 5.223 0 9.653-3.342 11.303-8h-1.149z"/></svg>
  <svg class="status" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="green"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 2c5.514 0 10 4.486 10 10 0 .685-.07 1.354-.201 2h-.973c-.975 0-1.129-.507-1.656-2.461-.381-1.414-1.014-3.551-2.408-3.551-1.42 0-1.969 2.215-2.48 4.006-.278.973-.446 1.561-.695 1.561-.24 0-.353-.588-.635-1.563-.528-1.822-1.132-4.003-2.541-4.003-1.463 0-2.088 2.387-2.507 3.908-.304 1.105-.399 1.659-.669 1.659-.229 0-.303-.449-.566-1.344-.602-2.04-.793-4.208-3.48-4.208h-.35c1.546-3.53 5.068-6.004 9.161-6.004zm0 20c-5.514 0-10-4.486-10-10 0-.685.07-1.354.201-2h1.073c.94 0 1.032.471 1.552 2.435.351 1.328.996 3.551 2.408 3.551 1.43 0 2.033-2.26 2.579-4.132.296-1.015.36-1.436.597-1.436.254 0 .328.467.618 1.491.524 1.851 1.13 4.076 2.558 4.076 1.28 0 1.892-1.836 2.336-3.311.508-1.686.582-2.312.84-2.312.264 0 .312.546.768 2.074.735 2.463 1.204 3.564 3.173 3.564h.456c-1.547 3.527-5.067 6-9.159 6z"/></svg>
  <svg class="unknow" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="red"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 2c5.514 0 10 4.486 10 10 0 .685-.07 1.354-.201 2h-.973c-.975 0-1.129-.507-1.656-2.461-.381-1.414-1.014-3.551-2.408-3.551-1.42 0-1.969 2.215-2.48 4.006-.278.973-.446 1.561-.695 1.561-.24 0-.353-.588-.635-1.563-.528-1.822-1.132-4.003-2.541-4.003-1.463 0-2.088 2.387-2.507 3.908-.304 1.105-.399 1.659-.669 1.659-.229 0-.303-.449-.566-1.344-.602-2.04-.793-4.208-3.48-4.208h-.35c1.546-3.53 5.068-6.004 9.161-6.004zm0 20c-5.514 0-10-4.486-10-10 0-.685.07-1.354.201-2h1.073c.94 0 1.032.471 1.552 2.435.351 1.328.996 3.551 2.408 3.551 1.43 0 2.033-2.26 2.579-4.132.296-1.015.36-1.436.597-1.436.254 0 .328.467.618 1.491.524 1.851 1.13 4.076 2.558 4.076 1.28 0 1.892-1.836 2.336-3.311.508-1.686.582-2.312.84-2.312.264 0 .312.546.768 2.074.735 2.463 1.204 3.564 3.173 3.564h.456c-1.547 3.527-5.067 6-9.159 6z"/></svg>  
  <div class="info-stream">
    <img class="img-logo">
    <div class="data">
      <span id="description"></span>
    </div>
  </div>
  <div id="play-pause">
    <svg class="btn-play" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="currentColor"><path d="M2 24v-24l20 12-20 12z"/></svg>
    <svg class="btn-pause" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="currentColor"><path d="M10 24h-6v-24h6v24zm10-24h-6v24h6v-24z"/></svg>
  </div>
  <svg class="btn-mute" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M6 7l8-5v20l-8-5v-10zm-6 10h4v-10h-4v10zm20.264-13.264l-1.497 1.497c1.847 1.783 2.983 4.157 2.983 6.767 0 2.61-1.135 4.984-2.983 6.766l1.498 1.498c2.305-2.153 3.735-5.055 3.735-8.264s-1.43-6.11-3.736-8.264zm-.489 8.264c0-2.084-.915-3.967-2.384-5.391l-1.503 1.503c1.011 1.049 1.637 2.401 1.637 3.888 0 1.488-.623 2.841-1.634 3.891l1.503 1.503c1.468-1.424 2.381-3.309 2.381-5.394z"/></svg>
  <svg class="btn-unmute" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M22 1.269l-18.455 22.731-1.545-1.269 3.841-4.731h-1.827v-10h4.986v6.091l2.014-2.463v-3.628l5.365-2.981 4.076-5.019 1.545 1.269zm-10.986 15.926v.805l8.986 5v-16.873l-8.986 11.068z"/></svg>
  <div id="container-list"></div>
  <svg class="btn-list" id="btn-list" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" fill="currentColor"><path d="m10.5 17.25c0-.414.336-.75.75-.75h10c.414 0 .75.336.75.75s-.336.75-.75.75h-10c-.414 0-.75-.336-.75-.75zm-1.5-3.55c0-.53-.47-1-1-1h-5c-.53 0-1 .47-1 1v4.3c0 .53.47 1 1 1h5c.53 0 1-.47 1-1zm1.5-1.7c0-.414.336-.75.75-.75h10c.414 0 .75.336.75.75s-.336.75-.75.75h-10c-.414 0-.75-.336-.75-.75zm-1.5-6c0-.53-.47-1-1-1h-5c-.53 0-1 .47-1 1v4.3c0 .53.47 1 1 1h5c.53 0 1-.47 1-1zm1.5.75c0-.414.336-.75.75-.75h10c.414 0 .75.336.75.75s-.336.75-.75.75h-10c-.414 0-.75-.336-.75-.75z" fill-rule="nonzero"/></svg>
`);

const containerList = document.querySelector("#container-list");

function parser(stream) {
  for (let list of stream) {
    var div = document.createElement("div");
    var img = document.createElement("img");
    var span = document.createElement("span");
    var name = list.name;
    var image = list.image;
    var url = encryptURL(list.url);
    var desc = list.description;
    div.classList.add("content-list");
    div.setAttribute("data-name", name);
    div.setAttribute("data-image", image);
    div.setAttribute("data-url", url);
    div.setAttribute("data-desc", desc);
    img.src = image;
    img.alt = name;
    span.textContent = name;
    div.appendChild(img);
    div.appendChild(span);
    containerList.appendChild(div);
  }
}

parser(radioList());

const audio = new Audio();
const title = document.querySelector(".stream-name");
const finder = document.querySelector(".finder");
const status = document.querySelector(".status");
const unknow = document.querySelector(".unknow");
const imgLogo = document.querySelector(".img-logo");
const desciption = document.querySelector("#description");
const playpause = document.querySelector("#play-pause");
const btnPlay = document.querySelector(".btn-play");
const btnPause = document.querySelector(".btn-pause");
const btnMute = document.querySelector(".btn-mute");
const btnUnmute = document.querySelector(".btn-unmute");
const btnList = document.querySelector(".btn-list");

function load(name, image, url, desc) {
  title.textContent = name;

  Object.assign(imgLogo, {
    src: image,
    alt: name
  });
  Object.assign(audio, {
    src: url,
    type: "audio/mpeg"||"audio/ogg"||"audio/mp4"||"audio/x-m4a"||"audio/aac"||"audio/mpegurl"||"application/mpegurl"||"audio/x-mpegurl"||"application/x-mpegurl"||"application/vnd.apple.mpegurl.audio"||"application/vnd.apple.mpegurl",
    preload: "auto",
    crossorigin: "anonymous"
  });
  Object.assign(player.style, {
    background: `url(${image})`,
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundSize: "cover",
    webkitTransition: "background-image 1s",
    mozTransition: "background-image 1s",
    msTransition: "background-image 1s",
    transition: "background-image 1s"
  });

  description.textContent = desc;

  finder.style.visibility = "visible";
  status.style.visibility = "hidden";
  unknow.style.visibility = "hidden";
  playpause.style.display = "none";
  btnPlay.style.visibility = "visible";
  btnPause.style.visibility = "hidden";
  btnPlay.style.pointerEvents = "none";

  audio.load();

  audio.addEventListener("canplaythrough", function(ready) {
    if (ready) {
      audio.play();
      finder.style.visibility = "hidden";
      status.style.visibility = "visible";
      playpause.style.display = "block";
      btnPlay.style.pointerEvents = "auto";
      audio.addEventListener("loadstart", function(load) {
        if (load) showPopup("Memuatkan..");
      });
      audio.addEventListener("waiting", function(buffer) {
        if (buffer) showPopup("Menunggu..");
      });
      audio.addEventListener("playing", function(play) {
        if (play) {
          btnPlay.style.visibility = "hidden";
          btnPause.style.visibility = "visible";
          showPopup("Dimainkan");
        }
      });
      audio.addEventListener("pause", function(pause) {
        if (pause) {
          btnPlay.style.visibility = "visible";
          btnPause.style.visibility = "hidden";
          showPopup("Dihentikan");
        }
      });
    }
  });

  audio.addEventListener("error", function(error) {
    if (error) {
      finder.style.visibility = "hidden";
      unknow.style.visibility = "visible";
      showPopup("Tidak boleh dimainkan");
    }
  });
}

document.addEventListener("DOMContentLoaded", function() {
  var thisChild = containerList.firstChild;
  var stream = {
    name: thisChild.getAttribute("data-name"),
    img: thisChild.getAttribute("data-image"),
    url: thisChild.getAttribute("data-url"),
    desc: thisChild.getAttribute("data-desc")
  }
  thisChild.style.background = "rgba(85,85,85,0.6)";
  load(stream.name, stream.img, decryptURL(stream.url), stream.desc);
  showPopup("Radio Stream Malaysia");
  var count = countList("#container-list > .content-list");
  console.info(`Name: Radio Stream Malaysia\nPlaylist: ${count} stations`);
});

btnPlay.addEventListener("click", function(e) {
  e.preventDefault();
  audio.play();
  btnPlay.style.visibility = "hidden";
  btnPause.style.visibility = "visible";
});

btnPause.addEventListener("click", function(e) {
  e.preventDefault();
  audio.pause();
  btnPlay.style.visibility = "visible";
  btnPause.style.visibility = "hidden";
});

btnMute.addEventListener("click", function(e) {
  e.preventDefault();
  audio.muted = true;
  btnMute.style.visibility = "hidden";
  btnUnmute.style.visibility = "visible";
  showPopup("Disenyapkan");
});

btnUnmute.addEventListener("click", function(e) {
  e.preventDefault();
  audio.muted = false;
  btnMute.style.visibility = "visible";
  btnUnmute.style.visibility = "hidden";
  showPopup("Nyahredam");
});

btnList.addEventListener("click", function(e) {
  e.preventDefault();
  if (containerList.style.width === "75%") {
    containerList.style.width = "0%";
    containerList.style.borderRight = "none";
    setTimeout(function() {
      title.style.zIndex = "1";
    }, 500);
  } else {
    containerList.style.width = "75%";
    containerList.style.borderRight = "1.5px solid #555";
    title.style.zIndex = "0";
  }
});

const listChild = document.querySelectorAll("#container-list .content-list");

listChild.forEach(function(thisChild) {
  var stream = {
    name: thisChild.getAttribute("data-name"),
    img: thisChild.getAttribute("data-image"),
    url: thisChild.getAttribute("data-url"),
    desc: thisChild.getAttribute("data-desc")
  }
  thisChild.addEventListener("click", function(e) {
    e.preventDefault();
    if (!audio.paused) audio.pause();
    listChild.forEach(function(allChild) {
      allChild.style.background = "transparent";
    });
    thisChild.style.background = "rgba(85,85,85,0.6)";
    load(stream.name, stream.img, decryptURL(stream.url), stream.desc);
  });
  thisChild.addEventListener("contextmenu", function(e) {
    e.preventDefault();
    if (!audio.paused) audio.pause();
    listChild.forEach(function(allChild) {
      allChild.style.background = "transparent";
    });
    thisChild.style.background = "rgba(85,85,85,0.6)";
    load(stream.name, stream.img, decryptURL(stream.url), stream.desc);
  });
});

document.addEventListener("click", function(e) {
  if (e.target.id !== "btn-list" &&
      !btnList.contains(e.target) &&
      e.target.id !== "container-list" &&
      !containerList.contains(e.target)) {
    if (containerList.style.width === "75%") {
      containerList.style.width = "0%";
      containerList.style.borderRight = "none";
      setTimeout(function() {
        title.style.zIndex = "1";
      }, 500);
    }
  }
});

document.addEventListener("dblclick", function(e) {
  e.preventDefault();
  if (audio.paused === true) {
    audio.play();
  } else {
    audio.pause();
  }
}, false);

function encryptURL(url) {
  if (url) {
    return escape(
      btoa(encodeURIComponent(url))
    );
  }
}

function decryptURL(index) {
  if (index) {
    return decodeURIComponent(
      atob(unescape(index))
    );
  }
}

function showPopup(text) {
  var span = document.createElement("span");
  span.classList.add("show-popup");
  span.textContent = text;
  document.body.appendChild(span);
  setTimeout(function() {
    document.body.removeChild(span);
  }, 2500);
}

function countList(elems) {
  if (elems) {
    return document.querySelectorAll(elems).length;
  }
}
