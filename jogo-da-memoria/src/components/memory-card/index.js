const memoryCard = () => {
    
    /*(function style(){*/
        const $head = document.querySelector("head");
        const $style = document.createElement("style");
        
    
        $style.textContent = `
            :root{
                --warm-pink: #f25a70;
            }
            
            .memory-card{
                width: 155px;
                height: 155px;
                box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
                background-color: var(--warm-pink);
                border-radius: 30px;
                display: flex;
                justify-content: center;
                align-items: center;
                position: relative;
                cursor: pointer;
            }
            
            .memory-card.-front{
                background-color: #fff;
            }
            
            .memory-card.-front::before{
                content:"";
                width: 100px;
                height: 100px;
                background-color: #d4d4d4;
                border-radius: 50%;
                position: absolute;
            }
            
            .memory-card > .icon {
                width: 100px;
                height: 100px;
            }
            
            .memory-card.-front > .icon {
                position: absolute;
                transform: translateY(-10px);
            }   
        `;
    
        $head.insertBefore($style, null);
    /*})();*/
    
    
    
    return (card) => `
        <article class="memory-card ${card.nameClass}">
            <img src='img/${card.nameImg}' 
            alt='${card.nameAlt}' 
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