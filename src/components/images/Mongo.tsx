import Image from "../../assests/images/mongo.svg";

const MongoImage = () => {
    return (
        <img
            src={Image}
            alt="MongoDB"
            style={{
                maxWidth: '250px',
                maxHeight: '250px'
            }}
        />
    );
};

export default MongoImage;