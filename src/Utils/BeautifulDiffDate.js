const BeautifulDiffDate = (date1, date2) => {
  const diffTime = Math.abs(date1 - date2);
  const diffSeconds = diffTime / 1000;
  if (diffDays < 60) {
    return `${Math.ceil(diffSeconds)}s ago`;
  }
  const diffMinutes = diffSeconds / 60;
  if (diffMinutes < 60) {
    return `${Math.ceil(diffMinutes)} mins ago`;
  }
  const diffHours = diffMinutes / 60;
  if (diffHours < 24) {
    return `${Math.ceil(diffHours)} hrs ago`;
  }
  const diffDays = diffHours / 24;
  return `${Math.ceil(diffDays)} days ago`;
};

export default BeautifulDiffDate;
