import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Autocomplete.module.scss";

interface Props {
  data: string[]; // array sugestions data
}

const AutoComplete = ({ data }: Props) => {
  const cx = classNames.bind(styles);
  // list of filtered sugestions
  const [suggestions, setSuggestions] = useState([] as string[]);
  // define wich sugestion index is selected
  const [suggestionIndex, setSuggestionIndex] = useState(0);
  // define if a suggestion list is displayed
  const [suggestionsActive, setSuggestionsActive] = useState(false);
  // input field value
  const [value, setValue] = useState("");

  const handleChange = (e: any) => {
    const query = e.target.value.toLowerCase();
    setValue(query);
    // if user input something in the searc field
    if (query.length > 1) {
      // we never mutate the original data array
      const filterSuggestions = data.filter(
        (suggestion: any) => suggestion.toLowerCase().indexOf(query) > -1
      );
      setSuggestions(filterSuggestions);
      setSuggestionsActive(true);
    } else {
      setSuggestionsActive(false);
    }
  };

  // when user clicks in a item of sugestion list
  const handleClick = (e: any) => {
    // clean the filtered sugestions
    setSuggestions([]);
    // set the input value, with selected value in the sugestion list
    setValue(e.target.innerText);
    // close the sugestions list
    setSuggestionsActive(false);
  };

  // controls when the user navigate throuht the sugestions list
  const handleKeyDown = (e: any) => {
    // up arrow
    if (e.keyCode === 38) {
      // top of sugestions list
      if (suggestionIndex === 0) {
        return;
      }
      setSuggestionIndex(suggestionIndex - 1);
    }
    // down arrow
    else if (e.keyCode === 40) {
      // bottom of sugestions list
      if (suggestionIndex - 1 === suggestions.length) {
        return;
      }
      setSuggestionIndex(suggestionIndex + 1);
    }
    // enter
    else if (e.keyCode === 13) {
      // set the input value, with selected value in the sugestion list
      setValue(suggestions[suggestionIndex]);
      // clear the selected value of sugestions list
      setSuggestionIndex(0);
      // close the sugestions list
      setSuggestionsActive(false);
    }
  };

  const Suggestions = () => {
    return (
      <ul className={styles.sugestions}>
        {suggestions.map((suggestion, index) => (
          <li
            className={cx({ active: suggestionIndex === index })}
            key={index}
            onClick={handleClick}
          >
            {suggestion}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className={styles.autocomplete}>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      {suggestionsActive && <Suggestions />}
    </div>
  );
};

export default AutoComplete;
