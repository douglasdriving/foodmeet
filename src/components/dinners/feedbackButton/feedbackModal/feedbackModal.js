import Modal from "../../../modal/modal"

export default function FeedbackModal({ open, setOpen }) {

  const lightLink = {
    color: 'lightblue',
  }

  return (
    <Modal
      isOpen={open}
      onClose={() => { setOpen(false) }}
      closebutton
      small
    >
      <div style={{ textAlign: 'left' }}>
        <h2>🗨️ Give Feedback</h2>
        <p>
          Happy to see you are trying out the FoodMeet prototype!
          It's a concept I wanted to test.
          I'm curious to hear what you think about the idea.
        </p>
        <p>
          If you want to give me your feedback, there are 3 ways:
        </p>
        <ol>
          <li>
            <a
              href='https://forms.gle/5sTgM5AvGEDYvxFy7'
              style={lightLink}
              target="_blank"
              rel="noreferrer"
            >
              Fill out the feedback form
            </a>
          </li>
          <li>Discuss it over a quick chat</li>
          <li>Write me your feedback directly</li>
        </ol>
        <p>
          If you want to book a chat or write me directly,
          you contact me on:
        </p>
        <ul>
          <li>douglasdriving@gmail.com</li>
          <li>+46704066162 (WhatsApp)</li>
        </ul>
      </div>
    </Modal>
  )

}