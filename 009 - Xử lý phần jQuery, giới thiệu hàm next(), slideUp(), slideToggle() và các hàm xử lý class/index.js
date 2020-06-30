$(document).ready(function () {
    // cho tat ca noi dung thu lai
    $('.ndmotkhoi').slideUp(); // co nho noi dung lai

    // click vao the h3 
    $('.motkhoi h3').click(function (event) {
        console.log('Da click roi!');
        
        //  Neu viet nhu nay tat ca cai co class ndmotkhoi se so ra
        // $('.ndmotkhoi').slideDown(); 

        // h3 va ndmotkhoi nam lien nhau nen ta goi next de chi so ra ndmotkhoi nam lien ke h3 ma ta chon
        // $(this).next('.ndmotkhoi').slideDown(); 

        // an vao an ra luon cho tien
        $(this).next('.ndmotkhoi').slideToggle();
        // vi nam lien ke h3 chi co dung 1 next nen de trong next() cung dc khong can khai bao class
        $(this).toggleClass('xanh')
    })
});

