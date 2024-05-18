'use client'
import Image from "next/image";
import { useState } from "react";

export default function Personal({ onNextStep, onPreviousStep }) {

    const [submittedData, setSubmittedData] = useState(null)
    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        contactnumber: "",
        selectgender: ""
    });

    const handleChange = (e) => {
        let { name, value } = e.target
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onNextStep();
    };

    const handlePrevious = () => {
        onPreviousStep();
    };

    const handlePrint = () => {
        setSubmittedData(formData);
    };

    return (<>
        <div className="container">
            <div className="card mt-5 p-5 rounded-5">
                <div className="col-12">
                    <div className="row text-center">
                        <h2>Sign Up Your User Account</h2>
                        <p className="prgp">Fill all form field to go to next step</p>
                    </div>
                    <div className="d-flex justify-content-between mt-3">
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <div className="p-3 rounded-circle logoBg">
                                <div className="d-flex justify-content-center align-items-center aclg">
                                    <Image
                                        src="/svg/acc-dark.svg"
                                        alt="Account"
                                        width={0}
                                        height={0}
                                        layout="responsive"
                                        quality={100}
                                        sizes="100vh"
                                    ></Image>
                                </div>
                            </div>
                            <p className="mt-2">Account</p>
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <div className="p-3 rounded-circle activeLogo">
                                <div className="d-flex justify-content-center align-items-center aclg">
                                    <Image
                                        src="/svg/user-light.svg"
                                        alt="Personal"
                                        width={0}
                                        height={0}
                                        layout="responsive"
                                        quality={100}
                                        sizes="100vh"
                                    ></Image>
                                </div>
                            </div>
                            <p className="mt-2 mb-1">Personal</p>
                            <div className="customStyle"></div>
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <div className="p-3 rounded-circle logoBg">
                                <div className="d-flex justify-content-center align-items-center aclg">
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
                            <div className="p-3 rounded-circle logoBg">
                                <div className="d-flex justify-content-center align-items-center aclg">
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
                        <h4>Personal Information</h4>
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
                                <button className="btn btn-light" onClick={handlePrevious}>Previous Step</button>
                                <button className="btn btn-success" onClick={handlePrint}>submit</button>
                                <button className="btn btn-primary" onClick={handleSubmit}>Next Step</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {submittedData && (
                    <div className="mt-3">
                        <h2>Submitted Data</h2>
                        <p>Full Name: {submittedData.fullname}</p>
                        <p>E-Mail: {submittedData.email}</p>
                        <p>Contact Number: {submittedData.contactnumber}</p>
                        <p>Select Gender: {submittedData.selectgender}</p>
                    </div>
                )}
            </div>
        </div>
    </>)
}