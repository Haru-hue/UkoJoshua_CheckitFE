import { Dialog } from "primereact/dialog";

export const Modal = ({ isOpen, onClose, children, header, ...rest }) => {
  
  return (
    <div role="dialog" aria-modal='true'>
      <Dialog
        visible={isOpen}
        onHide={onClose}
        dismissableMask
        maskStyle={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        header={header}
        {...rest}
      >
        <div className="z-50 bg-white">{children}</div>
      </Dialog>
    </div>
  );
};
