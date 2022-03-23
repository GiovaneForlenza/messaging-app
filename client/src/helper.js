export function getMessageTime(timestamp) {
  let editedTime = timestamp.substring(
    timestamp.indexOf(" "),
    timestamp.length - 3
  );
  return <span>{editedTime}</span>;
}
