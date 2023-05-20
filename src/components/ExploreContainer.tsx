import './ExploreContainer.css';
import Logo from "../../public/logo.svg"

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ }) => {
  return (
    <div className="container p-5" style={{backgroundColor:"#551089"}}>
      <img src={Logo}></img>
    </div>
  );
};

export default ExploreContainer;
