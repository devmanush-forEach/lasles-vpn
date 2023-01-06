import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { axiosPost } from "../../common/axiosRequests";
import { show_Notification } from "../../redux/actions/notificationBar.actions";
import Navbar from "../../components/navbar/Navbar";
import logo from "../../Assets/favicon.ico";
import "./PaymentPage.css";

const PaymentPage = () => {
  const { plan } = useSelector((state) => state.plan);
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const verifyPayment = async (ids) => {
    // demo data for verification

    const reqData = {
      ids: {
        razorpay_order_id: ids.razorpay_order_id,
        razorpay_payment_id: ids.razorpay_payment_id,
        razorpay_signature: ids.razorpay_signature,
      },
      plan: plan,
    };

    const res = await axiosPost("/payment/paymentVerification", reqData);

    if (res.error) {
      dispatch(
        show_Notification({
          message: "Payment is unsuccessfull!!",
          isError: true,
        })
      );
    }
    if (res.data) {
      dispatch(
        show_Notification({
          message: `Congrats, ${plan?.title} is successfully subscribed !`,
        })
      );
      navigate("/");
    }
  };

  const handlePaymentByRazorPay = async () => {
    const {
      data: { key },
    } = await axiosPost("/payment/getkey", {});

    const res = await axiosPost("/payment/setOrder", {
      amount: +plan.price * 100,
    });

    const {
      data: { order },
    } = res;

    const options = {
      key: key,
      amount: order.amount,
      currency: "INR",
      name: "Lasles VPN",
      description: `Subscribing ${plan.title} plan`,
      image: logo,
      order_id: order.id,
      handler: function (response) {
        verifyPayment({
          ids: response,
          amount: order.amount,
          planType: plan.title,
        });
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
        <div className="payment_page_box">
          <div className="payment_plan_card">
            <div className="payment_plan_list">
              Title : <span>{plan?.title} </span>
            </div>
            <div className="payment_plan_list">
              Price :{" "}
              <span>
                {plan?.price}
                {plan?.price !== "free" && "Rs /mo"}
              </span>
            </div>
          </div>
          <div className="payment_methods_div">
            <div className="payment_heading">Choose How To Pay</div>
            <div className="payment_methods_box">
              {plan?.price === "free" ? (
                <button
                  type=""
                  onClick={verifyPayment}
                  className="razor_pay_btn"
                >
                  Subscibe To Free Plan
                </button>
              ) : (
                <button
                  type=""
                  onClick={handlePaymentByRazorPay}
                  disabled={!plan || !user}
                  className="razor_pay_btn"
                >
                  Pay by RazorPay
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PaymentPage;
