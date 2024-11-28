import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const FormSection = () => {
  const [formData, setFormData] = useState({
    multiple_transactions: "",
    mismatch_between_ip_and_location: "",
    customer_location: "",
    customer_tier: "",
    payment_method: "",
    transaction_status: "",
    product_category: "",
    transaction_amount: "",
    purchase_history: "",
    high_risk_countries: "",
    customer_age: "",
  });

  const [predictionResult, setPredictionResult] = useState(null);
  const [shouldFetch, setShouldFetch] = useState(false); // Trigger for fetch request

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShouldFetch(true); // Trigger the fetch on form submission
  };

  useEffect(() => {
    if (!shouldFetch) return;
    const fetchLoanAmount = async () => {
      const promise = fetch(
        "https://e-commerce-fraud-detection-model.onrender.com/predictdata",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      ).then(async (response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch loan amount");
        }
        return await response.json();
      });

      toast.promise(
        promise,
        {
          pending: "Predicting loan amount...",
          success: "Loan eligibility predicting successfully 🎉",
          error: "Failed to predict loan amount. 😞",
        },
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        }
      );

      try {
        const result = await promise;
        setPredictionResult(result.result);
        console.log(result);
      } catch (error) {
        console.error("Error submitting data:", error);
      } finally {
        setShouldFetch(false); // Reset trigger
      }
    };

    fetchLoanAmount();
  }, [shouldFetch, formData]);

  return (
    <div className=" bg-gray-100 flex items-center justify-center py-[5%]">
      <div className="max-w-4xl mx-auto shadow-lg p-[4%] bg-white rounded-lg">
        <h1 className="text-2xl font-bold text-sky-500 mb-10 text-center">
          E-Commerce Fraud Detection Form
        </h1>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-6"
        >
          {/* Customer Location */}
          <div>
            <label className="block text-slate-500">Customer Location</label>
            <select
              name="customer_location"
              value={formData.customer_location}
              onChange={handleChange}
              required
              className="input-style"
            >
              <option value="" disabled>
                Select Location
              </option>
              <option value="India">India</option>
              <option value="UK">UK</option>
              <option value="USA">USA</option>
              <option value="Germany">Germany</option>
              <option value="Other">Other</option>
              <option value="Canada">Canada</option>
            </select>
          </div>

          {/* Customer Age */}
          <div>
            <label className="block text-slate-500">Customer Age</label>
            <input
              type="number"
              name="customer_age"
              value={formData.customer_age}
              onChange={handleChange}
              required
              className="input-style"
              min="0"
            />
          </div>

          {/* Customer Tier */}
          <div>
            <label className="block text-slate-500">Customer Tier</label>
            <select
              name="customer_tier"
              value={formData.customer_tier}
              onChange={handleChange}
              required
              className="input-style"
            >
              <option value="" disabled>
                Select Tier
              </option>
              <option value="new">New</option>
              <option value="returning">Returning</option>
              <option value="premium">Premium</option>
            </select>
          </div>

          {/* Payment Method */}
          <div>
            <label className="block text-slate-500">Payment Method</label>
            <select
              name="payment_method"
              value={formData.payment_method}
              onChange={handleChange}
              required
              className="input-style"
            >
              <option value="" disabled>
                Select Payment Method
              </option>
              <option value="PayPal">PayPal</option>
              <option value="debit card">Debit Card</option>
              <option value="bank transfer">Bank Transfer</option>
              <option value="credit card">Credit Card</option>
            </select>
          </div>

          {/* Transaction Status */}
          <div>
            <label className="block text-slate-500">Transaction Status</label>
            <select
              name="transaction_status"
              value={formData.transaction_status}
              onChange={handleChange}
              required
              className="input-style"
            >
              <option value="" disabled>
                Select Status
              </option>
              <option value="successful">Successful</option>
              <option value="pending">Pending</option>
              <option value="failed">Failed</option>
            </select>
          </div>

          {/* Product Category */}
          <div>
            <label className="block text-slate-500">Product Category</label>
            <select
              name="product_category"
              value={formData.product_category}
              onChange={handleChange}
              required
              className="input-style"
            >
              <option value="" disabled>
                Select Category
              </option>
              <option value="home">Home</option>
              <option value="clothing">Clothing</option>
              <option value="sports">Sports</option>
              <option value="other">Other</option>
              <option value="electronics">Electronics</option>
            </select>
          </div>

          {/* Transaction Amount */}
          <div>
            <label className="block text-slate-500">
              Transaction Amount (USD)
            </label>
            <input
              type="number"
              name="transaction_amount"
              value={formData.transaction_amount}
              onChange={handleChange}
              required
              className="input-style"
              min="0"
            />
          </div>

          {/* Multiple Transactions */}
          <div className="flex flex-col">
            <label className="block text-slate-500">
              Multiple Transactions (Enter Count)
            </label>
            <input
              type="number"
              name="multiple_transactions"
              value={formData.multiple_transactions}
              onChange={handleChange}
              required
              min={0}
              className="input-style"
              placeholder="Enter number of transactions"
            />
          </div>

          {/* Purchase History */}
          <div>
            <label className="block text-slate-500">
              Purchase History (number)
            </label>
            <input
              type="number"
              name="purchase_history"
              value={formData.purchase_history}
              onChange={handleChange}
              required
              className="input-style"
              min="0"
            />
          </div>

          {/* Mismatch Between IP and Location */}
          <div className="flex flex-col">
            <label className="block text-slate-500">
              Mismatch Between IP and Location
            </label>
            <div className="flex items-center gap-x-6">
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="mismatch_between_ip_and_location"
                  value="1"
                  checked={formData.mismatch_between_ip_and_location === "1"}
                  onChange={handleChange}
                  required
                  className="h-5 w-5 text-orange-500 focus:ring-orange-500"
                />
                <label className="text-slate-600 font-semibold">Yes</label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="mismatch_between_ip_and_location"
                  value="0"
                  checked={formData.mismatch_between_ip_and_location === "0"}
                  onChange={handleChange}
                  required
                  className="h-5 w-5 text-orange-500 focus:ring-orange-500"
                />
                <label className="text-slate-600 font-semibold">No</label>
              </div>
            </div>
          </div>

          {/* High-Risk Countries */}
          <div className="flex flex-col">
            <label className="block text-slate-500">High-Risk Countries</label>
            <div className="flex items-center gap-x-6">
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="high_risk_countries"
                  value="1"
                  checked={formData.high_risk_countries === "1"}
                  onChange={handleChange}
                  required
                  className="h-5 w-5 text-orange-500 focus:ring-orange-500"
                />
                <label className="text-slate-600 font-semibold">Yes</label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="high_risk_countries"
                  value="0"
                  checked={formData.high_risk_countries === "0"}
                  onChange={handleChange}
                  required
                  className="h-5 w-5 text-orange-500 focus:ring-orange-500"
                />
                <label className="text-slate-600 font-semibold">No</label>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="col-span-2 flex justify-center">
            <button
              type="submit"
              className="bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 px-7 mt-4 rounded-sm"
            >
              Submit
            </button>
          </div>
        </form>

        {/* Result */}
        {predictionResult !== null && (
          <div className="mt-6 text-center ">
            <p className="text-slate-500 font-semibold text-lg">
              Transaction is{" "}
              <span className="text-lg font-bold text-sky-500">
                {predictionResult}
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FormSection;
