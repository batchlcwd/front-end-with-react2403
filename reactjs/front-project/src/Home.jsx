import Card from "./components/Card";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ShowUsers from "./components/ShowUsers";
function Home() {
  //variable
  const heading1 = "Spring Boot New Course";

  //function
  const clickMe = () => {
    alert("clicked  from home");
  };

  return (
    <div>
      <Navbar />

      {/* calling component/ using component */}

      <div
        style={{
          display: "flex",
        }}
      >
        <Card
          heading={heading1}
          desc="This is live course by Ayush"
          buttonText="Buy"
          backgroundColor="red"
          clickMeFun={clickMe}
        />
        <Card
          heading="Front End using React"
          desc="This is live course by Ayush"
          buttonText="Check"
          backgroundColor="blue"
        />
        <Card
          heading="Back End using Node"
          desc="This is live course by Shuvradeep"
          buttonText="Try Demo classes"
          backgroundColor="yellow"
        />

        <Card />
      </div>

      <ShowUsers />

      <h1>Home</h1>
      <p>This is paragraph, Wow this is amazing</p>
      <button>Click me!</button>

      <Footer />
    </div>
  );
}

export default Home;
