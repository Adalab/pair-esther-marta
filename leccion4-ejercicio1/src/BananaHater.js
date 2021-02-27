import React from 'react';

function BananaHater(props) {
  return <textarea>
  Hello there, this is some text in a text area
</textarea>;
}

const onClickListener = ev => {
  alert('ODIO LOS PLATANOS!!');
};
const alertButton = (
  <button onClick={onClickListener}>ODIO LOS PLATANOS</button>
);


export default BananaHater;