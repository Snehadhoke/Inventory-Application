let isLoggedIn = false;
const inventory = [];

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Implement actual authentication logic here
  // For now, let's assume username "admin" and password "password"
  if (username === "admin" && password === "password") {
    isLoggedIn = true;
    showInventory();
  }
}

function showInventory() {
  if (isLoggedIn) {
    document.getElementById("login-container").style.display = "none";
    document.getElementById("inventory-container").style.display = "block";

    // Implement the inventory UI and logic here
    // You can add buttons for add, delete, update, show, and notifications
  }
}
const notifications = document.getElementById("notifications");
const itemList = document.getElementById("item-list");
const itemNameInput = document.getElementById("item-name");

function addItem() {
  const itemName = itemNameInput.value;
  if (itemName.trim() === "") {
    showNotification("Item name cannot be empty.", "error");
    return;
  }

  const newItem = document.createElement("li");
  newItem.innerHTML = `
    ${itemName}
    <button onclick="deleteItem(this)">Delete</button> 
    <button onclick="editItem(this)">Edit</button>
  `;
  itemList.appendChild(newItem);
  itemNameInput.value = "";
  showNotification("Item added successfully.", "success");
}

function deleteItem(item) {
  const listItem = item.parentElement;
  itemList.removeChild(listItem);
  showNotification("Item deleted.", "success");
}

function editItem(item) {
  const newName = prompt("Enter new item name:");
  if (newName !== null && newName.trim() !== "") {
    item.parentElement.firstChild.textContent = newName;
    showNotification("Item updated.", "success");
  }
}

function showNotification(message, type) {
  const notification = document.createElement("div");
  notification.className = `notification ${type}`;
  notification.textContent = message;
  notifications.appendChild(notification);

  setTimeout(() => {
    notifications.removeChild(notification);
  }, 3000);
}

