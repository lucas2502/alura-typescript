(()=>{
    const $root = document.querySelector("#root");

    const $loginButton = flatButton.render('Log in');
    const $singupButton = flatButton.render('Sing up', "-active")


    $root.insertAdjacentHTML("beforeend", $loginButton);
    $root.insertAdjacentHTML("beforeend", $singupButton)
})();