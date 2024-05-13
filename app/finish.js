import Image from "next/image";

export default function Finish() {

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
    };

    let img = {
        width: "50px",
        height: "50px"
    }
    return (<>
        <div className="container">
            <div className="card mt-5 p-5" style={height}>
                <div className="col-12">
                    <div className="d-flex justify-content-between mt-3" >
                        <div style={img}>
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
                                src="/svg/pay-light.svg"
                                alt="Account"
                                width={0}
                                height={0}
                                layout="responsive"
                                quality={100}
                                sizes="100vh"
                            ></Image>
                            <p className="mb-2">Payment</p>
                        </div>
                        <div>
                            <Image
                                src="/svg/finish-dark.svg"
                                alt="Account"
                                width={0}
                                height={0}
                                layout="responsive"
                                quality={100}
                                sizes="100vh"
                            ></Image>
                            <p>Finish</p>
                            <div style={customStyle}></div>
                        </div>
                    </div>
                    <div className="mt-3">
                        <div className="text-center">
                            <h4>Thank you for your purchase!</h4>
                            <p className="text-primary">Your order id: 3fa7-69e1-79b4-dbe0d35f5f5d</p>
                        </div>
                        <Image
                            src="/img/img.png"
                            alt=""
                            width={0}
                            height={0}
                            layout="responsive"
                            quality={100}
                            sizes="100vh"
                        ></Image>
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