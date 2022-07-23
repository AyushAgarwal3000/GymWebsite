$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load',function(){

        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if($(window).scrollTop() > 60){
            $('header').addClass('header-active');
        }else{
            $('header').removeClass('header-active');
        }

        $('section').each(function(){

            let top = $(window).scrollTop();
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let id = $(this).attr('id');

            if(top >= offset && top < offset + height){
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }

        });

    });

})

let fname = document.getElementById('fname').value;
console.log(fname);
let lname = document.getElementById('lname').value;
console.log(lname);
let number = document.getElementById('number').value;
console.log(number);
let email = document.getElementById('email').value;
console.log(email);
let gender = document.querySelector('input[name="gender]:checked').value;
console.log(gender);
let area = document.getElementById('area').value;
console.log(area);

// var mainMenu = document.querySelector('.navbar')
// var openMenu = document.querySelector('.menu')
// var closeMenu = document.querySelector('.close')

// openMenu.addEventListener('click',show)
// closeMenu.addEventListener('click',close)

// function show(){
//   mainMenu.style.display = 'flex';
//   mainMenu.style.right = '0';

// }
// function close(){
//   mainMenu.style.right = '-60%';
// }

