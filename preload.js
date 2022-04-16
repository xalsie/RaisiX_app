// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }
})

window.addEventListener("load", function(event) {
  load();

  console.log("Toutes les ressources sont chargées !");
});

function load() {
  const localLink = document.querySelectorAll("link");
  // const localLink = link.getAttribute("data-href");

  // localLink[1].attributes["href"].value = "app://C:/wamp64/www/raisix-desktop/assets/css/bootstrap.min.css";

  // localLink.forEach(element => {
    console.log("Count link : "+localLink.length);

    // for (let i = 0; i < localLink.length-1; i++) {
    
    //   let path = localLink[i].attributes;
    //   if (path["href"]) {
    //     console.log(`${__dirname}`+path["href"].value);

    //     path["href"].value = "app://"+__dirname+path["href"].value;

    //   }
    // }
    // element.src = `${element.dataset.path}`
  // })
}