import { TvShow } from "../../types/types";
import "./TvShowCard.css";

export type TvShowCardProps = {
  tvShow: TvShow;
  handleClickShow: () => void;
};

const TvShowCard = ({ tvShow, handleClickShow }: TvShowCardProps) => {
  return (
    <div onClick={handleClickShow} className="tvShow">
      <img src={tvShow.show.image?.medium} alt="" />

      <p className="showTitle">{tvShow.show.name}</p>
      <p className="showRating">Rating: {tvShow.show.rating.average ?? "-"}</p>
    </div>
  );
};

export default TvShowCard;
