import './ExploreContainer.css';
import Logo from "../../public/logopurple.svg"

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ }) => {
  return (
    <div className="container p-5" >
      <img src={Logo}></img>
    </div>
  );
};

export default ExploreContainer;
