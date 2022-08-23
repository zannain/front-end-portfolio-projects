
import PropTypes, { InferProps } from "prop-types";

export default function Button({buttonText}: InferProps<typeof Button.propTypes>)  {
  return (
      <button>{buttonText}</button>
  )
}

Button.propTypes = {
  buttonText: PropTypes.string.isRequired
};