/**
  {
    "api":1,
    "name":"Format Timestamp",
    "description":"Format timestamp",
    "author":"Jimmy Wang",
    "icon":"broom",
    "tags":"date"
  }
**/

function main(state) {
  const timestampStr = state.fullText.trim();
  let timestamp = +timestampStr;
  if (timestamp.length === 10) {
    timestamp = timestampStr * 1000;
  }
  const date = new Date(timestamp);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  const displayMonth = month < 10 ? `0${month}` : `${month}`;
  const displayDay = day < 10 ? `0${day}` : `${day}`;
  const displayHour = hour < 10 ? `0${hour}` : `${hour}`;
  const displayMunite = minute < 10 ? `0${minute}` : `${minute}`;
  const displaySecond = second < 10 ? `0${second}` : `${second}`;
  state.fullText = `${date.getFullYear()}-${displayMonth}-${displayDay} ${displayHour}:${displayMunite}:${displaySecond}`;
}
