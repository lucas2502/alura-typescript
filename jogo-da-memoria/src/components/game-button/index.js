const gameButton = (()=>{
    const module = {};

    module.render = () => {
        return `
            <button>START</button>
        `
    };

    return {
        render : module.render
    };
})();