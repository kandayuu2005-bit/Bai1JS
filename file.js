
const divT = document.querySelector('.div');
(function insertImg(divT){
    optionImg = [
    "img/Allen_Walker.jpg",
    "img/Futura_Nimura.jpg",
    "img/Futura_Nimura1.jpg",
    "img/Jogo.jpg",
    "img/Katakuri.jpg",
    "img/Kore.jpg",
    ];
    aboutHim = [
        "A good day after an uncomfortable storm too! The life still has the problem, but that is the life, so normal...",
        "Hello, why don't you try the feeling sinking into another view...",
        "Too tired... let's free!",
        "Too joy to breathing...",
        "Let's try!",
        "I wait for your success! My pupils",
    ]

    for(var i = 0; i < optionImg.length; i++){
        const diS = document.createElement("div");
        const img = document.createElement("img");
        const dip = document.createElement("div");
        const p = document.createElement("p");
        // const g;

        img.src = optionImg[i];

        if(i < 3){
            al = optionImg[i].replace(".jpg", "");
            al1 = al.replace("_", " ");
        }else{
            al1 = optionImg[i].replace(".jpg", "");
        }
        img.alt = "This is " + al1 + "! Source: " + optionImg[i];

        img.tabindex = 0;

        p.textContent = aboutHim[i];
        // g.innerHTML = "<hr><hr><hr>";
        
        dip.appendChild(p);
        // dip.appendChild(g);
        diS.appendChild(img);
        diS.appendChild(dip);
        divT.appendChild(diS);

        img.addEventListener(
            'mouseover',
            function dis(e){
                dip.style.display = 'block';
            }
        );
        img.addEventListener(
            'mouseout',
            function hid(e){
                dip.style.display = 'none';
            }
        );
    }
})(divT);
// const divT = document.querySelector('.div');

// const divp = "";
// (function setDivp(divp){ 
//     for(var i = 0; i < optionImg.length; i++){
//         divp += document.getElementById("vb" + i)
//     }
// })(divp);


