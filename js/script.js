"use strict";
// SELECTIONS/////////////////////////////////////////////////////////////////////////////////////////
const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay");
const menuIcon = document.querySelector(".menu-icon");
const allChatTypes = document.querySelectorAll(".filter-chat");
const chatFilterContainer = document.querySelector(".chats-types-col");
const allChatPreviews = document.querySelectorAll(".chat-preview");
const allChatIcons = document.querySelectorAll(".chat-type-icon");
const allChatTypeTexts = document.querySelectorAll(".chat-type-text");
const previewContainer = document.querySelector(".all-chats-col");
const chatTimes = document.querySelectorAll(".chat-time");
const allChatPreviewMessages = document.querySelectorAll(
  ".chat-preview-message"
);
const chat = document.querySelector(".chat");
const chatStartTime = document.querySelector(".chat-start-time");
const chatName = document.querySelector(".chat-name");
const lastVisit = document.querySelector(".last-visit");
const channelSub = document.querySelector(".channel-sub");
const chatPage = document.querySelector(".chat-page");
const defaultMessage = document.querySelector(".default-message");
// FUNCTIONS/////////////////////////////////////////////////////////////////////////////////////////
const classAdder = function (target, newClass) {
  target.forEach((el) => el.classList.add(`${newClass}`));
};

const classRemover = function (target, oldClass) {
  target.forEach((el) => el.classList.remove(`${oldClass}`));
};

const chatStartTimeRender = function (time) {
  console.log(time);
  const chatStartTime = `
      <div class="chat-start-time mx-auto text-white px-2 mb-auto">
        ${time}
      </div>`;
  chat.insertAdjacentHTML("afterbegin", chatStartTime);
};

const sendMessageRender = function (message) {
  const sendMessage = `
        <p class="sended text-white p-2 ms-auto d-flex algin-items-center">
          ${message[0]}
          <span class="message-time ps-1">
          ${message[1]}</span>
          <img       
            src="svg/double-tick-icon.svg"
            class="double-tick-icon ms-1"/>
        </p>`;
  chat.insertAdjacentHTML("beforeend", sendMessage);
};

const receiveMessageRender = function (message) {
  const receiveMessage = `
        <p class="received text-white p-2 d-flex">
          ${message[0]}
          <span class="message-time ps-1">${message[1]}</span>
        </p>`;
  chat.insertAdjacentHTML("beforeend", receiveMessage);
};

const personalChatRender = function (data) {
  chatStartTimeRender(data.starterTime);
  Object.entries(data).forEach((message) => {
    if (message[0].includes("sended")) sendMessageRender(message[1]);
    if (message[0].includes("received")) receiveMessageRender(message[1]);
  });
};

const channelPostRender = function (data) {
  console.log(data);
  chatStartTimeRender(data.starterTime);
  Object.entries(data.posts).forEach((post) => {
    const html = `
      <div class="card post mt-1" style="width: 18rem">
      <span class="post-signature p-1">${post[1].postSignature}</span>
      <img src="images/${post[1].postImgSrc}" />
      <div class="card-body">
        <p class="card-text persian-text text-end">
          ${post[1].postText}
        </p>
        <br />
        <a class="card-text post-links">
          ${post[1].channelLinks}
        </a>
        <div class="post-details d-flex justify-content-end">
          <img class="eye-icon me-1 " src="svg/eye-icon.svg" alt="" />
          ${post[1].postDetails}
        </div>
      </div>
    </div>`;
    chat.insertAdjacentHTML("beforeend", html);
  });
  defaultMarginBottomManager();
  chatTitleHandler(data.channelName);
};

const defaultMarginBottomManager = function () {
  const html = `<div class="def"></div>`;
  chat.insertAdjacentHTML("beforeend", html);
};

const chatTitleHandler = function (title, channelSubs) {
  chatName.textContent = title.textContent;
  if (!channelSubs) return;
  lastVisit.classList.add("d-none");
  channelSub.classList.remove("d-none");
};

const chatHandler = function (chatName) {
  console.log(messages.channels[chatName.replaceAll(" ", "").trim()]);
  channelPostRender(messages.channels[chatName]);
};
// EVENT HANDLERS///////////////////////////////////////////////////////////////////////////////////
menuIcon.addEventListener("click", function () {
  sidebar.classList.add("sidebar-shower", "box-shadow");
  overlay.classList.remove("d-none");
});

overlay.addEventListener("click", function () {
  sidebar.classList.remove("sidebar-shower", "box-shadow");
  overlay.classList.add("d-none");
});
chatFilterContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".filter-chat");
  if (!clicked) return;
  const text = clicked.textContent.replace(/\s/g, "").replace(/\d+/g, "");
  const filteredChats = document.querySelectorAll(
    `.${text.toLowerCase()}-chat`
  );
  classRemover(allChatIcons, "active-icon");
  classRemover(allChatTypeTexts, "active-text");
  classRemover(allChatTypes, "active-chat");
  clicked.classList.add("active-chat");
  clicked.querySelector(".chat-type-icon").classList.add("active-icon");
  clicked.querySelector(".chat-type-text").classList.add("active-text");
  if (text === "Allchats") return classRemover(allChatPreviews, "d-none");
  if (text === "unread") {
    classRemover(allChatPreviews, "d-none");
    return classAdder(
      [...allChatPreviews].filter(
        (chat) => !chat.children[2].querySelector(".chat-badge")
      ),
      "d-none"
    );
  }
  classAdder(allChatPreviews, "d-none");
  classRemover(filteredChats, "d-none");
});

previewContainer.addEventListener("click", function (e) {
  const item = e.target.closest(".chat-preview");
  if (!item) return;
  defaultMessage.classList.add("d-none");
  chatPage.classList.remove("d-none");
  classRemover(allChatPreviews, "active-preview");
  item.classList.add("active-preview");
  classRemover(allChatPreviewMessages, "text-white");
  item.querySelector(".chat-preview-message").classList.add("text-white");
  classRemover(chatTimes, "text-white");
  item.querySelector(".chat-time").classList.add("text-white");
  const chatTitle = item.querySelector(".chat-title");
  chatTitleHandler(chatTitle);
  chatHandler(chatTitle.textContent);
});

personalChatRender(messages.personal.amir);
