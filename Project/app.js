if(localStorage.getItem('login') !== 'true'){

    if(!window.location.pathname.includes('index.html')){
        window.location.href = 'index.html';
    }
}


function logout(){

    localStorage.removeItem('login');

    window.location.href = 'index.html';
}