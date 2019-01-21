const $root = document.querySelector("#root");
const $memoryCardFront = document.createElement("article");
createMemoryCard();

const $iconC = `<img 
    src='img/icon-c.png' 
    alt='Book C++' 
    class='icon'>`

$memoryCardFront.classList.add("memory-card");
$memoryCardFront.classList.add("-front");
$root.insertBefore($memoryCardFront, null);

$memoryCardFront.insertAdjacentHTML("afterbegin", $iconC);