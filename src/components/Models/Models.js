import React from 'react';
import ReactDOM from 'react-dom';

const FaceDetection = document.getElementById('face-detection');

class FaceDetectionModal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    FaceDetection.appendChild(this.el);
  }

  componentWillUnmount() {
    FaceDetection.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

export default FaceDetectionModal;
