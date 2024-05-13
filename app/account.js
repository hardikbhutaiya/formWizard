'use client'
import Image from "next/image";
import { useState } from "react";

export default function Account({ onNextStep }) {

    let [formData, setFormData] = useState({
        email: "",
        username: "",
        password: "",
        confirmPassword: ""
    });

    let customStyle = {
        backgroundColor: "blue",
        height: "2px",
        width: "65%",
        borderRadius: "1px",
        margin: "auto",
    };

    let height = {
        width: "100%",
        margin: "auto",
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
        onNextStep();
    };

    return (<>
        <div className="">
            <div className="card mt-5 p-5" style={height}>
                <div className="col-12">
                    <div className="row text-center">
                        <h2>Sign Up Your User Account</h2>
                        <p>Fill all form field to go to next step</p>
                    </div>
                    <div className="d-flex justify-content-between mt-3">
                        <div>
                            <Image src="/svg/acc-dark.svg" alt="Account" width={0} height={0} layout="responsive" quality={100} sizes="100vh"></Image>
                            <p className="mb-2">Account</p>
                            <div style={customStyle}></div>
                        </div>
                        <div>
                            <Image src="/svg/per-light.svg" alt="Account" width={0} height={0} layout="responsive" quality={100} sizes="100vh"></Image>
                            <p>Personal</p>
                        </div>
                        <div>
                            <Image src="/svg/pay-light.svg" alt="Account" width={0} height={0}
                                layout="responsive" quality={100} sizes="100vh"></Image>
                            <p>Payment</p>
                        </div>
                        <div>
                            <Image src="/svg/finish-light.svg" alt="Account" width={0} height={0}
                                layout="responsive" quality={100} sizes="100vh"></Image>
                            <p>Finish</p>
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