const boxs = document.querySelectorAll(".box")

const observer = new IntersectionObserver(entries => {
    console.log(entries)
})

observer.observe(boxs[0])