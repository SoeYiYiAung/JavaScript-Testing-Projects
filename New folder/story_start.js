//Setup website here
let hero = document.querySelector("#hero");
let villain = document.querySelector("#villain");
let lightning = document.querySelector("#lightning");

//Setup animation code here
let lightingStart={"left":"290px","top":"320px"}
let lightingEnd={"left":"900px","top":"0px"}
let options={"duration":1000}

let hitTheVillain = () => {
    let villianStart = {
        transform: 'rotate(0deg)',
        opacity: 100
    };
    //transform: 'scale(1)'

    let villianEnd = {
        transform: 'rotate(1000deg)',
        opacity: 0
    };
     //transform: 'scale(0)'


    let options = {"duration": 1500};
    villianEnd.animate([villiainStart,villianEnd],options)
    
}
//Run animation code here
lightning.animate([lightingStart,lightingEnd],options).onfinish= hitTheVillian;