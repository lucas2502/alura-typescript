(()=>{
    const $root = document.querySelector("#root");

    const $loginButton = flatButton.render('Log in');
    const $singupButton = flatButton.render('Sing up', true)
    const $imgLogo = logoLogin.render();


    $root.insertAdjacentHTML("beforeend", $loginButton);
    $root.insertAdjacentHTML("beforeend", $singupButton);
    $root.insertAdjacentHTML("beforeend", $imgLogo);
})();