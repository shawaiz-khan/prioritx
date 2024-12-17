import { useState } from "react";
import axios from "axios";
import { useLoginContext } from "../contexts/LoginContext";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";

export const useLogin = () => {
    const [form, setForm] = useState({ email: "", password: "" });
    const [formErrors, setFormErrors] = useState({ email: null, password: null });
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const { toggleLogin, login } = useLoginContext();
    const { setUserData } = useUserContext();
    const navigate = useNavigate();

    const handleShowPassword = (e) => {
        e.preventDefault();
        setIsShowPassword((prev) => !prev);
    };

    const handleForm = (e) => {
        setForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const validateForm = () => {
        const errors = {};
        if (!form.email.trim()) {
            errors.email = "Email is required.";
        }
        if (!form.password.trim()) {
            errors.password = "Password is required.";
        }
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsLoading(true);
        try {
            const res = await axios.post('http://localhost:3000/api/users/login', form);
            if (res.status === 200) {
                toggleLogin();
                setUserData(res.data.user);
                login(res.data.token);
                navigate('/dashboard');
            }
        } catch (err) {
            if (err.response) {
                console.error('Error Status:', err.response.status);
                console.error('Error Message:', err.response.data.message);
                setFormErrors({
                    email: err.response.data.message || 'Invalid email or password',
                    password: err.response.data.message || 'Invalid email or password',
                });
            } else {
                console.error('Error:', err.message || 'Unknown error');
            }
        } finally {
            setIsLoading(false);
        }
    };

    return {
        form,
        setForm,
        formErrors,
        isShowPassword,
        isLoading,
        handleForm,
        handleShowPassword,
        handleSubmit,
    };
};
