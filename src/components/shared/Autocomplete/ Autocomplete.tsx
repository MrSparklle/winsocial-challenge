import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Autocomplete.module.scss";

interface Props {
  data: string[];
}

const AutoComplete = ({ data }: Props) => {
  const cx = classNames.bind(styles);

  const [suggestions, setSuggestions] = useState([] as string[]);
  const [suggestionIndex, setSuggestionIndex] = useState(0);
  const [suggestionsActive, setSuggestionsActive] = useState(false);
  const [value, setValue] = useState("");

  const handleChange = (e: any) => {
    const query = e.target.value.toLowerCase();
    setValue(query);
    if (query.length > 1) {
      const filterSuggestions = data.filter(
        (suggestion: any) => suggestion.toLowerCase().indexOf(query) > -1
      );
      setSuggestions(filterSuggestions);
      setSuggestionsActive(true);
    } else {
      setSuggestionsActive(false);
    }
  };

  const handleClick = (e: any) => {
    setSuggestions([]);
    setValue(e.target.innerText);
    setSuggestionsActive(false);
  };

  const handleKeyDown = (e: any) => {
    // up arrow
    if (e.keyCode === 38) {
      if (suggestionIndex === 0) {
        return;
      }
      setSuggestionIndex(suggestionIndex - 1);
    }
    // down arrow
    else if (e.keyCode === 40) {
      if (suggestionIndex - 1 === suggestions.length) {
        return;
      }
      setSuggestionIndex(suggestionIndex + 1);
    }
    // enter
    else if (e.keyCode === 13) {
      setValue(suggestions[suggestionIndex]);
      setSuggestionIndex(0);
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
