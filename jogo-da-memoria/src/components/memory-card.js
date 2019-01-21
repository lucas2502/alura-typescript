function createMemoryCard(){
    const $memoryCard = document.createElement("article");
    
    const $icon = `<img 
    src='img/icon-collabcode.png' 
    alt='Gaio Mascote da Collabcode' 
    class='icon'
    >`
    $memoryCard.classList.add("memory-card");
    $root.insertBefore($memoryCard, null);    

    $memoryCard.insertAdjacentHTML("afterbegin", $icon);
};