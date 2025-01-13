const getData = (onSuccess) => {
  fetch('https://29.javascript.htmlacademy.pro/kekstagram/data')
    .then((response) => response.json())
    .then((posts) => {
      onSuccess(posts);
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch('https://29.javascript.htmlacademy.pro/kekstagram', {
    method: 'POST',
    body,
  })
    .then((response) => {
      if (!response.ok) {
        onFail();
      }
      onSuccess(response);
    })
    .catch(() => {
      onFail();
    });
};

export { getData, sendData };
