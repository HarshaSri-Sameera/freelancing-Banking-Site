import PropTypes from 'prop-types';
import '../css/MainContent.css';

const MainContent = ({ selectedItem }) => {
  return (
    <div className="main-content">
      {selectedItem ? <p>{selectedItem.name}</p> : <p>Select an option from the sidebar</p>}
    </div>
  );
};

MainContent.propTypes = {
  selectedItem: PropTypes.shape({
    name: PropTypes.string.isRequired
  })
};

export default MainContent;
