$(window).scroll(function () {
    if (
        $(window).scrollTop() >= $("#option0").offset().top - 0 &&
        $(window).scrollTop() < $("#option1").offset().top - 200) {
        // $(console.log('首頁'));
        $('.navigation > ul > li > a').removeClass('active');
    } else if (
        $(window).scrollTop() >= $("#option1").offset().top - 200 &&
        $(window).scrollTop() < $("#option2").offset().top - 200) {
        // $(console.log('等待中的洗澡心願'));
        $('.navigation > ul > li > a').removeClass('active');
        $('.navigation > ul > li > a:eq(0)').addClass('active');
    } else if (
        $(window).scrollTop() >= $("#option2").offset().top - 200 &&
        $(window).scrollTop() < $("#option3").offset().top - 200) {
        // $(console.log('浴見希望'));
        $('.navigation > ul > li > a').removeClass('active');
        $('.navigation > ul > li > a:eq(1)').addClass('active');
    } else if (
        $(window).scrollTop() >= $("#option3").offset().top - 200 &&
        $(window).scrollTop() < $("#option4").offset().top - 200) {
        // $(console.log('立即捐款'));
        $('.navigation > ul > li > a').removeClass('active');
        $('.navigation > ul > li > a:eq(2)').addClass('active');
    } else if (
        $(window).scrollTop() >= $("#option4").offset().top - 200 &&
        $(window).scrollTop() < $("#option5").offset().top - 200) {
        // $(console.log('關於畢嘉士沐浴團隊'));
        $('.navigation > ul > li > a').removeClass('active');
        $('.navigation > ul > li > a:eq(3)').addClass('active');
    } else if (
        $(window).scrollTop() >= $("#option5").offset().top - 200) {
        // $(console.log('關於畢嘉士沐浴團隊'));
        $('.navigation > ul > li > a').removeClass('active');
        $('.navigation > ul > li > a:eq(4)').addClass('active');
    }

});
