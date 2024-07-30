const generateSVG = (responses, shape) => {
    return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
    ${shape.render()}
<text x="150" y="125" font-size="60" text-anchor="middle" fill="${responses.textColor}">${responses.text}</text>
</svg>`
}

module.exports = generateSVG;