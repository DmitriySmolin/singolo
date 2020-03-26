document.addEventListener("DOMContentLoaded", () => {

    /*Elements*/

    /*Navigation*/
    const menu = document.querySelector('.menu');

    /*Slider*/
    const slider = document.querySelector('.slider');
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const sliderItem = document.querySelector('.slider-item');
    const sliderArrowLeft = document.querySelector('.slider-arrow-left');
    const sliderArrowRight = document.querySelector('.slider-arrow-right');

    /*offScreen*/
    const offscreen1 = document.querySelector(".offscreen1");
    const offscreen2 = document.querySelector(".offscreen2");
    const offscreen3 = document.querySelector(".offscreen3");

    /*portfolioBlock*/
    const portfolioBlock = document.querySelector('.portfolio_images_block');

    /*portfolioNavigation*/
    const portfolioNav = document.querySelector('.portfolio_nav');

    /*formSubmit*/
    const formSubmit = document.querySelector('.form');

    /*btnSend*/
    const btnSend = document.querySelector('.send');

    /*btnPopup*/
    const btnPopup = document.querySelector('.popup_btn');

    /*openSide && closeSide*/
    const openSide = document.querySelector(".open_side");
    const closeSide = document.querySelector(".btn_close");

    /*mobileMenu Navigation*/
    const mobileMenu = document.querySelector('.mobile_menu');

    /*Events*/

    /*Navigation*/
    menu.addEventListener('click', (e) => {
        menu.querySelectorAll('a').forEach(el => el.classList.remove('menu-link-active'));
        e.target.classList.add('menu-link-active');
    });

    /*offScreen*/
    sliderWrapper.addEventListener('click', (e) => {
        if (e.target.getAttribute('class') === 'iphone1') offscreen1.classList.toggle('active');
        if (e.target.getAttribute('class') === 'iphone2 horizontal') offscreen2.classList.toggle('active');
        if (e.target.getAttribute('class') === 'iphone3') offscreen3.classList.toggle('active');
    })

    /*portfolioBlock*/
    portfolioBlock.addEventListener('click', (e) => {
        portfolioBlock.querySelectorAll('img').forEach(item => item.classList.remove('choose'));
        e.target.classList.add('choose');
    })

    /*portfolioNavigation*/
    portfolioNav.addEventListener('click', (e) => {
        portfolioNav.querySelectorAll('li').forEach(item => item.classList.remove('choose'));
        if (e.target.tagName === 'LI') e.target.classList.add('choose');

        const arr = [];
        for (let i = 1; i <= 12; i += 1) {
            arr.push(Math.round(1 - 0.5 + Math.random() * (10 - 1 + 1)));
        }
        document.querySelectorAll('.item').forEach((item, i) => item.style.order = arr[i]);
    })

    /*formSubmit*/
    formSubmit.addEventListener('submit', (e) => {
        e.preventDefault();
        return false;
    })

    /*btnSend*/
    btnSend.addEventListener('click', (e) => {
        if (document.querySelector('.name').checkValidity() && document.querySelector('.email').checkValidity()) {
            e.preventDefault();

            const subject = String(document.querySelector('.subject').value);
            const textarea = String(document.querySelector('.textarea').value);
            document.querySelector('.popup_letter').textContent = 'The letter was sent ';

            if (subject !== '') document.querySelector('.popup_subject').textContent = `Subject: ${subject}`;

            else document.querySelector('.popup_subject').textContent = 'Without subject ';

            if (textarea !== '') document.querySelector('.popup_descr').textContent = `Description: ${textarea}`;

            else document.querySelector('.popup_descr').textContent = 'Without description';

            document.querySelector('body').style.overflow = 'hidden';
            document.querySelector('.popup').style.display = 'block';
            document.querySelector('.popup_form').style.display = 'block';
        }
    });

    /*btnPopup*/
    btnPopup.addEventListener('click', () => {
        document.querySelector('.popup_letter').textContent = '';
        document.querySelector('.popup_subject').textContent = '';
        document.querySelector('.popup_descr').textContent = '';
        document.querySelector('body').style.overflow = '';
        document.querySelector('.popup').style.display = 'none';
        document.querySelector('.popup_form').style.display = 'none';
    });

    /*openSide && closeSide*/
    openSide.addEventListener('click', () => {
        document.getElementById("side-menu").style.width = "278px";
    })
    closeSide.addEventListener('click', () => {
        document.getElementById("side-menu").style.width = "0px";
    })

    /*mobileMenu Navigation*/
    mobileMenu.addEventListener('click', (e) => {
        mobileMenu.querySelectorAll('a').forEach(el => el.classList.remove('menu-link-active'));
        e.target.classList.add('menu-link-active');
    })

    /*Slider*/
    let slideNow = 1;
    let slideCount = sliderWrapper.children.length;
    sliderArrowLeft.addEventListener('click', prevSlide);
    sliderArrowRight.addEventListener('click', nextSlide);


    function nextSlide() {
        if (slideNow === slideCount || slideNow <= 0 || slideNow > slideCount) {
            sliderWrapper.style.cssText = `
        transform: translate(0,0);
        -o-transform: translate(0,0);
        -webkit-transform: translate(0,0); `
            slider.style.cssText = `
        background-color: #f06c64;
        border-bottom: 6px solid #ea676b;`
            offscreen3.classList.remove('active');
            slideNow = 1;
        } else {
            let translateWidth = -sliderItem.offsetWidth * (slideNow);
            sliderWrapper.style.cssText = `
        transform: translate( ${translateWidth}px,0);
        -o-transform: translate(' + ${translateWidth}px,0);
        -webkit-transform: translate(${translateWidth}px,0);`
            slider.style.cssText = `
        background-color: #648bf0;
        border-bottom: 6px solid #348bf0;`
            offscreen1.classList.remove('active');
            offscreen2.classList.remove('active');
            slideNow += 1;
        }
    }

    function prevSlide() {
        if (slideNow === 1 || slideNow <= 0 || slideNow > slideCount) {
            let translateWidth = -sliderItem.offsetWidth * (slideCount - 1);
            sliderWrapper.style.cssText = `
            transform: translate( ${translateWidth}px,0);
            -o-transform: translate(' + ${translateWidth}px,0);
            -webkit-transform: translate(${translateWidth}px,0);`
            slider.style.cssText = `
            background-color: #648bf0;
            border-bottom: 6px solid #348bf0;`
            offscreen1.classList.remove('active');
            offscreen2.classList.remove('active');
            slideNow = slideCount;
        } else {
            let translateWidth = -sliderItem.offsetWidth * (slideNow - 2);
            sliderWrapper.style.cssText = `
            transform: translate( ${translateWidth}px,0);
            -o-transform: translate(' + ${translateWidth}px,0);
            -webkit-transform: translate(${translateWidth}px,0); `
            slider.style.cssText = `
            background-color: #f06c64;;
            border-bottom: 6px solid #ea676b;`
            offscreen3.classList.remove('active');
            slideNow -= 1;
        }
    }

});