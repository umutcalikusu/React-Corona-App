import PropTypes from "prop-types";
const Logo = ({ logo, title }) => {
  return (
    <div className="flex items-center">
      <img src={logo} alt={title} className="mr-3 h-6" />
      <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
        {title}
      </span>
    </div>
  );
};
Logo.propTypes = {
  title: PropTypes.string,
  logo: PropTypes.string,
};
Logo.defaultProps = {
  title: "Corona App",
  logo: "https://images.unsplash.com/photo-1584118624012-df056829fbd0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29yb25hdmlydXN8ZW58MHx8MHx8fDA%3D",
};
export default Logo;
