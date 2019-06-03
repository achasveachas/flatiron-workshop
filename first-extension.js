let images = document.querySelectorAll('img[class*="EntityPhoto"]')
for (i = 0; i < images.length; i++) {
    images[i].src = browser.runtime.getURL("images/kitten.jpg")
}  