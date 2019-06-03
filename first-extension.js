const callback = function(mutationsList, observer) {
    let images = document.querySelectorAll('img[class*="EntityPhoto"]')

    for (i = 0; i < images.length; i++) {
        images[i].src = browser.runtime.getURL("images/kitten.jpg")
    }
}

// Options for the observer (which mutations to observe)
const config = { childList: true, subtree: true }

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback)

// Start observing the target node for configured mutations
observer.observe(document.body, config)