function switchoff() {
    document.getElementById("blubimage").src="https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById("catimage").src="https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    document.getElementById("switchstatus").textContent="Switched Off";
    document.getElementById("onswitch").style.backgroundColor="#22c55e";
    document.getElementById("offswitch").style.backgroundColor="#cbd2d9";
}

function switchon() {
    document.getElementById("blubimage").src="https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById("catimage").src="https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("switchstatus").textContent="Switched On";
    document.getElementById("onswitch").style.backgroundColor="#cdb2d9";
    document.getElementById("offswitch").style.backgroundColor="#e12d39";
}