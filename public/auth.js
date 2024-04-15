const isLoggedIn = localStorage.getItem("loggedIn") === "true"

for (const element of Array.from(document.querySelectorAll('[requires-authentication]'))) {
  if (isLoggedIn) {
    element.style.display = 'block'
  } else {
    element.style.display = 'none'
  }
}
for (const element of Array.from(document.querySelectorAll('[requires-no-authentication]'))) {
  if (isLoggedIn) {
    element.style.display = 'none'
  } else {
    element.style.display = 'block'
  }
}