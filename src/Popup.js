import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-responsive-modal';
import './popup.css';

class Popup extends Component {
  state = {
    open: true,
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <div>
        <Modal open={open} onClose={this.onCloseModal} center>
        <div className = "popup-container">
          <h2> you enjoyed ? </h2>
          <div className ="popup-yes-button">
          <button onClick={this.onCloseModal}> yes </button >
          </div>
        </div>
        </Modal>
      </div>
    );
  }
}

export default Popup;
