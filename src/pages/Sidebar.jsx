import PropTypes from 'prop-types';
import '../css/Sidebar.css';

const Sidebar = ({ options, onItemClick, selectedItem }) => {
  return (
    <div className="sidebar" style={{fontFamily: 'Tektur, sans-serif'}}>
      <ul>
        {options.map((option, index) => (
          <li
            key={index}
            className={selectedItem === option ? 'active' : ''}
            onClick={() => onItemClick(option)}
          >
            {option.logo && (
              <span className="logo">{typeof option.logo === 'string' ? option.logo : <option.logo />}</span>
            )} &nbsp;           
            {option.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

Sidebar.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      component: PropTypes.element.isRequired, // Ensure component is required
      logo: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    })
  ).isRequired,
  onItemClick: PropTypes.func.isRequired,
  selectedItem: PropTypes.shape({
    name: PropTypes.string.isRequired,
    component: PropTypes.element.isRequired,
    logo: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  }),
};

export default Sidebar;
