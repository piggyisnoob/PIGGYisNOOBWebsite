(function() {
    const processList = document.querySelector('.processList')
    const leftProfileContainer = document.querySelector('.container-left')
    const rightProfileContainer = document.querySelector('.container-right')
    
    const performtems = processList.querySelectorAll('.content__process-percentage--real')
    const leftItems = leftProfileContainer.querySelectorAll('.container__section-box')
    const rightItems = rightProfileContainer.querySelectorAll('.container__section-box')

    function addObserver(items) {
        for (const item of items) {
            const observer = new IntersectionObserver(
                (entries, observer) => entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.add('active-IO')
                            observer.unobserve(entry.target)
                        }, 300)
                    }
                })
            )
    
            observer.observe(item)
        }
    }

    const observerItems = [performtems, performItems, leftItems, rightItems]
    observerItems.forEach(items => addObserver(items))
})()