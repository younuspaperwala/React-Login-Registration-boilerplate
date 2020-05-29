import React, { Component } from 'react';
import jQuery from 'jquery';
import NavbarTop from "../navbar/navbar";
// const nav = new navbarTop();
window.jQuery = jQuery;

class Home extends Component {
  
    render() 
    {
        return (
           
           <div>


            {/*  <!-- ======= Hero Section ======= --> */}
            <section id="hero">
               
              <div className="hero-container">
              <div className="wow fadeIn">
                  <div className="hero-logo">
                    <img className="" src={require("../../assets/img/logo.png")} alt="Imperial" />
                  </div>
          
                  <h1>Welcome to Imperial studios</h1>
                  <h2>We create <span className="rotating">beautiful graphics, functional websites, working mobile apps</span></h2>
                  <div className="actions">
                    <a href="#about" className="btn-get-started">Get Strated</a>
                    <a href="/login" className="btn-services">Login</a>
                  </div>
                </div>
              </div>
            </section> {/* <!-- End Hero --> */}
          
             {/* <!-- ======= Header ======= --> */}
              <NavbarTop />
              <main id="main">
          
               {/* <!-- ======= About Section ======= --> */}
              <section id="about">
                <div className="container wow fadeInUp">
                  <div className="row">
                    <div className="col-md-12">
                      <h3 className="section-title">About Us</h3>
                      <div className="section-title-divider"></div>
                      <p className="section-description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam</p>
                    </div>
                  </div>
                </div>
                <div className="container about-container wow fadeInUp">
                  <div className="row">
          
                    <div className="col-lg-6 about-img">
                      <img src={require("../../assets/img/about-img.jpg")} alt=""/>
                    </div>
          
                    <div className="col-md-6 about-content">
                      <h2 className="about-title">We provide great services and ideass</h2>
                      <p className="about-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                        in reprehenderit in voluptate
                      </p>
                      <p className="about-text">
                        Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                        id est laborum
                      </p>
                      <p className="about-text">
                        Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt molli.
                      </p>
                    </div>
                  </div>
                </div>
              </section> {/* <!-- End About Section --> */}
          
               {/* <!-- ======= Services Section ======= --> */}
              <section id="services">
                <div className="container wow fadeInUp">
                  <div className="row">
                    <div className="col-md-12">
                      <h3 className="section-title">Our Services</h3>
                      <div className="section-title-divider"></div>
                      <p className="section-description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium</p>
                    </div>
                  </div>
          
                  <div className="row">
                    <div className="col-md-4 service-item">
                      <div className="service-icon"><i className="fa fa-desktop"></i></div>
                      <h4 className="service-title"><a href="">Lorem Ipsum</a></h4>
                      <p className="service-description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                    </div>
                    <div className="col-md-4 service-item">
                      <div className="service-icon"><i className="fa fa-bar-chart"></i></div>
                      <h4 className="service-title"><a href="">Dolor Sitema</a></h4>
                      <p className="service-description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                    </div>
                    <div className="col-md-4 service-item">
                      <div className="service-icon"><i className="fa fa-paper-plane"></i></div>
                      <h4 className="service-title"><a href="">Sed ut perspiciatis</a></h4>
                      <p className="service-description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                    </div>
                    <div className="col-md-4 service-item">
                      <div className="service-icon"><i className="fa fa-photo"></i></div>
                      <h4 className="service-title"><a href="">Magni Dolores</a></h4>
                      <p className="service-description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </div>
                    <div className="col-md-4 service-item">
                      <div className="service-icon"><i className="fa fa-road"></i></div>
                      <h4 className="service-title"><a href="">Nemo Enim</a></h4>
                      <p className="service-description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                    </div>
                    <div className="col-md-4 service-item">
                      <div className="service-icon"><i className="fa fa-shopping-bag"></i></div>
                      <h4 className="service-title"><a href="">Eiusmod Tempor</a></h4>
                      <p className="service-description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
                    </div>
                  </div>
                </div>
              </section> {/* <!-- End Services Section --> */}
          
               {/* <!-- ======= Subscrbe Section ======= --> */}
              <section id="subscribe">
                <div className="container wow fadeInUp">
                  <div className="row">
                    <div className="col-md-8">
                      <h3 className="subscribe-title">Subscribe For Updates</h3>
                      <p className="subscribe-text">Join our 1000+ subscribers and get access to the latest tools, freebies, product announcements and much more!</p>
                    </div>
                    <div className="col-md-4 subscribe-btn-container">
                      <a className="subscribe-btn" href="#">Subscribe Now</a>
                    </div>
                  </div>
                </div>
              </section> {/* <!-- End Subscrbe Section --> */}
          
               {/* <!-- ======= Portfolio Section ======= --> */}
              <section id="portfolio">
                <div className="container wow fadeInUp">
                  <div className="row">
                    <div className="col-md-12">
                      <h3 className="section-title">Portfolio</h3>
                      <div className="section-title-divider"></div>
                      <p className="section-description">Si stante, hoc natura videlicet vult, salvam esse se, quod concedimus ses haec dicturum fuisse</p>
                    </div>
                  </div>
          
                  <div className="row">
                    <div className="col-lg-12 d-flex justify-content-center">
                      <ul id="portfolio-flters">
                        <li data-filter="*" className="filter-active">All</li>
                        <li data-filter=".filter-app">App</li>
                        <li data-filter=".filter-card">Card</li>
                        <li data-filter=".filter-web">Web</li>
                      </ul>
                    </div>
                  </div>
          
                  <div className="row portfolio-container">
          
                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                      <img src={require("../../assets/img/portfolio/portfolio-1.jpg")} className="img-fluid" alt="" />
                      <div className="portfolio-info">
                        <h4>App 1</h4>
                        <p>App</p>
                        <a href={require("../../assets/img/portfolio/portfolio-1.jpg")} data-gall="portfolioGallery" className="venobox preview-link" title="App 1"><i className="fa fa-plus"></i></a>
                        <a href="portfolio-details.html" className="details-link" title="More Details"><i className="fa fa-link fa-flip-horizontal"></i></a>
                      </div>
                    </div>
          
                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                      <img src={require("../../assets/img/portfolio/portfolio-2.jpg")} className="img-fluid" alt="" />
                      <div className="portfolio-info">
                        <h4>Web 3</h4>
                        <p>Web</p>
                        <a href={require("../../assets/img/portfolio/portfolio-2.jpg")} data-gall="portfolioGallery" className="venobox preview-link" title="Web 3"><i className="fa fa-plus"></i></a>
                        <a href="portfolio-details.html" className="details-link" title="More Details"><i className="fa fa-link fa-flip-horizontal"></i></a>
                      </div>
                    </div>
          
                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                      <img src={require("../../assets/img/portfolio/portfolio-3.jpg")} className="img-fluid" alt="" />
                      <div className="portfolio-info">
                        <h4>App 2</h4>
                        <p>App</p>
                        <a href={require("../../assets/img/portfolio/portfolio-3.jpg")} data-gall="portfolioGallery" className="venobox preview-link" title="App 2"><i className="fa fa-plus"></i></a>
                        <a href="portfolio-details.html" className="details-link" title="More Details"><i className="fa fa-link fa-flip-horizontal"></i></a>
                      </div>
                    </div>
          
                    <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                      <img src={require("../../assets/img/portfolio/portfolio-4.jpg")} className="img-fluid" alt="" />
                      <div className="portfolio-info">
                        <h4>Card 2</h4>
                        <p>Card</p>
                        <a href={require("../../assets/img/portfolio/portfolio-4.jpg")} data-gall="portfolioGallery" className="venobox preview-link" title="Card 2"><i className="fa fa-plus"></i></a>
                        <a href="portfolio-details.html" className="details-link" title="More Details"><i className="fa fa-link fa-flip-horizontal"></i></a>
                      </div>
                    </div>
          
                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                      <img src={require("../../assets/img/portfolio/portfolio-5.jpg")} className="img-fluid" alt="" />
                      <div className="portfolio-info">
                        <h4>Web 2</h4>
                        <p>Web</p>
                        <a href={require("../../assets/img/portfolio/portfolio-5.jpg")} data-gall="portfolioGallery" className="venobox preview-link" title="Web 2"><i className="fa fa-plus"></i></a>
                        <a href="portfolio-details.html" className="details-link" title="More Details"><i className="fa fa-link fa-flip-horizontal"></i></a>
                      </div>
                    </div>
          
                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                      <img src={require("../../assets/img/portfolio/portfolio-6.jpg")} className="img-fluid" alt="" />
                      <div className="portfolio-info">
                        <h4>App 3</h4>
                        <p>App</p>
                        <a href={require("../../assets/img/portfolio/portfolio-6.jpg")} data-gall="portfolioGallery" className="venobox preview-link" title="App 3"><i className="fa fa-plus"></i></a>
                        <a href="portfolio-details.html" className="details-link" title="More Details"><i className="fa fa-link fa-flip-horizontal"></i></a>
                      </div>
                    </div>
          
                    <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                      <img src={require("../../assets/img/portfolio/portfolio-7.jpg")} className="img-fluid" alt="" />
                      <div className="portfolio-info">
                        <h4>Card 1</h4>
                        <p>Card</p>
                        <a href={require("../../assets/img/portfolio/portfolio-7.jpg")} data-gall="portfolioGallery" className="venobox preview-link" title="Card 1"><i className="fa fa-plus"></i></a>
                        <a href="portfolio-details.html" className="details-link" title="More Details"><i className="fa fa-link fa-flip-horizontal"></i></a>
                      </div>
                    </div>
          
                    <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                      <img src={require("../../assets/img/portfolio/portfolio-8.jpg")}  className="img-fluid" alt="" />
                      <div className="portfolio-info">
                        <h4>Card 3</h4>
                        <p>Card</p>
                        <a href={require("../../assets/img/portfolio/portfolio-8.jpg")}  data-gall="portfolioGallery" className="venobox preview-link" title="Card 3"><i className="fa fa-plus"></i></a>
                        <a href="portfolio-details.html" className="details-link" title="More Details"><i className="fa fa-link fa-flip-horizontal"></i></a>
                      </div>
                    </div>
          
                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                      <img src={require("../../assets/img/portfolio/portfolio-9.jpg")}  className="img-fluid" alt="" />
                      <div className="portfolio-info">
                        <h4>Web 3</h4>
                        <p>Web</p>
                        <a href={require("../../assets/img/portfolio/portfolio-9.jpg")}  data-gall="portfolioGallery" className="venobox preview-link" title="Web 3"><i className="fa fa-plus"></i></a>
                        <a href="portfolio-details.html" className="details-link" title="More Details"><i className="fa fa-link fa-flip-horizontal"></i></a>
                      </div>
                    </div>
          
                  </div>
          
                </div>
              </section> {/* <!-- End Portfolio Section --> */}
          
               {/* <!-- ======= Testimonials Section ======= --> */}
              <section id="testimonials">
                <div className="container wow fadeInUp">
                  <div className="row">
                    <div className="col-md-12">
                      <h3 className="section-title">Testimonials</h3>
                      <div className="section-title-divider"></div>
                      <p className="section-description">Erdo lide, nora porodo filece, salvam esse se, quod concedimus ses haec dicturum fuisse</p>
                    </div>
                  </div>
          
                  <div className="row">
                    <div className="col-md-3">
                      <div className="profile">
                        <div className="pic"><img src={require("../../assets/img/client-1.jpg")} alt="" /></div>
                        <h4>Saul Goodman</h4>
                        <span>Lawless Inc</span>
                      </div>
                    </div>
                    <div className="col-md-9">
                      <div className="quote">
                        <b><img src={require("../../assets/img/quote_sign_left.png")} alt="" /></b> Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper. <small><img src={require("../../assets/img/quote_sign_right.png")} alt="" /></small>
                      </div>
                    </div>
                  </div>
          
                  <div className="row">
                    <div className="col-md-9">
                      <div className="quote">
                        <b><img src={require("../../assets/img/quote_sign_left.png")} alt="" /></b> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis architecto beatae. <small><img src={require("../../assets/img/quote_sign_right.png")} alt="" /></small>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="profile">
                        <div className="pic"><img src={require("../../assets/img/client-2.jpg")} alt="" /></div>
                        <h4>Sara Wilsson</h4>
                        <span>Odeo Inc</span>
                      </div>
                    </div>
                  </div>
          
                </div>
              </section> {/* <!-- End Testimonials Section --> */}
          
               {/* <!-- ======= Team Section ======= --> */}
              <section id="team">
                <div className="container wow fadeInUp">
                  <div className="row">
                    <div className="col-md-12">
                      <h3 className="section-title">Our Team</h3>
                      <div className="section-title-divider"></div>
                      <p className="section-description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
                    </div>
                  </div>
          
                  <div className="row">
                    <div className="col-md-3">
                      <div className="member">
                        <div className="pic"><img src={require("../../assets/img/team/team-1.jpg")} alt="" /></div>
                        <h4>Walter White</h4>
                        <span>Chief Executive Officer</span>
                        <div className="social">
                          <a href=""><i className="fa fa-twitter"></i></a>
                          <a href=""><i className="fa fa-facebook"></i></a>
                          <a href=""><i className="fa fa-google-plus"></i></a>
                          <a href=""><i className="fa fa-linkedin"></i></a>
                        </div>
                      </div>
                    </div>
          
                    <div className="col-md-3">
                      <div className="member">
                        <div className="pic"><img src={require("../../assets/img/team/team-2.jpg")} alt="" /></div>
                        <h4>Sarah Jhinson</h4>
                        <span>Product Manager</span>
                        <div className="social">
                          <a href=""><i className="fa fa-twitter"></i></a>
                          <a href=""><i className="fa fa-facebook"></i></a>
                          <a href=""><i className="fa fa-google-plus"></i></a>
                          <a href=""><i className="fa fa-linkedin"></i></a>
                        </div>
                      </div>
                    </div>
          
                    <div className="col-md-3">
                      <div className="member">
                        <div className="pic"><img src={require("../../assets/img/team/team-3.jpg")} alt="" /></div>
                        <h4>William Anderson</h4>
                        <span>CTO</span>
                        <div className="social">
                          <a href=""><i className="fa fa-twitter"></i></a>
                          <a href=""><i className="fa fa-facebook"></i></a>
                          <a href=""><i className="fa fa-google-plus"></i></a>
                          <a href=""><i className="fa fa-linkedin"></i></a>
                        </div>
                      </div>
                    </div>
          
                    <div className="col-md-3">
                      <div className="member">
                        <div className="pic"><img src={require("../../assets/img/team/team-4.jpg")} alt="" /></div>
                        <h4>Amanda Jepson</h4>
                        <span>Accountant</span>
                        <div className="social">
                          <a href=""><i className="fa fa-twitter"></i></a>
                          <a href=""><i className="fa fa-facebook"></i></a>
                          <a href=""><i className="fa fa-google-plus"></i></a>
                          <a href=""><i className="fa fa-linkedin"></i></a>
                        </div>
                      </div>
                    </div>
          
                  </div>
                </div>
              </section> {/* <!-- End Team Section --> */}
          
               {/* <!-- ======= Contact Section ======= --> */}
              <section id="contact">
                <div className="container wow fadeInUp">
                  <div className="row">
                    <div className="col-md-12">
                      <h3 className="section-title">Contact Us</h3>
                      <div className="section-title-divider"></div>
                      <p className="section-description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
                    </div>
                  </div>
          
                  <div className="row justify-content-center">
                    <div className="col-lg-3 col-md-4">
                      <div className="info">
                        <div>
                          <i className="fa fa-map-marker"></i>
                          <p>A108 Adam Street<br />New York, NY 535022</p>
                        </div>
          
                        <div>
                          <i className="fa fa-envelope"></i>
                          <p>info@example.com</p>
                        </div>
          
                        <div>
                          <i className="fa fa-phone"></i>
                          <p>+1 5589 55488 55s</p>
                        </div>
          
                      </div>
                    </div>
          
                    <div className="col-lg-5 col-md-8">
                      <div className="form">
                        <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                          <div className="form-group">
                            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                            <div className="validate"></div>
                          </div>
                          <div className="form-group">
                            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                            <div className="validate"></div>
                          </div>
                          <div className="form-group">
                            <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                            <div className="validate"></div>
                          </div>
                          <div className="form-group">
                            <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                            <div className="validate"></div>
                          </div>
                          <div className="mb-3">
                            <div className="loading">Loading</div>
                            <div className="error-message"></div>
                            <div className="sent-message">Your message has been sent. Thank you!</div>
                          </div>
                          <div className="text-center"><button type="submit">Send Message</button></div>
                        </form>
                      </div>
                    </div>
          
                  </div>
                </div>
              </section> {/* <!-- End Contact Section --> */}
          
            </main> {/* <!-- End #main --> */}
          
             {/* <!-- ======= Footer ======= --> */}
            <footer id="footer">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="copyright">
                      &copy; Copyright <strong>Imperial Theme</strong>. All Rights Reserved
                    </div>
                    <div className="credits">
                       {/* <!--
                      All the links in the footer should remain intact.
                      You can delete the links only if you purchased the pro version.
                      Licensing information: https://bootstrapmade.com/license/
                      Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=Imperial
                    --> */}
                      Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                    </div>
                  </div>
                </div>
              </div>
            </footer> {/* <!-- End Footer --> */}
          
            <div id="preloader"></div>
            <a href="#" className="back-to-top"><i className="fa fa-chevron-up"></i></a>
          
             {/* <!-- Vendor JS Files --> */}
            {/* <script src="assets/vendor/jquery/jquery.min.js"></script>
            <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
            <script src="assets/vendor/jquery.easing/jquery.easing.min.js"></script>
            <script src="assets/vendor/php-email-form/validate.js"></script>
            <script src="assets/vendor/wow/wow.min.js"></script>
            <script src="assets/vendor/jquery-sticky/jquery.sticky.js"></script>
            <script src="assets/vendor/superfish/superfish.min.js"></script>
            <script src="assets/vendor/hoverIntent/hoverIntent.js"></script>
            <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
            <script src="assets/vendor/owl.carousel/owl.carousel.min.js"></script>
            <script src="assets/vendor/venobox/venobox.min.js"></script>
            <script src="assets/vendor/morphext/morphext.min.js"></script>
           */}
             {/* <!-- Template Main JS File --> */}
            {/* <script src="assets/js/main.js"></script> */}
          
          </div>
        );
    }
}

export default Home;