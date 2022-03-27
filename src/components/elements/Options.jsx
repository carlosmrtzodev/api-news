import "./Options.css";
import Select from "react-select";
import vue from "../../assets/icons/vue.png";
import react from "../../assets/icons/react.png";
import angular from "../../assets/icons/angular.png";

const options = [
  {
    value: "angular",
    label: (
      <div className="select__options-icon">
        <img src={angular} alt="Icons" className="select__options-icon_image" />{" "}
        Angular
      </div>
    ),
  },
  {
    value: "reactjs",
    label: (
      <div className="select__options-icon">
        <img src={react} alt="Icons" className="select__options-icon_image" />{" "}
        React
      </div>
    ),
  },
  {
    value: "vuejs",
    label: (
      <div className="select__options-icon">
        <img src={vue} alt="Icons" className="select__options-icon_image" /> Vue
      </div>
    ),
  },
];

const Options = ({ method }) => {
  return (
    <div className="select">
      <Select
        options={options}
        className="select__options"
        placeholder="Select your news"
        onChange={method}
        selectOption
      />
    </div>
  );
};
export default Options;
