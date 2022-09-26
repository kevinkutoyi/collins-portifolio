("use strict");
var loader = document.querySelector(".loader");
window.addEventListener("load", vanish);
function vanish() {
  loader.classList.toggle("disappear");
}

// navbar variables
const nav = document.querySelector(".mobile-nav");
const navMenuBtn = document.querySelector(".nav-menu-btn");
const navCloseBtn = document.querySelector(".nav-close-btn");

// navToggle function
const navToggleFunc = function () {
  nav.classList.toggle("active");
};

navMenuBtn.addEventListener("click", navToggleFunc);
navCloseBtn.addEventListener("click", navToggleFunc);

// theme toggle variables
const themeBtn = document.querySelectorAll(".theme-btn");

for (let i = 0; i < themeBtn.length; i++) {
  themeBtn[i].addEventListener("click", function () {
    // toggle `light-theme` & `dark-theme` class from `body`
    // when clicked `theme-btn`
    document.body.classList.toggle("light-theme");
    document.body.classList.toggle("dark-theme");

    for (let i = 0; i < themeBtn.length; i++) {
      // When the `theme-btn` is clicked,
      // it toggles classes between `light` & `dark` for all `theme-btn`.
      themeBtn[i].classList.toggle("light");
      themeBtn[i].classList.toggle("dark");
    }
  });
}

$(document).ready(function () {
  $(".blog-card").slice(0, 3).show();
  $("#loadMore").on("click", function (e) {
    e.preventDefault();
    $(".blog-card:hidden").slice(0, 4).slideDown();
    if ($(".blog-card:hidden").length == 0) {
      $("#loadMore").text("No More Content").addClass("noContent");
    }
  });
});
// function myFunction() {
//   var dots = document.getElementById("dots");
//   var moreText = document.getElementById("more");
//   var btnText = document.getElementById("myBtn");

//   if (dots.style.display === "none") {
//     dots.style.display = "inline";
//     btnText.innerHTML = "Read more";
//     moreText.style.display = "none";
//   } else {
//     dots.style.display = "none";
//     btnText.innerHTML = "Read less";
//     moreText.style.display = "block";
//   }
// }

// $(document).ready(function () {
//   var maxLength = 300;
//   $(".show-read-more").each(function () {
//     var myStr = $(this).text();
//     if ($.trim(myStr).length > maxLength) {
//       var newStr = myStr.substring(0, maxLength);
//       var removedStr = myStr.substring(maxLength, $.trim(myStr).length);
//       $(this).empty().html(newStr);
//       $(this).append(
//         ' <a href="javascript:void(0);" class="read-more">read more...</a>'
//       );
//       $(this).append('<span class="more-text">' + removedStr + "</span>");
//     }
//   });
//   $(".read-more").click(function () {
//     $(this).siblings(".more-text").contents().unwrap();
//     $(this).remove();
//   });
// });

$(document).ready(function () {
  var maxLength = 300;
  $(".show-read-more").each(function () {
    var myStr = $(this).text();
    if ($.trim(myStr).length > maxLength) {
      var newStr = myStr.substring(0, maxLength);
      var removedStr = myStr.substring(maxLength, $.trim(myStr).length);
      $(this).empty().html(newStr);
      $(this).append(
        ' <a href="javascript:void(0);" class="read-more">....read more...</a>'
      );
      $(this).append('<span class="more-text">' + removedStr + "</span>");
    }
  });
  $(".read-more").click(function () {
    $(this).siblings(".more-text").contents().unwrap();
    $(this).remove();
  });
});
