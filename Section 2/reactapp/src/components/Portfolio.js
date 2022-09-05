import React from 'react'
import myimg1 from '../image/akram.jpg';
import './portfolio.css';
import myimg2 from '../image/portfolio.jpg';
const Portfolio = () => {
  return (
    <div >
      <div class="list-group" style={{ position: 'fixed' }}>
        <a class="list-group-item" href="#"><i class="fa fa-home fa-fw" aria-hidden="true"></i>&nbsp; Home</a>
        <a class="list-group-item" href="#"><i class="fa fa-book fa-fw" aria-hidden="true"></i>&nbsp; My Career</a>
        <a class="list-group-item" href="#"><i class="fa-solid fa-user"></i>&nbsp; About me</a>
        <a class="list-group-item" href="#"><i class="fa fa-cog fa-fw" aria-hidden="true"></i>&nbsp; Connect with me</a>
      </div>
      <div className="container" style={{ borderRadius: '100px' }}>

        <div className="row ">

          <div className="col-md-6">
            <div className="text-center " style={{ paddingTop: '50%', paddingBottom: '45%' }}>
              <h1>Hey, I'm</h1>
              <h1 style={{ fontWeight: 'bold', color: 'red' }}>Mohd Akram Khan</h1>
              <p>Fuelled by a passion for developing ,compelling products. I have a deep
                desire to excel and continuously improve in my work.
                Learn more about my journey below.
              </p>

            </div>
          </div>
          <div className="col-md-6" style={{ margin: '0' }}>
            <img src={myimg1} alt="" />
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <h1>My Career So Far</h1>
            <p className='myP'>Always up for a challenge. I have worked for lean start-ups
              and is a member of Digipodium in MERN Stack Development,the lucknow
              based training center. I came out of my time as a camp counsellor with a better
              understanding of empathy and connection than I had previously.

            </p>
            <br />
            <p className='myP'>"I love designing websites and am looking for more opportunities to work in coding on a freelance basis."</p>
            <br />
            <p className='myP'>"My personal philosophy when it comes to education and learning is closely related to several cognitive theories of motivation.
              I believe that what goes on the classroom is my responsibility, and, by working with students, all of us can create an ideal environment for education, safety, understanding, and even fun. By keeping things positive, I believe that students will end up learning more and getting more out of each and every lesson."</p>
          </div>
          <div className="col-md-6">
            <h1>SKILLS</h1>
            <div className="text-center" style={{ padding: '10%' }}>
              <p className='mycol2P'>JAVA DEVELOPER</p>
              <p className='mycol2P'>HTML/CSS</p>
              <p className='mycol2P'>INFORMATION ARCHITECTURE</p>
              <p className='mycol2P'>REACT JS</p>
              <p className='mycol2P'>NODE.JS</p>
              <p className='mycol2P'>MONGODB</p>
              <p className='mycol2P'>HTML/CSS</p>
              <p className='mycol2P'>CORE JAVA</p>
              <p className='mycol2P'>PROBLEM SOLVING</p>
              <p className='mycol2P'>LEADERSHIP</p>


            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5 ">
        <div className="row">
          <div className="col-md-8">
            <h1 style={{ textDecoration: 'underline' }}>About</h1>
            <br />
            <p className='myP'>Mohd Akram Khan is a director of brand marketing, with experience managing global teams and multi-million-dollar campaigns. Her background in brand strategy, visual design, and account management inform her mindful but competitive approach. Madison is fueled by her passion for understanding the nuances of cross-cultural advertising. She considers herself a ‘forever student,’ eager to both build on her academic foundations in psychology and sociology and stay in tune with the latest digital marketing strategies through continued coursework.</p>

            <p className='myP'>Akram's hunger for knowledge and determination to turn information into action has contributed to her most recent success at Rockwell Group, where she led international, award-winning campaigns for heavy-hitting brands, such as Puma, Gucci, and Rolex. Meanwhile, she vastly improved the productivity of her team by implementing strategic project management methods and ensuring a work-life balance for her department.</p>

            <p className='myP'>Akram believes mindfulness in the workplace is key to success - a tenet she lives out through her interests in yoga, meditation, gardening, and painting. Madison is currently working as a freelance marketing director and is always interested in a challenge. Reach out to madisonblackstone@gmail.com to connect!</p>
          </div>
          <div className="col-md-4">
            <div className="card card1">
              <img src={myimg2} alt="" />
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="text-center connect" style={{ fontWeight: 'bold', fontSize: '200%' }}>
        Connect with me on social media platforms

      </div>
      <div className="text-center" >
        <>
          {/* Facebook */}
          <a
            className="btn btn-primary "
            style={{ backgroundColor: "#3b5998" }}
            href="#!"
            role="button"
          >
            <i className="fab fa-facebook-f" />
          </a>
          {/* Twitter */}
          <a
            className="btn btn-primary margin1"
            style={{ backgroundColor: "#55acee" }}
            href="#!"
            role="button"
          >
            <i className="fab fa-twitter" />
          </a>
          {/* Google */}
          <a
            className="btn btn-primary margin1"
            style={{ backgroundColor: "#dd4b39" }}
            href="#!"
            role="button"
          >
            <i className="fab fa-google" />
          </a>
          {/* Instagram */}
          <a
            className="btn btn-primary margin1"
            style={{ backgroundColor: "#ac2bac" }}
            href="#!"
            role="button"
          >
            <i className="fab fa-instagram" />
          </a>
          {/* Linkedin */}
          <a
            className="btn btn-primary margin1"
            style={{ backgroundColor: "#0082ca" }}
            href="#!"
            role="button"
          >
            <i className="fab fa-linkedin-in" />
          </a>
          {/* Youtube */}
          <a
            className="btn btn-primary margin1"
            style={{ backgroundColor: "#ed302f" }}
            href="#!"
            role="button"
          >
            <i className="fab fa-youtube" />
          </a>
          {/* Github */}
          <a
            className="btn btn-primary margin1"
            style={{ backgroundColor: "#333333" }}
            href="#!"
            role="button"
          >
            <i className="fab fa-github" />
          </a>
          {/* Whatsapp */}
          <a
            className="btn btn-primary margin1"
            style={{ backgroundColor: "#25d366" }}
            href="#!"
            role="button"
          >
            <i className="fab fa-whatsapp" />
          </a>




        </>

      </div>
      <br />
      <footer
        className="text-center text-white"
        style={{ backgroundColor: "#45637d" }}
      >
        {/* Grid container */}
        <div className="container p-4">
          {/* Section: Iframe */}
          <section className="">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-6">
                <div className="ratio ratio-16x9">
                  <iframe
                    className="shadow-1-strong rounded"
                    src="https://www.youtube.com/embed/playlist?list=PLLULffR_mFJdzJDg1NQp1WR8QpBOlegkL"
                    title="YouTube video"
                    allowFullScreen=""
                  />
                </div>
              </div>
            </div>
          </section>
          {/* Section: Iframe */}
        </div>
        {/* Grid container */}
        {/* Copyright */}
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          
          {/* © 2020 Copyright:
          <a className="text-white" href="https://mdbootstrap.com/">
            Akram.com
          </a> */}
        </div>
        {/* Copyright */}
      </footer>
      <footer
        className="text-center text-white"
        style={{ backgroundColor: "#caced1" }}
      >
        {/* Grid container */}
        <div className="container p-4">
          {/* Section: Images */}
          <section className="">
            <div className="row">
              <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                <div
                  className="bg-image hover-overlay ripple shadow-1-strong rounded"
                  data-ripple-color="light"
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp"
                    className="w-100"
                  />
                  <a href="#!">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                    />
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                <div
                  className="bg-image hover-overlay ripple shadow-1-strong rounded"
                  data-ripple-color="light"
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/fluid/city/111.webp"
                    className="w-100"
                  />
                  <a href="#!">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                    />
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                <div
                  className="bg-image hover-overlay ripple shadow-1-strong rounded"
                  data-ripple-color="light"
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/fluid/city/112.webp"
                    className="w-100"
                  />
                  <a href="#!">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                    />
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                <div
                  className="bg-image hover-overlay ripple shadow-1-strong rounded"
                  data-ripple-color="light"
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/fluid/city/114.webp"
                    className="w-100"
                  />
                  <a href="#!">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                    />
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                <div
                  className="bg-image hover-overlay ripple shadow-1-strong rounded"
                  data-ripple-color="light"
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/fluid/city/115.webp"
                    className="w-100"
                  />
                  <a href="#!">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                    />
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                <div
                  className="bg-image hover-overlay ripple shadow-1-strong rounded"
                  data-ripple-color="light"
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/fluid/city/116.webp"
                    className="w-100"
                  />
                  <a href="#!">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </section>
          {/* Section: Images */}
        </div>
        {/* Grid container */}
        {/* Copyright */}
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2020 Copyright:
          <a className="text-white" href="https://mdbootstrap.com/">
            Akram.com
          </a>
        </div>
        {/* Copyright */}
      </footer>

    </div>
  )
}

export default Portfolio