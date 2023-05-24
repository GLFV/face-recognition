import React, { useState } from 'react';
import { api } from '../../api';
import './FaceDetection.css';

export default function FaceDetection({ url, setModelClose }) {
  const [face, setFace] = useState({
    bottomRow: 306.97342484,
    leftCol: 123.17327999999999,
    rightCol: 122.67804999999998,
    topRow: 110.35676696,
  });

  const calculateFaceLocation = data => {
    const face = data;
    const image = document.getElementById('image');
    const width = Number(image.width);
    const height = Number(image.height);
    setFace({
      leftCol: face.left_col * width,
      topRow: face.top_row * height,
      rightCol: width - face.right_col * width,
      bottomRow: height - face.bottom_row * height,
    });
    console.log(face);
  };

  const handleSubmit = async () => {
    try {
      const response = await api.post('/image', {
        url,
      });
      const data = response.data;
      calculateFaceLocation(data);
    } catch (error) {
      alert('An error had occurred:\n' + error?.response?.data?.message);
    }
  };
  return (
    <div className="container">
      <div className="image-container">
        <img
          className="br3"
          id="image"
          alt=""
          src={url}
          width="500px"
          height="auto"
        />
        <div
          className="bounding-box"
          style={{
            top: face.topRow,
            right: face.rightCol,
            bottom: face.bottomRow,
            left: face.leftCol,
          }}
        ></div>
      </div>

      <div className="button-container">
        <button onClick={handleSubmit} className="custom-button">
          Detect
        </button>
        <button onClick={setModelClose} className="custom-button">
          Close
        </button>
      </div>
    </div>
  );
}
