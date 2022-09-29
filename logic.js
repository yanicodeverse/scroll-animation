const hidden_element = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle('show', entry.isIntersecting);
    })

})


hidden_element.forEach(Element => {
    observer.observe(Element)
})
