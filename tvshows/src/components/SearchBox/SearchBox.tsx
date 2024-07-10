import { ChangeEvent } from "react";
import "./SearchBox.css";
import apiLogo from "../../assets/tvm_api.png";

export type SearchCardProps = {
  searchValue: string;
  handleChangeText: (e: ChangeEvent<HTMLInputElement>) => void;
  handleClick: () => void;
  searchBoxStyle: string;
};

const SearchCard = ({
  searchValue,
  handleChangeText,
  handleClick,
  searchBoxStyle,
}: SearchCardProps) => {
  return (
    <div className={searchBoxStyle}>
      <img src={apiLogo} width={300} alt="ApiMaze" />

      <div className="container">
        <input
          placeholder="Search TV-shows..."
          value={searchValue}
          onChange={handleChangeText}
        />
        <button type="button" onClick={handleClick}>Search</button>
      </div>
    </div>
  );
};

export default SearchCard;
