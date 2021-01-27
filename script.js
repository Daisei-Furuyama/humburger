'use strict';
{
    // jQuery
   $('#humburger').click(function(){
       $('#nav-box').toggleClass('nav-box-hidden');
       $(this).toggleClass('humburger-active')
    });

// javascript
// (function(){
//     const  $doc = document;
//     const $menu = $doc.querySelector('#humburger');
//     const $navCon = $doc.querySelector('#nav-box');
    
//     $menu.addEventListener('click',function(){
//         $navCon.classList.toggle("nav-box-hidden");
        
        
//     });
// });
}