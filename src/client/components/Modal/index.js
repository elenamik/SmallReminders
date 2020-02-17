import React from 'react';
import { createPortal } from 'react-dom';
import usePortal from './usePortal';
import GenericModal from './GenericModal';

const WrapInGeneric = (children, handleClose) => {
  return (
    <GenericModal handleClose={handleClose}>
      {children}
    </GenericModal>
  );
};

/**
 * @example
 * <Portal>
 *   <p>Thinking with portals</p>
 * </Portal>
 */
const Portal = ({ id, children, handleClose }) => {
  const target = usePortal(id);
  return createPortal(
    WrapInGeneric(children, handleClose),
    target
  );
};

export default Portal;
