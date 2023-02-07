var observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("scroll-animate");
            console.log("Element is on screen");
            return;
        }
        entry.target.classList.remove("scroll-animate");
    })
});

var elementList = document.querySelectorAll(".animate-on-scroll");

elementList.forEach((el) => {
    observer.observe(el);
})