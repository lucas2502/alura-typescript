const createMemoryCard = (value) => {
    return `
        <article class="memory-card ` + value + `">
            <img src='img/icon-collabcode.png' 
            alt='Gaio Mascote da Collabcode' 
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