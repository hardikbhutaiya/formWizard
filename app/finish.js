import Image from "next/image";

export default function Finish() {

    const customStyle = {
        backgroundColor: "blue",
        height: "2px",
        width: "65%",
        borderRadius: "1px",
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

    const rec = {
        width: "362px",
        height: "362px",
    };

    const p = {
        color: "#98A4AE",
    };

    return (<>
        <div className="" style={height}>
            <div className="card mt-5 p-5 rounded-4">
                <div className="col-12">
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
                            <div className="p-3 rounded-circle" style={activeLogo}>
                                <div className="d-flex justify-content-center align-items-center" style={aclg}>
                                    <Image
                                        src="/svg/finish-light.svg"
                                        alt="finish"
                                        width={0}
                                        height={0}
                                        layout="responsive"
                                        quality={100}
                                        sizes="100vh"
                                    ></Image>
                                </div>
                            </div>
                            <p className="mt-2 mb-1">Finish</p>
                            <div style={customStyle}></div>
                        </div>
                    </div>
                    <div className="mt-3">
                        <div className="text-center">
                            <h4>Thank you for your purchase!</h4>
                            <p className="text-primary">Your order id: 3fa7-69e1-79b4-dbe0d35f5f5d</p>
                        </div>
                        <div className="d-flex justify-content-center align-items-center" >
                            <div style={rec}>
                            <Image
                                src="/svg/reception.svg"
                                alt="img"
                                width={0}
                                height={0}
                                layout="responsive"
                                quality={100}
                                sizes="100vh"
                            ></Image>
                            </div>
                        </div>
                        <p className="text-center" style={p}>We will send you a notification<br/>
                         within 24 hours when it ships.</p>
                        <div className="col-12 mt-3">
                            <div className="d-flex justify-content-between mt-4">
                                <button className="btn btn-light">Countinue Shopping</button>
                                <button className="btn btn-primary">Download Receipt</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}