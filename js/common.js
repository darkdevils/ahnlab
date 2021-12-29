
let common = {
    init : function(){
        this.scrollFunction(); // scroll 이벤트
        this.resizeFunction(); // resize 이벤트
        this.leftRightScrolls(); // 가로 scroll 시 header 이동
        this.mobileFunction(); // mobile 이벤트 (width: 768px)
        this.gnbOpenClose(); // gnb open,close
    },

    // scroll 이벤트
    scrollFunction : function () {
        let $this = this;

        $(window).scroll(function () {
            // 가로 scroll 시 header 이동
            $this.leftRightScrolls();
        });
    },

    // resize 이벤트
    resizeFunction : function () {
        let $this = this;

        $(window).resize(function () {
            // mobile 이벤트 (width: 768px)
            $this.mobileFunction();
        });
    },

    // 가로 scroll 시 header 이동
    leftRightScrolls : function(){
        let scrollLeft = $(window).scrollLeft();
        let $header = $("#header");

        $header.css("margin-left", -(scrollLeft));
    },

    // mobile 이벤트 (width: 768px)
    mobileFunction : function () {
        let windowWidth = $(window).outerWidth(true);
        let mobileWidth = 768;

        if (windowWidth <= mobileWidth) {
            $("#wrap").addClass("mobile");
        } else {
            $("#wrap").removeClass("mobile");
            $(".gnb").removeClass("open");
            $(".gnb nav").removeAttr("style");
        }
    },

    // gnb open,close
    gnbOpenClose : function () {
        $(document).on("click", ".gnb .gnbBtn", function(){
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