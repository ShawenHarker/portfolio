import Image from "../../assests/images/laravel.svg";

const LaravelImage = () => {
    return (
        <img
            src={Image}
            alt="Laravel"
            style={{
                maxWidth: '250px',
                maxHeight: '250px'
            }}
        />
    );
};

export default LaravelImage;