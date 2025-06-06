const navbar = document.getElementById("navbar");

navbar.innerHTML = `
    <nav class="fixed top-0 left-0 w-full bg-white z-40">
        <div class="max-w-7xl mx-auto flex justify-between items-center w-full md:p-5 p-3 md:h-24 h-20">
            <a data-aos="fade-right" href="/index.html" class="flex items-center justify-center lg:justify-start">
                <img src="/docs/assets/images/logo.png" class="md:h-20 h-16" alt="logo">
            </a>
            <div class="flex items-center gap-10">
                <div class="md:flex items-center gap-10 hidden">
                    <ul data-aos="fade-left" class="md:flex hidden items-center text-zinc-800 gap-10">
                        <li><a href="/index.html" class="hover:text-[#a21410] transition-all duration-500">Home </a>
                        </li>
                        <li><a href="/story.html" class="hover:text-[#a21410] transition-all duration-500">Story</a>
                        </li>
                        <li><a href="/menu.html" class="hover:text-[#a21410] transition-all duration-500">Menu</a></li>
                        <li><a href="/future-event.html" class="hover:text-[#a21410] transition-all duration-500">Future
                                Events</a></li>
                        <li><a href="/gallery.html" class="hover:text-[#a21410] transition-all duration-500">Gallery</a>
                        </li>
                        <li><a href="/opening-hours.html"
                                class="hover:text-[#a21410] transition-all duration-500">Opening Hours</a></li>
                    </ul>
                </div>
            </div>
            <div data-aos="fade-left">
            <a href="/contact.html"
            class="md:block hidden transition-all duration-500 hover:bg-transparent hover:text-[#a21410] border-2 border-[#a21410] px-8 py-3 rounded-lg text-white bg-[#a21410]">Contact
            Us</a>
            </div>

            <i id="mobileMenuBtn" class="fa-solid text-zinc-800 fa-bars md:!hidden text-2xl cursor-pointer mr-2"></i>
        </div>
    </nav>

    <div id="mobileMenu"
        class="fixed left-0 top-0 bg-white max-w-[30rem] w-0 overflow-hidden h-screen z-50 transition-all duration-500">
        <div class="flex items-end justify-end p-5">
            <i class="fa-solid mobileMenuCloseBtn fa-x z-50 text-zinc-800 text-xl cursor-pointer"></i>
        </div>
        <div class="p-6">
            <ul class="flex relative z-50 text-zinc-800 flex-col gap-7">
                <li><a href="/index.html" class="hover:text-[#a21410] transition-all duration-500">Home </a>
                </li>
                <li><a href="/story.html" class="hover:text-[#a21410] text-nowrap transition-all duration-500">Story</a>
                </li>
                <li><a href="/menu.html" class="hover:text-[#a21410] text-nowrap transition-all duration-500">Menu</a></li>
                <li><a href="/future-event.html" class="hover:text-[#a21410] text-nowrap transition-all duration-500">Future
                        Events</a></li>
                <li><a href="/gallery.html" class="hover:text-[#a21410] text-nowrap transition-all duration-500">Gallery</a>
                </li>
                <li><a href="/opening-hours.html" class="hover:text-[#a21410] text-nowrap transition-all duration-500">Opening
                        Hours</a></li>
            </ul>
            <a href="/contact.html"
                class="block transition-all mt-5 text-nowrap text-center duration-500 hover:bg-transparent hover:text-[#a21410] border-2 border-[#a21410] px-8 py-3 rounded-lg text-white bg-[#a21410]">Contact
                Us</a>
        </div>
    </div>
    <div class="md:h-24 h-20"></div>
`


const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const mobileMenuCloseBtns = document.querySelectorAll(".mobileMenuCloseBtn");

mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.style.width = "100%";
});

mobileMenuCloseBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        mobileMenu.style.width = "0";
    });
});