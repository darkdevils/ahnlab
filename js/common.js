
let common = {
    init : function(){
        this.scrollFunction(); // scroll 이벤트
        this.resizeFunction(); // resize 이벤트
        this.webMobileFunction(); // web mobile 구분 이벤트 (width: 768px)
        this.leftRightScrolls(); // 가로 scroll 시 header 이동
        this.pageTopBtn(); // page top button 생성
        this.pageTopMove(); // page top 이동
        this.gnbDim(); // scroll 시 gnb dim 처리
        this.gnbWebOpen(); // gnb web open
        this.gnbWebClose(); // gnb web close
        //this.gnbOpenCloseMobile(); // gnb open,close mobile
    },

    // scroll 이벤트
    scrollFunction : function () {
        let $this = this;

        $(window).scroll(function () {
            // 가로 scroll 시 header 이동
            $this.leftRightScrolls();

            // page top button 생성
            $this.pageTopBtn();

            // scroll 시 gnb dim 처리
            $this.gnbDim();
        });
    },

    // resize 이벤트
    resizeFunction : function () {
        let $this = this;

        $(window).resize(function () {
            // web mobile 구분 이벤트 (width: 768px)
            $this.webMobileFunction();
        });
    },

    // web mobile 이벤트 (width: 768px)
    webMobileFunction : function () {
        let windowWidth = $(window).outerWidth(true);
        let mobileWidth = 768;

        if (windowWidth <= mobileWidth) {
            $("#wrap").removeClass("web");
            $("#wrap").addClass("mobile");
        } else {
            $("#wrap").addClass("web");
            $("#wrap").removeClass("mobile");
        }
    },

    // 가로 scroll 시 header 이동
    leftRightScrolls : function(){
        let scrollLeft = $(window).scrollLeft();
        let $header = $("#header");

        $header.css("margin-left", -(scrollLeft));
    },

    // page top button 생성
    pageTopBtn : function () {
        let scrollTop = $(window).scrollTop();
        let topBtn = "<button type='button' class='pageTop'><span>TOP</span></button>";
        let fadeSpeed = 200;

        if (scrollTop > 0) {
            if ($(".pageTop").is(".pageTop")) {
                $(".pageTop").fadeIn(fadeSpeed);
            } else {
                $("#wrap").append(topBtn);
            }
        } else {
            $(".pageTop").fadeOut(fadeSpeed);
        }
    },

    // page top 이동
    pageTopMove : function () {
        $(document).on("click", ".pageTop", function () {
            let scrollSpeed = 300;

            $("html, body").stop().animate({
                scrollTop: 0
            }, scrollSpeed);
        });


        let scrollTop = $(window).scrollTop();
        let topBtn = "<button type='button' class='pageTop'><span>TOP</span></button>";
        let fadeSpeed = 200;

        if (scrollTop > 0) {
            if ($(".pageTop").is(".pageTop")) {
                $(".pageTop").fadeIn(fadeSpeed);
            } else {
                $("#wrap").append(topBtn);
            }
        } else {
            $(".pageTop").fadeOut(fadeSpeed);
        }
    },

    // scroll 시 gnb dim 처리
    gnbDim : function () {
        let scrollTop = $(window).scrollTop();

        if (scrollTop > 0) {
            $("#header").addClass("scroll");
        } else {
            $("#header").removeClass("scroll");
        }
    },

    // gnb web open
    gnbWebOpen : function () {
        $(document).on("click", "#wrap.web .gnb .category > button, #wrap.web .gnb .login > button, #wrap.web .gnb .search > button", function(){
            let $this = $(this);
            let $gnbItemSub = $this.closest(".gnbItem").find(".gnbItemSub");
            let $header = $("#header");
            let gnbOpenCheck = $header.is(".gnbOpen");
            let slideSpeed = 300;

            if (!gnbOpenCheck) {
                $gnbItemSub.slideDown(slideSpeed, function () {
                    $(".gnbCloseBtn").show();
                });
            }
        });
    },

    // gnb web close
    gnbWebClose : function () {
        $(document).on("click", "#wrap.web .gnb .gnbCloseBtn", function(){
            let $this = $(this);
            let $gnbItemSub = $this.closest(".gnb").find(".gnbItemSub");
            let slideSpeed = 300;

            $(".gnbCloseBtn").hide();
            $gnbItemSub.slideUp(slideSpeed);
        });
    },





    // gnb open,close mobile
    gnbOpenCloseMobile : function () {
        $(document).on("click", ".gnb .gnbOpen, .gnb .gnbClose", function(){
            let openCheck = $(".gnb").is(".open");
            let slideSpeed = 300;

            if (openCheck) {
                $(".gnb").removeClass("open");
                $(".gnb nav").stop().animate({
                    left: "100%"
                }, slideSpeed);
            } else {
                $(".gnb").addClass("open");
                $(".gnb nav").stop().animate({
                    left: "0%"
                }, slideSpeed);
            }
        });
    },
}

$(function(){
    common.init();
});