import Button from "../button/button";
import Counter from "./Counter";

const Home = () => {

  return (
    <div className="container my-5">
      <div className="row ">
        <div className="col-md-6 ">
          <div className="text-end w-100 mx-auto">
          <Button></Button>
          </div>
        </div>
        <div className="col-md-6">
            <Counter></Counter>
        </div>
      </div>
    </div>
  );
};

export default Home;
