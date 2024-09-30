$(document).ready(function () {
  //Check to see if the window is top if not then display button
  $(window).scroll(function () {
    // Show button after 100px
    var showAfter = 100;
    if ($(this).scrollTop() > showAfter) {
      $(".back-to-top").fadeIn();
    } else {
      $(".back-to-top").fadeOut();
    }
  });

  // Click event to scroll to top
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 800);
    return false;
  });
});

var moreText = $("#text_more");
var readLess = $(".readless_text");
var readMore = $(".readmore_text");

readMore.on("click", function () {
  moreText.show();
  $(this).hide();
});

readLess.on("click", function () {
  moreText.hide();
  readMore.show();
});

$(".close_message").on("click", function () {
  $(".content_message").hide();
});

$(".ant-collapse-header").on("click", function () {
  $(this)
    .closest(".ant-collapse-item")
    .find(".ant-collapse-content")
    .toggleClass("ant-collapse-content-active");
});

$(".ant-drawer-close, .ant_add_class").on("click", function () {
  $(".ant_design_add_width").animate({ left: "-250px" });
  $(".ant_add_class").removeClass("ant-drawer-mask");
});

$(".anticon-menu").on("click", function () {
  $(".ant_design_add_width").animate({ left: "0px" });
  $(".ant-drawer").addClass("ant-drawer-left css-15rg2km");
  $(".ant_design_add_width").removeClass(
    "ant-drawer-content-wrapper-hidden ant-drawer-content-wrapper"
  );
  $(".ant_add_class").addClass("ant-drawer-mask");
  $(".ant_design_add_width").addClass("ant-drawer-content-wrapper");
});

// Tab control

$(".tab-content .tab-content").hide();

$(".tab-content .tab-content").each(function (index, value) {
  if ($(this).hasClass("active")) {
    $(this).show();
  }
});

$("#tabs .tab_btn").each(function (index, value) {
  var _this = $(this);
  _this.on("click", function () {
    var tabNumber = $(this).data("tab-control");
    var btnActive = $(this);
    $("#tabs .tab_btn").removeClass("bg-gradient-to-r text-[F8E64F]");
    btnActive.addClass(
      "bg-gradient-to-r from-[#016730] to-[#00CB32] text-[F8E64F]"
    );

    $(".tab-content .tab-content").each(function () {
      var tabContentNumber = $(this).data("content-tab");
      if (tabNumber == tabContentNumber) {
        $(this).addClass("active");
        $(this).show();
      } else {
        $(this).removeClass("active");
        $(this).hide();
      }
    });
  });
});

function padZero(num) {
  return num < 10 ? "0" + num : num;
}

function updateTime() {
  const currentTimeUTC = new Date();

  const currentTimeGMT8 = new Date(
    currentTimeUTC.getTime() + 8 * 60 * 60 * 1000
  );

  const year = currentTimeGMT8.getUTCFullYear();
  const month = padZero(currentTimeGMT8.getUTCMonth() + 1);
  const date = padZero(currentTimeGMT8.getUTCDate());
  const hours = padZero(currentTimeGMT8.getUTCHours());
  const minutes = padZero(currentTimeGMT8.getUTCMinutes());
  const seconds = padZero(currentTimeGMT8.getUTCSeconds());

  $("#timeSpan").text(
    `${year}/${month}/${date} ${hours}:${minutes}:${seconds} ( GMT +8 )`
  );
}

updateTime();

setInterval(updateTime, 1000);
