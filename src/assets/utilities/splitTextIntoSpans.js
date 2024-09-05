export const splitTextIntoSpans = (ref, separator = ' ') => {
    if (!ref.current) return;

    const text = ref.current.innerText.split(separator);
    const wrappedText = text
      .map((item) => {
        return `<span class='inline-block'> ${item} </span>`;
      })
      .join(separator);

    ref.current.innerHTML = wrappedText;
  };