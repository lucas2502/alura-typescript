const logoLogin = (() => {
    const module ={};
    
    module._style = () => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style");

        $style.textContent = `
        img {
            text-align:center;
        }

        h1  {
            text-align:center;
            color: #f25a70;
            size: 12px;
        }
        `;

        $head.insertAdjacentElement("beforeend", $style);
    }

    module.render = () => {
        module._style();

        return `
            <img src="img/icon-collabcode.png">
            <h1>Wellcome!</h1>
        `;
    };

    return {
        render: module.render
    };
})();