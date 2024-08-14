export const handleCopy = (aiResponse: string) => {
  navigator.clipboard
    .writeText(aiResponse)
    .then(() => {
      alert("Text copied to clipboard!");
    })
    .catch(() => {
      alert("Failed to copy text.");
    });
};
