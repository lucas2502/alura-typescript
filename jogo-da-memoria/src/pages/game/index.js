const $root = document.querySelector("#root");

const $cardsWrapper =  createCardsWrapper();

const createMemoryCard = memoryCard();

const $memoryCardGaio = createMemoryCard({
    nameClass: "",
    nameImg: "icon-collabcode.png", 
    nameAlt: "Gaio mascote collacode"
    });

const $memoryCardCPlusPlus = createMemoryCard({
    nameClass:  "-front",
    nameImg:  "icon-c.png", 
    nameAlt:  "Book c++"
    });

const $memoryCardJs = createMemoryCard({
    nameClass: "-front", 
    nameImg: "-icon-js.png", 
    nameAlt: "Book JavaScript"
    });
const $memoryCardBug = createMemoryCard({
    nameClass: "-front", 
    nameImg: "icon-bug.png", 
    nameAlt: "Icon bug"
    });
const $memoryCardCabeca = createMemoryCard({
    nameClass: "-front", 
    nameImg: "icon-cabeca.png", 
    nameAlt: "Icon Head"
    });
const $memoryCardCelular = createMemoryCard({
    nameClass: "-front", 
    nameImg: "icon-celular.png", 
    nameAlt: "Icon Celphone"
    }); 
const $memoryCardJava = createMemoryCard({
    nameClass: "-front", 
    nameImg: "icon-java.png", 
    nameAlt: "Book Java"
    });
const $memoryCardPhp = createMemoryCard({
    nameClass: "-front", 
    nameImg: "icon-php.png", 
    nameAlt: "Book php"
    });
const $memoryCardResponsive = createMemoryCard({
    nameClass: "-front", 
    nameImg: "icon-responsivo.png", 
    nameAlt: "Icon Responsive"
    });
const $memoryCardSettings = createMemoryCard({
    nameClass: "-front", 
    nameImg: "icon-settings.png", 
    nameAlt: "Icon Setings"
    });
const $memoryCardWoman = createMemoryCard({
    nameClass: "-front", 
    nameImg: "icon-woman.png", 
    nameAlt: "Icon Woman"
    });
    
    $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardCPlusPlus);
    $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardCPlusPlus);
    $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJs);
    $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJs);
    $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardBug);
    $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardBug);
    $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardCabeca);
    $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardCabeca);
    



$root.insertAdjacentElement("beforeend", $cardsWrapper);
