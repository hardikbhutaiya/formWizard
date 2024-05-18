import Image from "next/image";

export default function Finish({ onNextStep }) {

    const handleSubmit = () => {
        onNextStep();
    };

    return (<>
        <div className="container">
            <div className="card mt-5 p-5 rounded-5">
                <div className="col-12">
                    <div className="mt-3">
                        <div className="text-center">
                            <h4>Thank you for your purchase!</h4>
                            <p className="text-primary">Your order id: 3fa7-69e1-79b4-dbe0d35f5f5d</p>
                        </div>
                        <div className="d-flex justify-content-center align-items-center" >
                            <div className="rec">
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
                        <p className="text-center p">We will send you a notification<br />
                            within 24 hours when it ships.</p>
                        <div className="col-12 mt-3">
                            <div className="d-flex justify-content-between mt-4">
                                <button className="btn btn-light" >Countinue Shopping</button>
                                <button className="btn btn-primary" onClick={handleSubmit}>Download Receipt</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}