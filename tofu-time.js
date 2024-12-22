const tofu = [];
var tofu_parent = document.getElementById("tofu_parent");
var animate_tofu = document.getElementById("animate_tofu");
tofu.push(animate_tofu);

console.log(window.innerWidth);

function cloneTofu() {
    for (var i = 0; i < 8; i++) {
        tofu.push(animate_tofu.cloneNode(true));
        
        tofu[i + 1].style.left = window.innerWidth / 8 * (i + 1) + "px";
        tofu_parent.appendChild(tofu[i + 1]);


    }
}

cloneTofu();

animate_tofu.style.left = "0px";

function moveTofu() {
    tofu.forEach(concreteTofu => {
        var newLeft = parseInt(concreteTofu.style.left.replace("px", '')) - 1;

        if (newLeft < -window.innerWidth / 8) {
            newLeft = window.innerWidth / 8 * 8;
        }

        concreteTofu.style.left = newLeft.toString() + "px";


    });

    
}

const example = setInterval(moveTofu, 20);