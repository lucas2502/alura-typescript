const createMemoryCard = (nameClass, nameImg, altImg) => {
    return `
        <article class="memory-card ${nameClass}">
            <img src='img/${nameImg}' 
            alt='${altImg}' 
            class='icon' onClick="handleClick()">
        </article>
    `;
    
};
/*
function createMemoryCardFront(){
    const $memoryCardFront = `
    <article class="memory-card -front">
        <img src='img/icon-c.png' 
        alt='Gaio Mascote da Collabcode' 
        class='icon' onClick="handleClick()">
    </article>
    `;
    return $memoryCardFront;
};*/


const handleClick = () => console.log("Funciona");