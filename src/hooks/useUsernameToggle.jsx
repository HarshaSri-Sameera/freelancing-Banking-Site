import { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

function useUsernameToggle() {
    const [visible, setVisibility] = useState(false);

    const Icon1 = visible ? <FaRegEye /> : <FaRegEyeSlash />;
    const InputType = visible ? 'text' : 'password';

    const toggleVisibility = () => {
        setVisibility((prevVisibility) => !prevVisibility);
    };

    return [InputType, Icon1, toggleVisibility];
}

export default useUsernameToggle;
