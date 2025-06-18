import PropTypes from "prop-types";

function Alert(props) {
  const captilize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    props.alert && (
      <div
        className={` alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{captilize(props.alert.type)}</strong> {props.alert.message}
      </div>
    )
  );
}

Alert.propTypes = {
  alert: PropTypes.string,
};

export default Alert;
