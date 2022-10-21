import "./css/index.css"

const ccBgColor01 = document.querySelector(".cc-bg svg > g g:nth-child(1) path")
const ccBgColor02 = document.querySelector(".cc-bg svg > g g:nth-child(2) path")
const ccLogo = document.querySelector(".cc-logo span:nth-child(2) img")
const ccColorButton = document.querySelector("form button").style
console.log(ccColorButton)

function setCardType(type) {
  const colors = {
    visa: ["#436d99", "#2d57f2"],
    elo: ["#EF4123", "#FFCB05"],
    mastercard: ["#df6f29", "#c69347"],
    default: ["black", "gray"],
  }
  ccBgColor01.setAttribute("fill", colors[type][0])
  ccBgColor02.setAttribute("fill", colors[type][1])
  ccLogo.setAttribute("src", `cc-${type}.svg`)
  ccColorButton.backgroundColor = colors[type][0]
}

globalThis.setCardType = setCardType
