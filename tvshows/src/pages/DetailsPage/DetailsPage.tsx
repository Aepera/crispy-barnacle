import { useQuery } from "@tanstack/react-query";
import { useParams, useNavigate } from "react-router-dom";
import { TvShowDetail } from "../../types/types";
import { ErrorComponent } from "../../components/Error";
import { getTvShowDetails } from "../../api/api";
import "./DetailsPage.css";

const DetailsPage: React.FC = () => {
  const { tvshowId } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, error } = useQuery<TvShowDetail>({
    queryKey: ["detailSearch"],
    queryFn: () => getTvShowDetails(tvshowId ?? ""),
  });

  if (error) {
    return <ErrorComponent />;
  }

  return (
    <div className="detailsPage">
      <button
        className="goBackButton"
        type="button"
        onClick={() => navigate(-1)}
      >
        ⬅ Back to search results
      </button>
      {isLoading && <div>Loading...</div>}

      <div className="detailsContainer">
        <img src={data?.image?.original} alt="" height={300} />

        <div className="infoContainer">
          <h1>{data?.name}</h1>
          <p className="showRating">Rating: {data?.rating.average ?? "-"}</p>
          <p className="genre">Genre: {data?.genres ?? ""}</p>
          <p className="summary">
            {data?.summary.replace(/<(?:.|\n)*?>/gm, "") ?? ""}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
