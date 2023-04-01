import { NotFoundSection } from "./NotFound.styled";

interface NotFoundProps {
  message: string;
}

const NotFound = ({ message }: NotFoundProps) => {
  return (
    <NotFoundSection>
      <h3>{message}</h3>
    </NotFoundSection>
  );
};

export default NotFound;
