const bar = document.getElementById('bar')
const close = document.getElementById('close')
const nav = document.getElementById('navbar')
if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active')
    })
}
if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active')
    })
}
const header=`
   <section id="header">
            <a href="#"><img src="img/logo.png" class="logo" alt=""></a>
        <div>
            <ul id="navbar">
                <li><a class="active" href="index.html">Home</a></li>
                <li><a href="shop.html">Shop</a></li>
                <li><a href="blog.html">Blog</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">Contact</a></li>
                <li><a href="cart.html"><i id="lg-bag" class="fa fa-bag-shopping"></i></a></li>
                <a href="#"id="close"><i class="fa-solid fa-xmark"></i></a>
            </ul>
         </div>
         <div id="mobile">
            <a href="cart.html"><i class="fa fa-bag-shopping"></i></a>
            <i id="bar" class="fa-solid fa-bars"></i>
         </div>
        </section>
`
document.querySelector("#header").innerHTML=header
const footer=`
   <footer id="footer" class="section-p1">
            <div class="col">
                <img class="logo" src="./img/logo/logo.png" alt="">
                <h4>Contact</h4>
                <p><strong>Address:</strong>19 Beitz Street,Brisbane,Queensland</p>
                <p><strong>Phone:</strong>+61 123456789</p>
                <p><strong>Hours:</strong>9am-5pm, Mon-Sat</p>
                <h4>Follow Us</h4>
                <div class="follow">
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-pinterest"></i>
                    <i class="fa-brands fa-youtube"></i>
                </div>
            </div>
            <div class="col">
                <h4>About</h4>
                <a href="#">About us</a>
                <a href="#">Delivery Information</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms $ Conditions</a>
                <a href="#">Contact Us</a>
            </div>
            <div class="col">
                <h4>My Account</h4>
                <a href="#">Sign in</a>
                <a href="#">View Cart</a>
                <a href="#">My Wishlist</a>
                <a href="#">Track My Order</a>
                <a href="#">Help</a>
            </div>
            <div class="col-install">
                <h4>Install App</h4>
                <p>From App Store or Google Play</p>
                <div class="row">
                <img src="./img/pay/app.jpg" alt="">
                <img src="./img/pay/play.jpg" alt="">
                </div>
                <p>Secured Payment Gateways </p>
                <img src="./img/pay/pay.png" alt="">
                </div>
                <div class="copyright">
                    <p>© Copyright 2023 Jianhong Kang Web Project</p>
                </div>
            </div>
        </footer>


`
document.querySelector("#footer").innerHTML=footer