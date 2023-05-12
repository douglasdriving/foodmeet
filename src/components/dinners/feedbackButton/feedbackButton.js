import { useState } from 'react';
import FeedbackModal from './feedbackModal/feedbackModal';

export default function FeedbackButton() {

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div style={{ width: '100%', textAlign: 'center' }}>

      <FeedbackModal open={modalOpen} setOpen={setModalOpen} />

      <button
        style={{ backgroundColor: 'lightblue', color: 'black', width: 'fit-content' }}
        onClick={() => { setModalOpen(true) }}
      >
        🗨️ Feedback
      </button>

    </div>
  );

}
