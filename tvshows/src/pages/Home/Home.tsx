import { useQuery } from "@tanstack/react-query";
import { TvShow } from "../../types/types";
import { getTvShows } from "../../api/api";
import { useState } from "react";
import { ErrorComponent } from "../../components/Error";
import "./Home.css";
import TvShowCard from "../../components/TvShowCard/TvShowCard";
import { useNavigate } from "react-router-dom";
import SearchCard from "../../components/SearchBox/SearchBox";

const Home: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");
  const [enableSearch, setEnableSearch] = useState(false);

  const navigate = useNavigate();

  const { data, isLoading, error, refetch } = useQuery<TvShow[]>({
    queryKey: ["searchTvShows"],
    queryFn: () => getTvShows(searchValue),
    enabled: enableSearch,
  });

  const searchBoxStyle = data && data?.length > 0 ? "row" : "column";

  if (error) {
    return <ErrorComponent />;
  }

  return (
    <div className="homeContainer">
      <SearchCard
        searchValue={searchValue}
        searchBoxStyle={searchBoxStyle}
        handleChangeText={(e) => setSearchValue(e.target.value)}
        handleClick={() => {
          setEnableSearch(true);
          refetch();
        }}
      />

      {isLoading && <div>Loading...</div>}
      <div className="tvCards">
        {data &&
          data?.length > 0 &&
          data?.map((item) => (
            <TvShowCard
              key={item.show.id}
              tvShow={item}
              handleClickShow={() =>
                navigate(`/details/${item.show.externals.imdb}`)
              }
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
