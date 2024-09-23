//creation of component

const Card = ({
  clickMeFun = () => {
    alert("default function");
  },
  heading = "Default heading",
  desc = "Default Description",
  buttonText = "Default Button",
  backgroundColor = "pink",
}) => {
  //   console.log(data);

  const styleCard = {
    width: "300px",
    height: "250px",
    backgroundColor: backgroundColor,
    margin: "20px",
    padding: "10px",
  };

  return (
    <div style={styleCard}>
      <h1>{heading}</h1>
      <p>{desc}</p>
      <button onClick={clickMeFun}>{buttonText}</button>
    </div>
  );
};

export default Card;
