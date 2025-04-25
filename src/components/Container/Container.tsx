import { FunctionComponent } from "react";

interface ContainerProps {
  children?: React.ReactNode;
}

const Container:FunctionComponent<ContainerProps> = ({children}) => {
  return (
    <div className="container py-2">
      {children}
    </div>
  );
}

export default Container;