import Subcategory from "./Subcategory";
import { ClockCircleOutlined } from "@ant-design/icons";
import StarsIcons from "./StarsIcons";
import { useState } from "react";

const ShowDetailsList = ({ items }) => {
  const [isOnline, setIsOnline] = useState(false);
  const [onlineData, setOnlineData] = useState([]);

  const [isOffline, setIsOffline] = useState(false);
  const [offlineData, setOfflineData] = useState([]);
  console.log(offlineData);

  return (
    <div className="detail">
      <Subcategory
        data={items}
        onlineData={setOnlineData}
        offlineData={setOfflineData}
        isOnline={setIsOnline}
        isOffline={setIsOffline}
      />
      {isOnline
        ? onlineData.map((el, i) => (
            <div className="detailInner" key={i}>
              <div className="detailContainer">
                <div className="menu-items-detail">
                  <span className="subtitle">{el.name}</span>
                  <span className="subprice">$ {el.price}</span>
                </div>
                <div className="detailContainerSub">
                  <span>
                    {el.time} min <ClockCircleOutlined />{" "}
                  </span>
                  <span>{el.key} services</span>
                </div>
                <div className="detailContainerBottom">
                  <div>
                    <span>
                      <StarsIcons stars={items} />
                    </span>
                    <span className="reviewStar">{el.review} reviews</span>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          ))
        : ""}
      {isOffline
        ? offlineData.map((el, i) => (
            <div className="detailInner" key={i}>
              <div className="detailContainer">
                <div className="menu-items-detail">
                  <span className="subtitle">{el.name}</span>
                  <span className="subprice">$ {el.price}</span>
                </div>
                <div className="detailContainerSub">
                  <span>
                    {el.time} min <ClockCircleOutlined />{" "}
                  </span>
                  <span>{el.key} services</span>
                </div>
                <div className="detailContainerBottom">
                  <div>
                    <span>
                      <StarsIcons stars={items} />
                    </span>
                    <span className="reviewStar">{el.review} reviews</span>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          ))
        : ""}
    </div>
  
  );
};

export default ShowDetailsList;
