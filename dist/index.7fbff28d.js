let Scrollbar = window.Scrollbar;
Scrollbar.init(document.querySelector('.container'));
function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    for(var i = 0; i < reveals.length; i++){
        console.log(Scrollbar.isVisible(reveals[i]));
        if (Scrollbar.isVisible(reveals[i])) reveals[i].classList.add('active');
        else reveals[i].classList.remove('active');
    }
}

//# sourceMappingURL=index.7fbff28d.js.map
