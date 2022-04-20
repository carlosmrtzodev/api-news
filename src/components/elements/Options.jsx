import { Icons } from "./Icons";
import { useState } from "react";

const Options = ({ method, elements }) => {
  const options = ["Angular", "React", "Vue"];

  const [active, setActive] = useState(false);
  const [selected, setSelected] = useState(
    localStorage.getItem("selectedOption")
  );

  const handleClick = (value) => () => {
    setActive(false);
    setSelected(value);
    method(value);
  };

  return (
    <div className='options'>
      <div className='select__option'>
        <div className='select__option-container'>
          <div
            className='select__option-container_selected'
            onClick={() => setActive(!active)}>
            <span className='select__option-container_selected-option'>
              {selected || "Angular"}
              <Icons
                name={`./${selected || "Angular"}.png`}
                classes='select__option-container_selected-option_image'
              />
            </span>
          </div>

          {active && (
            <div className='select__option-container_options'>
              <ul className='select__option-container_options-list'>
                {options.map((option) => (
                  <li
                    className='select__option-container_options-list_item'
                    onClick={handleClick(option)}
                    key={option}>
                    {option}
                    <Icons
                      name={`./${option}.png`}
                      classes='select__option-container_options-list_item-image'
                    />
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className='options__elements'>
        <p className='options__elements-number'>
          Found <strong>{elements}</strong> items.
        </p>
      </div>
    </div>
  );
};

export { Options };
