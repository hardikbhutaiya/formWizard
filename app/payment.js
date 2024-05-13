'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Payment() {

    let [formData, setFormData] = useState({
        nameofcard: "",
        cardnumber: "",
        expirationdate: "",
        cvv: ""
    });

    let customStyle = {
        backgroundColor: "blue",
        color: "white",
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
                                src="/svg/per-light.svg"
                                alt="Account"
                                width={0}
                                height={0}
                                layout="responsive"
                                quality={100}
                                sizes="100vh"
                            ></Image>
                            <p>Personal</p>
                        </div>
                        <div>
                            <Image
                                src="/svg/pay-dark.svg"
                                alt="Account"
                                width={0}
                                height={0}
                                layout="responsive"
                                quality={100}
                                sizes="100vh"
                            ></Image>
                            <p className="mb-2">Payment</p>
                            <div style={customStyle}></div>
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
                        <h2>Card Information</h2>
                        <div className="mt-3">
                            <p>Card Type</p>
                            <div className="d-flex gap-1">
                                <div className="col-md-6 col-lg-3 mb-4">
                                    <div className="card shadow">
                                        <div className="card-body">
                                            <Image
                                                src="/img/mastercard.png"
                                                alt="Account"
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
                                                alt="Account"
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
                                                alt="Account"
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