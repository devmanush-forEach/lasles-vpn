import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { axiosPost } from "../../common/axiosRequests";
import { show_Notification } from "../../redux/actions/notificationBar.actions";
import Navbar from "../navbar/Navbar";
import logo from "../../Assets/favicon.ico";
import "./PaymentPage.css";

const PaymentPage = () => {
  const { plan } = useSelector((state) => state.plan);
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const verifyPayment = async (ids) => {
    // demo data for verification

    const resData = {
      razorpay_order_id: "order_KnwDAaX76RvlgN",
      razorpay_payment_id: "pay_KnwDISHODnqqcN",
      razorpay_signature:
        "0f6aa663f236f90a5a58593c8db37055fb0ac1985fd86ec4cd14dea5efb5e26b",
    };
    const res = await axiosPost("/payment/paymentVerification", resData);

    // const res = await axiosPost("/payment/paymentVerification", ids);

    if (res.error) {
      dispatch(
        show_Notification({
          message: "Payment is unsuccessfull!!",
          isError: true,
        })
      );
    }
    if (res.data) {
      const { payment_id } = res.data;
      dispatch(
        show_Notification({
          message: `Payment is successfull with payment_id ${payment_id}  `,
        })
      );
    }
  };

  const handlePaymentByRazorPay = async () => {
    const {
      data: { key },
    } = await axiosPost("/payment/getkey", {});

    const {
      data: { order },
    } = await axiosPost("/payment/setOrder", {
      amount: plan.price * 100,
    });

    const options = {
      key: key,
      amount: order.amount,
      currency: "INR",
      name: "Lasles VPN",
      description: `Subscribing ${plan.title} plan`,
      image: logo,
      order_id: order.id,
      handler: function (response) {
        verifyPayment(response);
      },
      prefill: {
        name: user.name,
        email: user.email,
        contact: user.phone,
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#E5E5E5",
      },
    };

    const razorPay = new window.Razorpay(options);
    razorPay.open();
  };
  return (
    <>
      <Navbar />
      <section className="payment_page_section">
        <div className="payment_plan_card">
          <div className="payment_plan_list">
            Title : <span>{plan?.title} Plan</span>
          </div>
          <div className="payment_plan_list">
            Price : <span>{plan?.price}/mo</span>
          </div>
        </div>
        <div className="payment_methods_div">
          <div className="payment_heading">Choose How To Pay</div>
          <div className="payment_methods_box">
            <button
              type=""
              onClick={handlePaymentByRazorPay}
              disabled={!plan || !user}
              className="razor_pay_btn"
            >
              Pay by RazorPay
            </button>
            {/* <button type="" onClick={verifyPayment} className="razor_pay_btn">
              Verify Payment
            </button> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default PaymentPage;
