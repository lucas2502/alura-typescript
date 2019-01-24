const $root = document.querySelector("#root");

const $cardsWrapper =  createCardsWrapper();
const $memoryCard = createMemoryCard("","icon-collabcode.png", "Gaio mascote collacode");
const $memoryCardCPlusPlus = createMemoryCard("-front","icon-c.png", "Book c++");
const $memoryCardJs = createMemoryCard("-front", "-icon-js.png", "Book JavaScript");
const $memoryCardBug = createMemoryCard("-front", "icon-bug.png", "Icon bug");
const $memoryCardCabeca = createMemoryCard("-front", "icon-cabeca.png", "Icon Head");
const $memoryCardCelular = createMemoryCard("-front", "icon-celular.png", "Icon Celphone"); 
const $memoryCardJava = createMemoryCard("-front", "icon-java.png", "Book Java");
const $memoryCardPhp = createMemoryCard("-front", "icon-php.png", "Book php");
const $memoryCardResponsive = createMemoryCard("-front", "icon-responsivo.png", "Icon Responsive");
const $memoryCardSettings = createMemoryCard("-front", "icon-settings.png", "Icon Setings");
const $memoryCardWoman = createMemoryCard("-front", "icon-woman.png", "Icon Woman");

$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardCPlusPlus);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardCPlusPlus);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJs);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJs);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardBug);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardBug);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardCabeca);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardCabeca);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardCelular);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardCelular);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJava);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJava);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardPhp);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardPhp);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardResponsive);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardResponsive);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardSettings);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardSettings);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardWoman);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardWoman);


$root.insertAdjacentElement("beforeend", $cardsWrapper);
