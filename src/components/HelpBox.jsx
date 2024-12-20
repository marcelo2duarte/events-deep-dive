import { string } from 'prop-types';

import './HelpBox.css';

function HelpBox({ title, text }) {
  return (
    <article className="help-box">
      <h2>{title}</h2>
      <p>{text}</p>
    </article>
  );
}

// Comment
// Comment 2
// Comment 3
// Comment 4
// Comment 5

HelpBox.propTypes = {
  title: string,
  text: string,
};

export default HelpBox;
