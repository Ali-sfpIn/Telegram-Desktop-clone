"use strict";
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
// FUNCTIONS
const classAdder = function (target, newClass) {
  target.forEach((el) => el.classList.add(`${newClass}`));
};

const classRemover = function (target, oldClass) {
  target.forEach((el) => el.classList.remove(`${oldClass}`));
};
// EVENT HANDLERS;
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
  classRemover(allChatPreviews, "active-preview");
  item.classList.add("active-preview");
  classRemover(allChatPreviewMessages, "text-white");
  item.querySelector(".chat-preview-message").classList.add("text-white");
  classRemover(chatTimes, "text-white");
  item.querySelector(".chat-time").classList.add("text-white");
});
