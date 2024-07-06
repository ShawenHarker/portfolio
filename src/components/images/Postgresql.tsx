import Image from "../../assests/images/postgresql.svg";

const PostgresqlImage = () => {
    return (
        <img
            src={Image}
            alt="Postgresql"
            style={{
                maxWidth: '250px',
                maxHeight: '250px'
            }}
        />
    );
};

export default PostgresqlImage;