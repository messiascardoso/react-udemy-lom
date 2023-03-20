import P from 'prop-types';
import './styles.css';

export const Button = ({ text, onMorePage, disabled = false }) => (
  <button disabled={disabled} className="btn-primary" onClick={onMorePage}>
    {text}
  </button>
);

Button.defaultProps = {
  disabled: false,
};

Button.propTypes = {
  text: P.string.isRequired,
  onMorePage: P.func.isRequired,
  disabled: P.bool,
};
