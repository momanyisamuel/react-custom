import React, { ReactNode } from 'react';

type DialogProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

const Dialog = ({ isOpen, onClose, children }: DialogProps) => {
  const overlayClass = isOpen
    ? 'fixed top-0 left-0 w-full h-full bg-gray-700 bg-opacity-50 flex justify-center items-center'
    : 'hidden';

  const modalClass = isOpen
    ? 'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#f6f7f9] rounded text-sm shadow p-6'
    : 'hidden';

  return (
    <>
      <div className={overlayClass} onClick={onClose}></div>
      <div className={modalClass}>
        {children}
      </div>
    </>
  );
};

export default Dialog;