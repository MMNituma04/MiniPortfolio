
export function Home() {
    return <>
      <div class="py-4 mt-5"></div>
      <section class="text-center container text-white">
        <div class="row mb-5">
          <div class="col-lg-6 col-md-8 mx-auto">
            <img className="main-photo mb-5" src={require("../assets/img/profile1.jpg")} alt={"Logo"}/>
            <h1 class="home-link">Monica M. Nituma</h1>
            <p class="home-title">Web Developer</p>
            <a href="https://github.com/MMNituma04" class="home-link" target="_blank" rel="noreferrer">Github Account Link</a>
          </div>
        </div>
      </section>
    </>
}