
let common = {
    init : function(){
        this.fileSearch(); // 파일 찾기
    },

    // 파일 찾기
    fileSearch : function () {
        $(document).on("change", ".fileSearch .file", function(){
            let $this = $(this);
            let fileName = $this.val();
            let $fileInput = $this.closest(".fileSearch").find(".uploadName");

            $fileInput.val(fileName);
        });
    },
}

$(function(){
    common.init();
});