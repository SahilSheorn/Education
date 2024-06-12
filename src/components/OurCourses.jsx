// OurCourses.js
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import './courses.css';

const courses = [
  {
    id: 1,
    image: 'assets/images/course-01.jpg',
    title: 'Morbi tincidunt elit vitae justo rhoncus',
    rating: 5,
    price: '$160',
  },
  {
    id: 2,
    image: 'assets/images/course-02.jpg',
    title: 'Curabitur molestie dignissim purus vel',
    rating: 3,
    price: '$180',
  },
  // ... add all other courses here
  {
    id: 10,
    image: 'assets/images/course-04.jpg',
    title: 'Curabitur molestie dignissim purus',
    rating: 5,
    price: '$560',
  },
];

const OurCourses = () => {
  return (
    <section className="our-courses" id="courses">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-heading">
              <h2>Our Popular Courses</h2>
            </div>
          </div>
          <div className="col-lg-12">
            <OwlCarousel
              className="owl-theme owl-courses-item"
              loop
              margin={10}
              nav
              dots
              autoplay
              autoplayTimeout={3000}
              autoplayHoverPause
              responsive={{
                0: {
                  items: 1,
                },
                600: {
                  items: 2,
                },
                1000: {
                  items: 3,
                },
              }}
            >
              {courses.map(course => (
                <div className="item" key={course.id}>
                  <img src={course.image} alt={course.title} />
                  <div className="down-content">
                    <h4>{course.title}</h4>
                    <div className="info">
                      <div className="row">
                        <div className="col-8">
                          <ul>
                            {[...Array(course.rating)].map((_, i) => (
                              <li key={i}><i className="fa fa-star"></i></li>
                            ))}
                            {[...Array(5 - course.rating)].map((_, i) => (
                              <li key={i} className="inactive"><i className="fa fa-star"></i></li>
                            ))}
                          </ul>
                        </div>
                        <div className="col-4">
                          <span>{course.price}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCourses;
