export function Work() {
    return <>
        <div class="py-4 mt-5"></div>
        
        
        <h1 class="work-title text-center">PROJECT</h1>
        <div class="container col-xxl-8 px-4 ">
    <div class="row flex-lg-row-reverse align-items-center g-5 ">
      <div class="col-10 col-sm-8 col-lg-6">
        <img src={require("../assets/img/project1.png")} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
      </div>
      <div class="col-lg-6">
        <h2 class="project-title">Portfolio Website</h2>
        <p class="lead">A unique way to showcase your work and let others know about yourself, A portfolio is a collection of evidence that showcases the student's learning and growth over time.</p>
      </div>
    </div>
  </div>

  
  <div class="container col-xxl-8 px-4 py-5">
  <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <img src={require("../assets/img/project2.png")} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
      </div>
      <div class="col-lg-6">
        <h2 class="project-title">Quiz App</h2>
        <p class="lead">A quiz can be defined as a game or brain teaser to test knowledge. It can contain an element of competition when participants play against each other to get the highest score, which makes helps participants become more engaged.</p>
      </div>
    </div>
  </div>

  <div class="container col-xxl-8 px-4 py-5">
  <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <img src={require("../assets/img/project3.jpg")} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
      </div>
      <div class="col-lg-6">
        <h2 class="project-title">E-commerce Shopping Cart</h2>
        <p class="lead">This website is a method of buying and selling goods and services online.</p>
      </div>
    </div>
  </div>
    </>
}