'use client'
import Image from "next/image";
import { useState } from "react";

export default function Personal() {

    let [formData, setFormData] = useState({
        fullname: "",
        email: "",
        contactnumber: "",
        selectgender: ""
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
    };

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
        <div className="container">
            <div className="card mt-5 p-5" style={height}>
                <div className="col-12">
                    <div className="row text-center">
                        <h2>Sign Up Your User Account</h2>
                        <p>Fill all form field to go to next step</p>
                    </div>
                    <div className="d-flex justify-content-between mt-3">
                        <div>
                            <Image
                                src="/svg/acc-light.svg"
                                alt="Account"
                                width={0}
                                height={0}
                                layout="responsive"
                                quality={100}
                                sizes="100vh"
                            ></Image>
                            <p>Account</p>
                        </div>
                        <div>
                            <Image
                                src="/svg/per-dark.svg"
                                alt="Account"
                                width={0}
                                height={0}
                                layout="responsive"
                                quality={100}
                                sizes="100vh"
                            ></Image>
                            <p className="mb-2">Personal</p>
                            <div style={customStyle}></div>
                        </div>
                        <div>
                            <Image
                                src="/svg/pay-light.svg"
                                alt="Account"
                                width={0}
                                height={0}
                                layout="responsive"
                                quality={100}
                                sizes="100vh"
                            ></Image>
                            <p>Payment</p>
                        </div>
                        <div>
                            <Image
                                src="/svg/finish-light.svg"
                                alt="Account"
                                width={0}
                                height={0}
                                layout="responsive"
                                quality={100}
                                sizes="100vh"
                            ></Image>
                            <p>Finish</p>
                        </div>

                    </div>
                    <div className="mt-3">
                        <h2>Personal Information</h2>
                        <div className="col-12 mt-3">
                            <form className="d-flex flex-column gap-4" onSubmit={handleSubmit}>
                                <div>
                                    <input className="w-100 px-3 py-2 border-bottom" type="text" name="fullname" value={formData.fullname} onChange={handleChange} placeholder="Full Name" />
                                </div>
                                <div>
                                    <input className="w-100 px-3 py-2 border-bottom" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="E-mail" />
                                </div>
                                <div>
                                    <input className="w-100 px-3 py-2 border-bottom" type="contactnumber" name="contactnumber" value={formData.contactnumber} onChange={handleChange} placeholder="Contact Number" />
                                </div>
                                <div>
                                    <p>Select Gender</p>
                                    <div className="w-25 d-flex gap-4">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" value={formData.selectgender} id="flexRadioDefault1" />
                                            <label className="form-check-label" for="flexRadioDefault1">
                                                Male
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" value={formData.selectgender} id="flexRadioDefault2" />
                                            <label className="form-check-label" for="flexRadioDefault2">
                                                Female
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div className="d-flex justify-content-between mt-4">
                                <button className="btn btn-light">Previous Step</button>
                                <button className="btn btn-primary" onClick={handleSubmit}>Next Step</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}