import React from 'react'

export default function Subbaner() {
  return (
    <div className="sub-header">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-sm-8">
            <div className="left-content">
              <p>This is an educational <em>React js</em> template by Sahil Sheoran.</p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-4">
            <div className="right-icons">
              <ul>
                <li><a href="/"><i className="fab fa-twitter"></i></a></li>
                <li><a href="/"><i className="fab fa-behance"></i></a></li>
                <li><a href="/"><i className="fab fa-linkedin"></i></a></li>
                <li><a href="/"><i className="fab fa-facebook"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
