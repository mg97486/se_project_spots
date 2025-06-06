const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseButton = editProfileModal.querySelector(
  ".modal__close-button"
);
const editProfileForm = editProfileModal.querySelector(".modal__form");
const editProfileNameInput = editProfileModal.querySelector("#name-input");
const editProfileDescriptionInput =
  editProfileModal.querySelector("#description-input");

const newPostBtn = document.querySelector(".profile__post-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostFormElement = newPostModal.querySelector(".modal__form");
const newPostImageLinkInput = document.querySelector("#card-image-input");
const newPostCaptionInput = document.querySelector("#caption-input");
const newPostCloseButton = newPostModal.querySelector(".modal__close-button");

const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");

editProfileBtn.addEventListener("click", function () {
  editProfileNameInput.value = profileNameEl.textContent;
  editProfileDescriptionInput.value = profileDescriptionEl.textContent;
  editProfileModal.classList.add("modal_is-opened");
});

editProfileCloseButton.addEventListener("click", function () {
  editProfileModal.classList.remove("modal_is-opened");
});

newPostBtn.addEventListener("click", function () {
  newPostModal.classList.add("modal_is-opened");
});

newPostCloseButton.addEventListener("click", function () {
  newPostModal.classList.remove("modal_is-opened");
});

function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  profileNameEl.textContent = editProfileNameInput.value;
  profileDescriptionEl.textContent = editProfileDescriptionInput.value;
  editProfileModal.classList.remove("modal_is-opened");
}

function handleAddCardSubmit(evt) {
  evt.preventDefault();
  console.log(newPostImageLinkInput);
  console.log(newPostCaptionInput);
  newPostModal.classList.remove("modal_is-opened");
}

newPostFormElement.addEventListener("submit", handleAddCardSubmit);
editProfileForm.addEventListener("submit", handleEditProfileSubmit);
