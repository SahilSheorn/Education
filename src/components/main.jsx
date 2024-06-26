import React, { useState } from 'react';
import axios from 'axios';
import OwlCarousel from 'react-owl-carousel';
import OurCourses from './OurCourses';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:4000/contact', formData);
      // Reset form after successful submission
      setFormData({
        username: '',
        email: '',
        subject: '',
        message: ''
      });
      alert('Message sent successfully!');
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Error sending message. Please try again later.');
    }
  };


  // export default function () {
  return (
    <>
      <section class="services">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="owl-service-item owl-carousel">

                <div class="item">
                  <div class="icon">
                    <img src="assets/images/service-icon-01.png" alt="" />
                  </div>
                  <div class="down-content">
                    <h4>Best Education</h4>
                    <p>Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum.</p>
                  </div>
                </div>

                <div class="item">
                  <div class="icon">
                    <img src="assets/images/service-icon-02.png" alt="" />
                  </div>
                  <div class="down-content">
                    <h4>Best Teachers</h4>
                    <p>Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum.</p>
                  </div>
                </div>

                <div class="item">
                  <div class="icon">
                    <img src="assets/images/service-icon-03.png" alt="" />
                  </div>
                  <div class="down-content">
                    <h4>Best Students</h4>
                    <p>Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum.</p>
                  </div>
                </div>

                <div class="item">
                  <div class="icon">
                    <img src="assets/images/service-icon-02.png" alt="" />
                  </div>
                  <div class="down-content">
                    <h4>Online Meeting</h4>
                    <p>Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum.</p>
                  </div>
                </div>

                <div class="item">
                  <div class="icon">
                    <img src="assets/images/service-icon-03.png" alt="" />
                  </div>
                  <div class="down-content">
                    <h4>Best Networking</h4>
                    <p>Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum.</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="upcoming-meetings">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-heading">
                <h2>Upcoming Meetings</h2>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="categories">
                <h4>Meeting Catgories</h4>
                <ul>
                  <li><a href="/">Sed tempus enim leo</a></li>
                  <li><a href="/">Aenean molestie quis</a></li>
                  <li><a href="/">Cras et metus vestibulum</a></li>
                  <li><a href="/">Nam et condimentum</a></li>
                  <li><a href="/">Phasellus nec sapien</a></li>
                </ul>
                <div class="main-button-red">
                  <a href="/">All Upcoming Meetings</a>
                </div>
              </div>
            </div>
            <div class="col-lg-8">
              <div class="row">
                <div class="col-lg-6">
                  <div class="meeting-item">
                    <div class="thumb">
                      <div class="price">
                        <span>$22.00</span>
                      </div>
                      <a href="/"><img src="assets/images/meeting-01.jpg" alt="New Lecturer Meeting" /></a>
                    </div>
                    <div class="down-content">
                      <div class="date">
                        <h6>Nov <span>10</span></h6>
                      </div>
                      <a href="/"><h4>New Lecturers Meeting</h4></a>
                      <p>Morbi in libero blandit lectus<br />cursus ullamcorper.</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="meeting-item">
                    <div class="thumb">
                      <div class="price">
                        <span>$36.00</span>
                      </div>
                      <a href="/"><img src="assets/images/meeting-02.jpg" alt="Online Teaching" /></a>
                    </div>
                    <div class="down-content">
                      <div class="date">
                        <h6>Nov <span>24</span></h6>
                      </div>
                      <a href="/"><h4>Online Teaching Techniques</h4></a>
                      <p>Morbi in libero blandit lectus<br />cursus ullamcorper.</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="meeting-item">
                    <div class="thumb">
                      <div class="price">
                        <span>$14.00</span>
                      </div>
                      <a href="/"><img src="assets/images/meeting-03.jpg" alt="Higher Education" /></a>
                    </div>
                    <div class="down-content">
                      <div class="date">
                        <h6>Nov <span>26</span></h6>
                      </div>
                      <a href="/"><h4>Higher Education Conference</h4></a>
                      <p>Morbi in libero blandit lectus<br />cursus ullamcorper.</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="meeting-item">
                    <div class="thumb">
                      <div class="price">
                        <span>$48.00</span>
                      </div>
                      <a href="/"><img src="assets/images/meeting-04.jpg" alt="Student Training" /></a>
                    </div>
                    <div class="down-content">
                      <div class="date">
                        <h6>Nov <span>30</span></h6>
                      </div>
                      <a href="/"><h4>Student Training Meetup</h4></a>
                      <p>Morbi in libero blandit lectus<br />cursus ullamcorper.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="apply-now" id="apply">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 align-self-center">
              <div class="row">
                <div class="col-lg-12">
                  <div class="item">
                    <h3>APPLY FOR BACHELOR DEGREE</h3>
                    <p>You are allowed to use this education meeting React applications for your school or university or business. You can feel free to Contact me for This sites.</p>
                    <div class="main-button-red">
                      <div class="scroll-to-section"><a href="#contact">Join Us Now!</a></div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="item">
                    <h3>APPLY FOR BACHELOR DEGREE</h3>
                    <p>You are not allowed to Copy this code. Please contact us for more information.</p>
                    <div class="main-button-yellow">
                      <div class="scroll-to-section"><a href="#contact">Join Us Now!</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="accordions is-first-expanded">
                <article class="accordion">
                  <div class="accordion-head">
                    <span>About Edu Meeting</span>
                    <span class="icon">
                      <i class="icon fa fa-chevron-right"></i>
                    </span>
                  </div>
                  <div class="accordion-body">
                    <div class="content">
                      <p>If you want to get the more collection of React applications for your websites, you may visit <a rel="nofollow" href="/" target="_blank">Too CSS website</a>. If you need a working contact form script, please visit <a href="/" target="_parent">our contact page</a> for more info.</p>
                    </div>
                  </div>
                </article>
                <article class="accordion">
                  <div class="accordion-head">
                    <span>React Bootstrap Layout</span>
                    <span class="icon">
                      <i class="icon fa fa-chevron-right"></i>
                    </span>
                  </div>
                  <div class="accordion-body">
                    <div class="content">
                      <p>Etiam posuere metus orci, vel consectetur elit imperdiet eu. Cras ipsum magna, maximus at semper sit amet, eleifend eget neque. Nunc facilisis quam purus, sed vulputate augue interdum vitae. Aliquam a elit massa.<br /><br />
                        Nulla malesuada elit lacus, ac ultricies massa varius sed. Etiam eu metus eget nibh consequat aliquet. Proin fringilla, quam at euismod porttitor, odio odio tempus ligula, ut feugiat ex erat nec mauris. Donec viverra velit eget lectus sollicitudin tincidunt.</p>
                    </div>
                  </div>
                </article>
                <article class="accordion">
                  <div class="accordion-head">
                    <span>Please tell your friends</span>
                    <span class="icon">
                      <i class="icon fa fa-chevron-right"></i>
                    </span>
                  </div>
                  <div class="accordion-body">
                    <div class="content">
                      <p>Ut vehicula mauris est, sed sodales justo rhoncus eu. Morbi porttitor quam velit, at ullamcorper justo suscipit sit amet. Quisque at suscipit mi, non efficitur velit.<br /><br />
                        Cras et tortor semper, placerat eros sit amet, porta est. Mauris porttitor sapien et quam volutpat luctus. Nullam sodales ipsum ac neque ultricies varius.</p>
                    </div>
                  </div>
                </article>
                <article class="accordion last-accordion">
                  <div class="accordion-head">
                    <span>Share this to your colleagues</span>
                    <span class="icon">
                      <i class="icon fa fa-chevron-right"></i>
                    </span>
                  </div>
                  <div class="accordion-body">
                    <div class="content">
                      <p>Maecenas suscipit enim libero, vel lobortis justo condimentum id. Interdum et malesuada fames ac ante ipsum primis in faucibus.<br /><br />
                        Sed eleifend metus sit amet magna tristique, posuere laoreet arcu semper. Nulla pellentesque ut tortor sit amet maximus. In eu libero ullamcorper, semper nisi quis, convallis nisi.</p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      <OurCourses />
      {/* <section class="our-courses" id="courses">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-heading">
                <h2>Our Popular Courses</h2>
              </div>
            </div>
            <div class="col-lg-12">
              <div class="owl-courses-item owl-carousel">
                <div class="item">
                  <img src="assets/images/course-01.jpg" alt="Course One" />
                  <div class="down-content">
                    <h4>Morbi tincidunt elit vitae justo rhoncus</h4>
                    <div class="info">
                      <div class="row">
                        <div class="col-8">
                          <ul>
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star"></i></li>
                          </ul>
                        </div>
                        <div class="col-4">
                          <span>$160</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <img src="assets/images/course-02.jpg" alt="Course Two" />
                  <div class="down-content">
                    <h4>Curabitur molestie dignissim purus vel</h4>
                    <div class="info">
                      <div class="row">
                        <div class="col-8">
                          <ul>
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star"></i></li>
                          </ul>
                        </div>
                        <div class="col-4">
                          <span>$180</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <img src="assets/images/course-03.jpg" alt="" />
                  <div class="down-content">
                    <h4>Nulla at ipsum a mauris egestas tempor</h4>
                    <div class="info">
                      <div class="row">
                        <div class="col-8">
                          <ul>
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star"></i></li>
                          </ul>
                        </div>
                        <div class="col-4">
                          <span>$140</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <img src="assets/images/course-04.jpg" alt="" />
                  <div class="down-content">
                    <h4>Aenean molestie quis libero gravida</h4>
                    <div class="info">
                      <div class="row">
                        <div class="col-8">
                          <ul>
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star"></i></li>
                          </ul>
                        </div>
                        <div class="col-4">
                          <span>$120</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <img src="assets/images/course-01.jpg" alt="" />
                  <div class="down-content">
                    <h4>Lorem ipsum dolor sit amet adipiscing elit</h4>
                    <div class="info">
                      <div class="row">
                        <div class="col-8">
                          <ul>
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star"></i></li>
                          </ul>
                        </div>
                        <div class="col-4">
                          <span>$250</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <img src="assets/images/course-02.jpg" alt="" />
                  <div class="down-content">
                    <h4>TemplateMo is the best website for Free CSS</h4>
                    <div class="info">
                      <div class="row">
                        <div class="col-8">
                          <ul>
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star"></i></li>
                          </ul>
                        </div>
                        <div class="col-4">
                          <span>$270</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <img src="assets/images/course-03.jpg" alt="" />
                  <div class="down-content">
                    <h4>Web Design applications at your finger tips</h4>
                    <div class="info">
                      <div class="row">
                        <div class="col-8">
                          <ul>
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star"></i></li>
                          </ul>
                        </div>
                        <div class="col-4">
                          <span>$340</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <img src="assets/images/course-04.jpg" alt="" />
                  <div class="down-content">
                    <h4>Please visit our website again</h4>
                    <div class="info">
                      <div class="row">
                        <div class="col-8">
                          <ul>
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star"></i></li>
                          </ul>
                        </div>
                        <div class="col-4">
                          <span>$360</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <img src="assets/images/course-01.jpg" alt="" />
                  <div class="down-content">
                    <h4>Responsive React Js applications for you</h4>
                    <div class="info">
                      <div class="row">
                        <div class="col-8">
                          <ul>
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star"></i></li>
                          </ul>
                        </div>
                        <div class="col-4">
                          <span>$400</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <img src="assets/images/course-02.jpg" alt="" />
                  <div class="down-content">
                    <h4>React.js Layouts for your business</h4>
                    <div class="info">
                      <div class="row">
                        <div class="col-8">
                          <ul>
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star"></i></li>
                          </ul>
                        </div>
                        <div class="col-4">
                          <span>$430</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <img src="assets/images/course-03.jpg" alt="" />
                  <div class="down-content">
                    <h4>Morbi in libero blandit lectus cursus</h4>
                    <div class="info">
                      <div class="row">
                        <div class="col-8">
                          <ul>
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star"></i></li>
                          </ul>
                        </div>
                        <div class="col-4">
                          <span>$480</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <img src="assets/images/course-04.jpg" alt="" />
                  <div class="down-content">
                    <h4>Curabitur molestie dignissim purus</h4>
                    <div class="info">
                      <div class="row">
                        <div class="col-8">
                          <ul>
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star"></i></li>
                          </ul>
                        </div>
                        <div class="col-4">
                          <span>$560</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section class="our-facts">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="row">
                <div class="col-lg-12">
                  <h2>A Few Facts About Our University</h2>
                </div>
                <div class="col-lg-6">
                  <div class="row">
                    <div class="col-12">
                      <div class="count-area-content percentage">
                        <div class="count-digit">94</div>
                        <div class="count-title">Succesed Students</div>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="count-area-content">
                        <div class="count-digit">126</div>
                        <div class="count-title">Current Teachers</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="row">
                    <div class="col-12">
                      <div class="count-area-content new-students">
                        <div class="count-digit">2345</div>
                        <div class="count-title">New Students</div>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="count-area-content">
                        <div class="count-digit">32</div>
                        <div class="count-title">Awards</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 align-self-center">
              <div class="video">
                <a href="https://www.youtube.com/watch?v=HndV87XpkWg" target="_blank"><img src="assets/images/play-icon.png" alt="" /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-us" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 align-self-center">
              <div className="row">
                <div className="col-lg-12">
                  <form id="contact" onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-lg-12">
                        <h2>Let's get in touch</h2>
                      </div>
                      <div className="col-lg-4">
                        <fieldset>
                          <input name="username" type="text" id="username" placeholder="YOURNAME...*" value={formData.username} onChange={handleChange} required="" />
                        </fieldset>
                      </div>
                      <div className="col-lg-4">
                        <fieldset>
                          <input name="email" type="email" id="email" placeholder="GMAIL...*" value={formData.email} onChange={handleChange} required="" />
                        </fieldset>
                      </div>
                      <div className="col-lg-4">
                        <fieldset>
                          <input name="subject" type="text" id="subject" placeholder="SUBJECT...*" value={formData.subject} onChange={handleChange} required="" />
                        </fieldset>
                      </div>
                      <div className="col-lg-12">
                        <fieldset>
                          <textarea name="message" type="text" className="form-control" id="message" placeholder="YOUR MESSAGE..." value={formData.message} onChange={handleChange} required=""></textarea>
                        </fieldset>
                      </div>
                      <div className="col-lg-12">
                        <fieldset>
                          <button type="submit" id="form-submit" className="button">SEND MESSAGE NOW</button>
                        </fieldset>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="right-info">
                <ul>
                  <li>
                    <h6>Phone Number</h6>
                    <span>010-020-0340</span>
                  </li>
                  <li>
                    <h6>Email Address</h6>
                    <span>info@meeting.edu</span>
                  </li>
                  <li>
                    <h6>Street Address</h6>
                    <span>Rio de Janeiro - RJ, 22795-008, Brazil</span>
                  </li>
                  <li>
                    <h6>Website URL</h6>
                    <span>www.meeting.edu</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <p>Copyright © 2022 Edu Meeting Co., Ltd. All Rights Reserved.
            <br />Design By: <a href="/" target="_parent" title="free css applications">Sahil</a></p>
        </div>
      </section>
    </>
  )
}
