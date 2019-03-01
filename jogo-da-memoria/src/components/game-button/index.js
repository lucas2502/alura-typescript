const gameButton = (()=>{
    const module = {};

    module._style = () => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style");

        $style.textContent = `
            .game-button{
                width: 80px;
                height: 80px;
                border-radius: 50%;
                position: absolute;
                bottom: 20px;
                left: 50%;
                transform: translateX(-50%);
                box-shadow: 0px 4px 8px #3a4042;
                background-color: #fff;
                color: #f25a70;
                border-color:#f25a70;
            }
        `

        $head.insertBefore($style, null);
    }
    
    module.render = () => {
        module._style();
        
        return `
            <button class="game-button">START</button>
        `
    };

    return {
        render : module.render
    };
})();