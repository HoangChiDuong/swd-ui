import AreaCard from "./AreaCard";
import "./AreaCards.scss";

const AreaCards = () => {
    return (
        <section className="content-area-cards">
            <AreaCard
                colors={["#e4e8ef", "#475be8"]}
                percentFillValue={80}
                cardInfo={{
                    title: "Doanh Thu",
                    value: "3000000000000 đ",
                }}
            />
            <AreaCard
                colors={["#e4e8ef", "#4ce13f"]}
                percentFillValue={50}
                cardInfo={{
                    title: "Hợp Đồng",
                    value: "50",

                }}
            />
            <AreaCard
                colors={["#e4e8ef", "#f29a2e"]}
                percentFillValue={40}
                cardInfo={{
                    title: "Nhân viên",
                    value: "20",

                }}
            />
        </section>
    );
};

export default AreaCards;