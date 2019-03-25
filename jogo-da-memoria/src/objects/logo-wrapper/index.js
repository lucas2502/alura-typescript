const logoWrapper = (() => { 
    const module = {};

    module.render = $children => {

        return `
            <div class="avatarWrapper">${$children}</div> 
        `;
    };

    return {
        render: module.render
    };

})();