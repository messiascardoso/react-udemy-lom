import './styles.css';

export const Button = ({text, onMorePage, disabled}) => (
  <button 
  disabled={disabled} 
  className="btn-primary"  
  onClick={onMorePage}>{text}</button>
)