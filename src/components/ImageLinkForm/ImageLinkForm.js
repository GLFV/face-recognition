import React, { useState } from 'react';
import './ImageLinkForm.css';
import FaceDetectionModal from '../Models/Models';
import FaceDetection from '../FaceDetection/FaceDetection';

export default function ImageLinkForm() {
  const [url, setUrl] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      {isModalOpen && (
        <FaceDetectionModal>
          <div className="face-detection-modal">
            <FaceDetection
              url={url}
              setModelClose={() => setIsModalOpen(false)}
            />
          </div>
        </FaceDetectionModal>
      )}
      <p className="f3 center">
        {'This Magic Brain will detect faces in your pictures.'}
      </p>
      <div className="center">
        <div className="form center pa4 br3 shadow-5">
          <input
            className="f4 pa2 w-70 center"
            type="text"
            onChange={event => {
              setUrl(event.target.value);
            }}
          />
          <button
            className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
            type="submit"
            onClick={() => setIsModalOpen(true)}
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
}
