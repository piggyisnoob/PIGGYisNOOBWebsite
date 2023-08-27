// const processList = document.getElementsByClassName("processList");
// const leftProfileContainer = document.getElementsByClassName("container-left");
// const rightProfileContainer =
//   document.getElementsByClassName("container-right");

// const performtems = processList.querySelectorAll(
//   ".content__process-percentage--real"
// );
// const leftItems = leftProfileContainer.querySelectorAll(
//   ".container__section-box"
// );
// const rightItems = rightProfileContainer.querySelectorAll(
//   ".container__section-box"
// );

// function addObserver(items) {
//   for (const item of items) {
//     const observer = new IntersectionObserver((entries, observer) =>
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           setTimeout(() => {
//             entry.target.classList.add("active-IO");
//             observer.unobserve(entry.target);
//           }, 300);
//         }
//       })
//     );

//     observer.observe(item);
//   }
// }

// const observerItems = [performtems, leftItems, rightItems];
// observerItems.forEach((items) => addObserver(items));

const loadpage = document.getElementById("loadpage");

const loadpager = document.getElementById("loadpage_r");

window.addEventListener("load", () => {
  loadpage.style.display = "none";
  loadpager.style.display = "none";
});
