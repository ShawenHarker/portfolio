import Image from "../../assests/images/mysql.svg";

const MysqlImage = () => {
    return (
        <img
            src={Image}
            alt="Mysql"
            style={{
                maxWidth: '250px',
                maxHeight: '250px'
            }}
        />
    );
};

export default MysqlImage;