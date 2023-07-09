function scrollNext() {
    var height = window.innerHeight;
    var scroll = window.scrollY;
    var page = Math.floor(scroll / height);
    window.scrollTo(0, (page + 1) * height);
}