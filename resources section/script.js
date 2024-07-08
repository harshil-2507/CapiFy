// $(document).ready(function () {
//     $('.slider_article').slick({
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 2000,
//         dots: CSSScale,
//         arrows: true
//     });
// });
// $(document).ready(function () {
//     $('.slider_video_library').slick({
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 2000,
//         dots: true,
//         arrows: true
//     });
// });
// $(document).ready(function () {
//     $('.slider_podcast').slick({
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 2000,
//         dots: true,
//         arrows: true
//     });
// });

// var loader = document.querySelector("#loader")
// // set timeout basically dalay in execution
// setTimeout(function(){
//     loader.style.top = "-100%";
// },3500)
const individuals = ["Harshil", "Kavisha", "Vansh", "Deep"];

function getRandomPair(arr) {
    // Shuffle the array
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    // Return the first two elements as a pair
    return [arr[0], arr[1]];
}

const randomPair = getRandomPair(individuals);
console.log(randomPair);
