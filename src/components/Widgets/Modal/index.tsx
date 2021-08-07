import Button from "../Button";
import ReactDOM from "react-dom";
import Close from "src/assets/svg/close.svg";
import "./style.scss";

interface Props {
  show: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}
const Modal = ({ show, onClose, title, children }: Props) => {
  if (show)
    return ReactDOM.createPortal(
      <div className="modalContainer" onClick={() => onClose()}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <header className="modal_header">
            <h2 className="modal_header-title">{title}</h2>
            <Button className="modal_close" shape="iconButton" onClick={() => onClose()}>
              <img src={Close} alt="close" />
            </Button>
          </header>
          <main className="modal_content">{children}</main>
        </div>
      </div>,
      document.getElementById("modal")!
    );
  return <div />;
};

export default Modal;
