document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('portfolio-image').addEventListener('click', function () {
        alert("That's me bro... that's me. And the goodness of the Lord knows no bounds.")
    })
    document.getElementById('html-skill').addEventListener('mouseover', function () {
        this.src = "assets/images/skills/html-skill.png"
    })
    document.getElementById('html-skill').addEventListener('mouseout', function () {
        this.src = "assets/images/skills/html-skill-nc.png"
    })
    document.getElementById('js-skill').addEventListener('mouseover', function () {
        this.src = "assets/images/skills/js-skill.png"
    })
    document.getElementById('js-skill').addEventListener('mouseout', function () {
        this.src = "assets/images/skills/js-skill-nc.png"
    })
    document.getElementById('bootstrap-skill').addEventListener('mouseover', function () {
        this.src = "assets/images/skills/bootstrap-skill.png"
    })
    document.getElementById('bootstrap-skill').addEventListener('mouseout', function () {
        this.src = "assets/images/skills/bootstrap-skill-nc.png"
    })
})