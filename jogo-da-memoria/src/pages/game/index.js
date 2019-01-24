const $root = document.querySelector("#root");

const $cardsWrapper =  createCardsWrapper();
const $memoryCard = createMemoryCard();
//const $memoryCardFront = createMemoryCardFront();

$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard(-front));
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard(-front));

$root.insertAdjacentElement("beforeend", $cardsWrapper);
