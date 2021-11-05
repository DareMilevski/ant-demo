import { MedicineBoxOutlined, LaptopOutlined } from "@ant-design/icons";

const Subcategory = ({
  data,
  onlineData,
  isOnline,
  isOffline,
  offlineData,
}) => {
  const getOnlineCategories = () => {
    data.map((item) => {
      onlineData([item]);
      isOnline(true);
    });
  };

  const getOfflineCategories = () => {
    const onlineArray = []
    data.map((item) => {
      if (item.online === false) {
        onlineArray.push([item])
        console.log("in clinic data", item);
        isOffline(true);
      }
    });
    offlineData(onlineArray);
  };

  return (
    <div className="showSubcategory">
      <div
        className="showSubcategoryInner"
        onClick={() => {
          getOfflineCategories();
        }}
      >
        <MedicineBoxOutlined />
        In clinic
      </div>
      <div
        className="showSubcategoryInner"
        onClick={() => {
          getOnlineCategories();
        }}
      >
        <LaptopOutlined />
        Virtual Consultation
      </div>
    </div>
  );
};

export default Subcategory;
