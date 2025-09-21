import moment from "moment";
import { useEffect, useState } from "react";
import { FaEye, FaShare, FaStar } from "react-icons/fa";
import { FaBookBookmark } from "react-icons/fa6";
import { useLoaderData, useParams } from "react-router-dom";

const CategoryNews = () => {
  const { id } = useParams();
  const loadData = useLoaderData();
  const [matchedItems, setMatchedItems] = useState([]);

  useEffect(() => {
    if (parseInt(id) === 0) {
      setMatchedItems(loadData);
    } else if (parseInt(id) === 1) {
      const categoryItems = loadData.filter(
        (item) => item.others.is_today_pick == true
      );
      setMatchedItems(categoryItems);
    } else {
      const categoryItems = loadData.filter((item) => item.category_id == id);
      setMatchedItems(categoryItems);
    }
  }, [id, loadData]);

  return (
    <div>
      Total {matchedItems.length} Artciles Found
      {matchedItems.map((data) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
          stars.push(
            <input
              key={i}
              className={`mask mask-star-2 h-4 ${
                i <= data.rating.number ? "bg-yellow-300" : "bg-gray-300"
              }`}
            />
          );
        }
        return (
          <div
            key={data.id}
            className="card shadow-lg bg-base-100 w-11/12 m-1 rounded border-blue-300 border-1 "
          >
            <div className="bg-gray-700 flex justify-between items-center p-3">
              <div className="flex items-center">
                <img
                  className="h-8 w-8 rounded-3xl"
                  src={data.author.img}
                  alt="author"
                />
                <div className="ms-2 text-xs">
                  <p>{data.author.name}</p>
                  <p>
                    {moment(data.author.published_date).format("MMMM Do, YYYY")}
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <button>
                  <FaBookBookmark />
                </button>
                <button>
                  <FaShare />{" "}
                </button>
              </div>
            </div>
            <figure>
              <img src={data.image_url} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{data.title}</h2>
              <p>
                {data.details.length > 200
                  ? data.details.slice(0, 200) + "..."
                  : data.details}
              </p>
              {data.details.length > 200 ? (
                <div className="card-actions justify-start">
                  <button className="btn btn-ghost">Read More</button>
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <hr className="mb-2 text-blue-300" />
            <div className="flex items-center justify-between py-2 text-xs px-3 ">
              <div className="rating">{stars}</div>

              <p className="flex items-center gap-2">
                <FaEye /> <span>{data?.total_view}</span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryNews;
