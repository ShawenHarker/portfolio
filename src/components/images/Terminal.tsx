import Image from "../../assests/images/terminal.svg";

const TerminalImage = () => {
    return (
        <img
            src={Image}
            alt="Terminal"
            style={{
                maxWidth: '250px',
                maxHeight: '250px'
            }}
        />
    );
};

export default TerminalImage;