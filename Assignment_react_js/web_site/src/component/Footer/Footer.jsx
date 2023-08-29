import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <section className="footer">
            <div class="footer_container">
                <div class="footer_main_blog">
                    <div class="footer_main_about">
                        <h4>About</h4>
                        <p>Lorem ipsum dolor sit amet elit. Velit beatae rem ullam dolore nisi esse quasi,
                            sit amet. Lorem ipsum dolor sit amet elit.voluptatem accusantium doloremque.</p>
                        <ul class="about">
                            <li><i class="fa-brands fa-facebook"></i></li>
                            <li><i class="fa-brands fa-twitter"></i></li>
                            <li><i class="fa-brands fa-google"></i></li>
                            <li><i class="fa-brands fa-instagram"></i></li>
                        </ul>
                    </div>
                    <div class="footer_useful">
                        <h4>Useful Links</h4>
                        <ul class="useful">
                            <li><i class="fa-solid fa-angle-right"></i>&nbsp;&nbsp;Home</li>
                            <li><i class="fa-solid fa-angle-right"></i>&nbsp;&nbsp;About</li>
                            <li><i class="fa-solid fa-angle-right"></i>&nbsp;&nbsp;Courses</li>
                            <li><i class="fa-solid fa-angle-right"></i>&nbsp;&nbsp;Contact</li>
                        </ul>
                    </div>
                    <div class="footer_help_support">
                        <h4>Help & Support</h4>
                        <ul class="support">
                            <li><i class="fa-solid fa-angle-right"></i>&nbsp;&nbsp;Live Chat</li>
                            <li><i class="fa-solid fa-angle-right"></i>&nbsp;&nbsp;FAQ</li>
                            <li><i class="fa-solid fa-angle-right"></i>&nbsp;&nbsp;Support</li>
                            <li><i class="fa-solid fa-angle-right"></i>&nbsp;&nbsp;Term of Services</li>
                        </ul>
                    </div>
                    <div class="footer_research">
                        <h4>Reasearch</h4>
                        <ul class="reasearch">
                            <li><i class="fa-solid fa-angle-right"></i>&nbsp;&nbsp;Academic Divisions</li>
                            <li><i class="fa-solid fa-angle-right"></i>&nbsp;&nbsp;Student Reasearch</li>
                            <li><i class="fa-solid fa-angle-right"></i>&nbsp;&nbsp;Centers and institutes</li>
                            <li><i class="fa-solid fa-angle-right"></i>&nbsp;&nbsp;Reasearch facilities</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer