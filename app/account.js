'use client'
import Image from "next/image";
import { useState } from "react";

export default function Account({}) {

    let [formData, setFormData] = useState({
        email: "",
        username: "",
        password: "",
        confirmPassword: ""
    });

    let customStyle = {
        // backgroundColor: "blue",
        height: "3px",
        width: "65%",
        margin: "auto",
    };

    let logo = {
        width: "15px",
        height: "20px"
    }

    let logoBg = {
        width: "50px",
        height: "50px",
        backgroundColor: "#EDF5FF",
    }

    let aclg = {
        width: "15px",
        height: "20px"
    }

    let activeLogo = {
        width: "50px",
        height: "50px",
        backgroundColor: "#2F73F2",
    }

    let height = {
        width: "100%",
        maxWidth: "1080px"
    }

    let handleChange = (e) => {
        let { name, value } = e.target
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    let handleSubmit = (e) => {
        e.preventDefault();
        // onNextStep();
    };

    return (<>
        <div className="" style={height}>
            <div className="card p-5">
                <div className="col-12">
                    <div className="row text-center">
                        <h2>Sign Up Your User Account</h2>
                        <p>Fill all form field to go to next step</p>
                    </div>
                    <div className="d-flex justify-content-between mt-3">
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <div className="p-3 rounded-circle" style={activeLogo}>
                                <div className="d-flex justify-content-center align-items-center" style={aclg}>
                                    <Image
                                        src="/svg/acc-light.svg"
                                        alt="Account"
                                        width={0}
                                        height={0}
                                        layout="responsive"
                                        quality={100}
                                        sizes="100vh"
                                    ></Image>
                                </div>
                            </div>
                            <p className="mt-2 mb-1">Account</p>
                            <div className="bg-primary" style={customStyle}></div>
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <div className="p-3 rounded-circle" style={logoBg}>
                                <div className="d-flex justify-content-center align-items-center" style={logo}>
                                    <Image
                                        src="/svg/user-dark.svg"
                                        alt="Personal"
                                        width={0}
                                        height={0}
                                        layout="responsive"
                                        quality={100}
                                        sizes="100vh"
                                    ></Image>
                                </div>
                            </div>
                            <p className="mt-2">Personal</p>
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <div className="p-3 rounded-circle" style={logoBg}>
                                <div className="d-flex justify-content-center align-items-center" style={logo}>
                                    <Image
                                        src="/svg/pay-dark.svg"
                                        alt="payment"
                                        width={0}
                                        height={0}
                                        layout="responsive"
                                        quality={100}
                                        sizes="100vh"
                                    ></Image>
                                </div>
                            </div>
                            <p className="mt-2">Payment</p>
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <div className="p-3 rounded-circle" style={logoBg}>
                                <div className="d-flex justify-content-center align-items-center" style={logo}>
                                    <Image
                                        src="/svg/finish-dark.svg"
                                        alt="finish"
                                        width={0}
                                        height={0}
                                        layout="responsive"
                                        quality={100}
                                        sizes="100vh"
                                    ></Image>
                                </div>
                            </div>
                            <p className="mt-2">Finish</p>
                        </div>
                    </div>
                    <div className="mt-3">
                        <h2>Account Information</h2>
                        <div className="col-12 mt-3">
                            <form className="d-flex flex-column gap-4" onSubmit={handleSubmit}>
                                <div>
                                    <input className="w-100 px-3 py-2 border-bottom" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="E-mail Id" />
                                </div>
                                <div>
                                    <input className="w-100 px-3 py-2 border-bottom" type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username" />
                                </div>
                                <div>
                                    <input className="w-100 px-3 py-2 border-bottom" type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
                                </div>
                                <div>
                                    <input className="w-100 px-3 py-2 border-bottom" type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm Password" />
                                </div>
                            </form>
                            <div className="d-flex justify-content-center mt-4">
                                <button className="btn btn-primary" onClick={handleSubmit}>Next Step</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
};