import React from "react";
import TestModal from '../modals/TestModal';
import { connect } from "react-redux";

const modalLookup = {
  TestModal
};

const mapStateToProps = state => ({
  currentModal: state.modals
});

const ModalManager = ({ currentModal }) => {
  let renderedModal;

  if (currentModal) {
    const { modalType, modalProps } = currentModal;
    const ModalComponent = modalLookup[modalType];

    renderedModal = ( 
      <ModalComponent {...modalProps} />
      )
  }

  return (
    <span>{ renderedModal }</span>
  );
};

export default connect(mapStateToProps)(ModalManager);
