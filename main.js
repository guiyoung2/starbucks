$(function () {
  let menu = $(".gnb>ul>li");
  console.log(menu);
  menu.on("mouseover", function () {
    $(this).css({ background: "#2c2a29" });
    $(this).find(".c_w").css({ color: "#ffffff" });
    $(this).find(".sub_bg").stop().slideDown(200);
  });
  menu.on("mouseleave", function () {
    $(this).css({ background: "none" });
    $(this).find(".c_w").css({ color: "#333333" });
    $(this).find(".sub_bg").stop().slideUp(200);
  });

  let reward_1 = $(".reward_btn");
  let reward_2 = $(".t_area");
  let reward_3 = $(".txt_box");
  let reward_4 = $(".txt_gift_card");
  let content2_1 = $(".content2_r > img");
  let content2_2 = $(".content2_r > p");
  let content3_1 = $(".content3_txt ");

  $(window).scroll(function () {
    let scrollT = $(window).scrollTop();
    let reward = Math.round($(".reward").offset().top);
    let content2 = Math.round($(".content2").offset().top);
    let content3 = Math.round($(".content3").offset().top);

    if (scrollT > reward - 400) {
      reward_1.addClass("reward_1");
      reward_2.addClass("reward_2");
      reward_3.addClass("reward_3");
      reward_4.addClass("reward_4");
    } else if (scrollT <= 200) {
      reward_1.removeClass("reward_1");
      reward_2.removeClass("reward_2");
      reward_3.removeClass("reward_3");
      reward_4.removeClass("reward_4");
    }
    if (scrollT > content2 - 400) {
      content2_1.addClass("content2_op");
      content2_2.addClass("content2_op");
    } else if (scrollT <= content2 - 800) {
      content2_1.removeClass("content2_op");
      content2_2.removeClass("content2_op");
    }
    if (scrollT > content3 - 600) {
      content3_1.addClass("content3_active");
    } else if (scrollT <= content3 - 700) {
      content3_1.removeClass("content3_active");
    }
  });
});
