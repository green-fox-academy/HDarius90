import './Message.css';

function zeroPadding(value) {
  return value.toString().padStart(2, '0');
}

function getDate(value) {
  return `${value.getFullYear()}.${zeroPadding(value.getMonth() + 1)}.${zeroPadding(value.getDate())}.`;
}

function getTime(value) {
  return `${zeroPadding(value.getHours())}:${zeroPadding(value.getMinutes())}`;
}

export default function Message(props) {
  const { message, user } = props;
  const date = getDate(message.datetime);
  const time = getTime(message.datetime);

  return (
    <div className={ `message ${user.displayName !== message.sender ? 'message-reverse' : ''}` }>
      <div className="datetime">
        <div className="datetime-date">{date}</div>
        <div className="datetime-time">{time}</div>
      </div>
      <div className="sender">
        <div className="sender-image">
          <img src={message.photoURL} alt={message.sender} title={message.sender} />
        </div>
        <div className="sender-name d-none">{message.sender}</div>
      </div>
      <div className="text">{message.text}</div>
    </div>
  );
}