'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Payment({onNextStep, onPreviousStep}) {

    const [formData, setFormData] = useState({
        nameofcard: "",
        cardnumber: "",
        expirationdate: "",
        cvv: ""
    });

    const customStyle = {
        height: "3px",
        width: "65%",
        margin: "auto",
    };

    const logo = {
        width: "15px",
        height: "20px"
    };

    const logoBg = {
        width: "50px",
        height: "50px",
        backgroundColor: "#EDF5FF",
    };

    const aclg = {
        width: "15px",
        height: "20px"
    };

    const activeLogo = {
        width: "50px",
        height: "50px",
        backgroundColor: "#2F73F2",
    };

    const height = {
        width: "100%",
        margin: "auto",
        maxWidth: "1080px"
    };

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

    const p = {
        color: "#547593"
    };

    return (<>
        <div className="" style={height}>
            <div className="card mt-5 p-5 rounded-4">
                <div className="col-12">
                    <div className="row text-center">
                        <h2>Sign Up Your User Account</h2>
                        <p style={p}>Fill all form field to go to next step</p>
                    </div>
                    <div className="d-flex justify-content-between mt-3">
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <div className="p-3 rounded-circle" style={logoBg}>
                                <div className="d-flex justify-content-center align-items-center" style={logo}>
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
                            <div className="p-3 rounded-circle justify-content-center" style={activeLogo}>
                                <div className="d-flex justify-content-center align-items-center" style={aclg}>
                                    <Image
                                        src="/svg/pay-light.svg"
                                        alt="payment"
                                        width={0}
                                        height={0}
                                        layout="responsive"
                                        quality={100}
                                        sizes="100vh"
                                    ></Image>
                                </div>
                            </div>
                            <p className="mt-2 mb-1">Payment</p>
                            <div className="bg-primary" style={customStyle}></div>
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
                        <h4>Card Information</h4>
                        <div className="mt-3">
                            <p>Card Type</p>
                            <div className="d-flex gap-1">
                                <div className="col-md-6 col-lg-3 mb-4">
                                    <div className="card shadow">
                                        <div className="card-body">
                                            <Image
                                                src="/img/mastercard.png"
                                                alt="card"
                                                width={0}
                                                height={0}
                                                layout="responsive"
                                                quality={100}
                                                sizes="100vh"
                                            ></Image>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3 mb-4">
                                    <div className="card shadow">
                                        <div className="card-body">
                                            <Image
                                                src="/img/visa.png"
                                                alt="card"
                                                width={0}
                                                height={0}
                                                layout="responsive"
                                                quality={100}
                                                sizes="100vh"
                                            ></Image>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3 mb-4">
                                    <div className="card shadow">
                                        <div className="card-body">
                                            <Image
                                                src="/img/rupay.png"
                                                alt="card"
                                                width={0}
                                                height={0}
                                                layout="responsive"
                                                quality={100}
                                                sizes="100vh"
                                            ></Image>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3 mb-4">
                                    <div className="card shadow py-3">
                                        <div className="card-body p-4 text-center">
                                            <Link className="text-dark no-underline" href={""}>See All</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mt-3">
                            <form className="d-flex flex-column gap-4">
                                <div className="py-2">
                                    <label>Name of Card</label>
                                    <input className="w-100 px-3 py-2 border-bottom" type="text" name="nameofcard" value={formData.nameofcard} onChange={handleChange} placeholder="Name of Card" />
                                </div>
                                <div className="py-2">
                                    <label>Card Number</label>
                                    <input className="w-100 px-3 py-2 border-bottom" type="cardnumber" name="cardnumber" value={formData.cardnumber} onChange={handleChange} placeholder="Card Number" />
                                </div>
                                <div className="d-flex py-2">
                                    <div className="w-45">
                                        <label>Expiration date</label>
                                        <input className="w-100 px-3 py-2 border-bottom" type="month" name="year" value={formData.expirationdate} onChange={handleChange} placeholder="mm/yy" />
                                    </div>
                                    <div className="w-45 px-5 PY-2">
                                        <label>CVV</label>
                                        <input className="w-100 px-3 py-2 border-bottom" type="cvv" name="cvv" value={formData.cvv} onChange={handleChange} placeholder="cvv" />
                                    </div>
                                </div>
                            </form>
                            <div className="d-flex justify-content-between mt-4">
                                <button className="btn btn-light" onClick={handlePrevious}>Previous Step</button>
                                <button className="btn btn-primary" onClick={handleSubmit}>Next Step</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}