const createMemoryCard = (value) => {
    const $memoryCard = `
        <article class="memory-card ` + value + `">
            <img src='img/icon-collabcode.png' 
            alt='Gaio Mascote da Collabcode' 
            class='icon' onLick="handleClick">
        </article>
    `;
    return $memoryCard;
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


function handleClick(){
    console.log("Funciona");
};