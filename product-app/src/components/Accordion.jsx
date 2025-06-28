import React from 'react';

const Accordion = () => {
  return (
    <div className="accordion" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            What are your delivery hours?
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <strong>We deliver every day from 7 AM to 10 PM.</strong> Orders placed after 10 PM will be delivered the following day. We aim to deliver your groceries within 2 hours of order placement, subject to item availability and location.
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            Are the products fresh and genuine?
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <strong>Yes, we source our products directly from trusted suppliers.</strong> Dairy items like milk and cheese are stocked daily, and perishable items like vegetables are handled with utmost care to ensure freshness. We guarantee the authenticity and shelf life of branded goods like chocolates and packaged rice.
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Can I return or exchange items?
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <strong>Yes, you can request returns or exchanges within 24 hours.</strong> Perishable items like milk or vegetables must be returned immediately if there is a quality issue. Packaged goods should be unopened and in original condition. Contact our support team for hassle-free returns.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
