import reactImage from "../assets/react-core-concepts.png";
const reactDescription = ["Fundamental", "Crucial", "Core"];
function Header() {
  return (
    <header>
      <img src={reactImage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {reactDescription[0]} React concepts you will need for almost any app
        you are going to build!
      </p>
    </header>
  );
}
export default Header;
