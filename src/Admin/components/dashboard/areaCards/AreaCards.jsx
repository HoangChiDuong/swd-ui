import { useSelector } from "react-redux";
import numeral from "numeral";
import AreaCard from "./AreaCard";
import "./AreaCards.scss";

const AreaCards = () => {
    const data = useSelector((state) => state.cardAdmin.cardDetail);
    return (
        <section className="content-area-cards">
            <AreaCard
                colors={["#e4e8ef", "#475be8"]}
                percentFillValue={80}
                cardInfo={{
                    title: "Doanh Thu",
                    value: `${numeral(data?.totalMoney != null ? data.totalMoney : "0").format("0,0")} VNĐ`,
                }}
            />
            <AreaCard
                colors={["#e4e8ef", "#4ce13f"]}
                percentFillValue={50}
                cardInfo={{
                    title: "Hợp Đồng",
                    value: `${data?.contract}`,

                }}
            />
            <AreaCard
                colors={["#e4e8ef", "#f29a2e"]}
                percentFillValue={40}
                cardInfo={{
                    title: "Nhân viên",
                    value: `${data?.totalStaff}`,

                }}
            />
        </section>
    );
};

export default AreaCards;