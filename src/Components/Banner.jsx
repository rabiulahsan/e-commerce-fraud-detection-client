const Banner = () => {
  return (
    <div className="max-w-5xl mx-auto px-[5%] py-[4%] bg-gray-100 rounded-lg shadow-lg my-[5%]">
      <div className="">
        <h1 className="heading-style">E-commerce Fraud Detection System</h1>
        <p className="text-slate-600 mb-3">
          This end-to-end machine learning project aims to enhance the security
          of e-commerce platforms by identifying and preventing fraudulent
          transactions. The system is designed to handle two key tasks:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
          <li>
            <strong>Fraudulent Transaction Detection:</strong> Classifies
            whether a transaction is legitimate or fraudulent based on various
            features.
          </li>
          <li>
            <strong>Fraud Risk Scoring:</strong> Assigns a risk score to each
            transaction to prioritize further review or action.
          </li>
        </ul>
      </div>
      <h2 className="heading-style">Key Features:</h2>
      <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
        <li>
          <strong>Exploratory Data Analysis (EDA):</strong> Discovered patterns
          and correlations in transaction data to identify fraud indicators.
        </li>
        <li>
          <strong>Data Preprocessing:</strong> Cleaned and transformed data to
          handle missing values and outliers effectively.
        </li>
        <li>
          <strong>Pipeline Creation:</strong> Built robust machine learning
          pipelines for classification and risk scoring tasks.
        </li>
        <li>
          <strong>Exception Handling & Logging:</strong> Implemented mechanisms
          for error tracking and detailed logging of API activities.
        </li>
        <li>
          <strong>Model Development:</strong> Utilized scikit-learn for
          classification and anomaly detection tasks.
        </li>
        <li>
          <strong>API Deployment:</strong> Deployed the fraud detection models
          using a Flask API.
        </li>
      </ul>
      <h2 className="heading-style">Technologies Used:</h2>
      <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
        <li>
          <strong>Languages:</strong> Python
        </li>
        <li>
          <strong>Libraries:</strong> scikit-learn, pandas, NumPy, matplotlib,
          seaborn
        </li>
        <li>
          <strong>Framework:</strong> Flask
        </li>
      </ul>
      <h2 className="heading-style">Use Cases:</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>
          <strong>Automating Loan Approval Processes:</strong> Reduces manual
          assessment time with instant predictions.
        </li>
        <li>
          <strong>Enhancing Risk Assessment:</strong> Improves evaluation of
          applicants creditworthiness.
        </li>
        <li>
          <strong>Improving Customer Experience:</strong> Provides quick
          responses to customers.
        </li>
        <li>
          <strong>Scaling Operations:</strong> Handles a large number of
          applications efficiently.
        </li>
      </ul>
      <p className="text-sky-600 text-center font-semibold mt-[4%]">
        This project demonstrates practical ML applications in the financial
        domain, covering data preprocessing, model evaluation, and deployment.
      </p>
      <div className=" flex items-center justify-center">
        <button className="px-5 py-3 mt-5 font-semibold bg-sky-500 text-white rounded-sm hover:bg-sky-600">
          <a
            href="https://github.com/rabiulahsan/load-prediction-model"
            target="blank"
          >
            Model Repository
          </a>
        </button>
      </div>
    </div>
  );
};

export default Banner;