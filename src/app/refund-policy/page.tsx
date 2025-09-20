import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Refund Policy",
};

export default function RefundPolicyPage() {
    return (
      <main className="flex-1 py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px:6">
          <div className="prose max-w-4xl mx-auto">
            <h1>Refund Policy</h1>
            <p>Last updated: July 26, 2024</p>
            <p>
              At AEROCALL, we are committed to providing our customers with reliable and high-quality cloud communication services. Our refund policy is designed to be transparent and straightforward.
            </p>
            
            <h2>Our Commitment</h2>
            <p>
              We strive to ensure our services meet your needs and expectations. We offer a free trial period and detailed plan descriptions to help you make an informed decision before subscribing. We encourage you to use this trial to determine if AEROCALL is the right fit for your business.
            </p>

            <h2>Subscription Services</h2>
            <p>
              AEROCALL provides a subscription-based service. All our plans are billed on a recurring basis (monthly or annually) as chosen at the time of subscription.
            </p>

            <h2>No-Refund Policy</h2>
            <p>
              Due to the nature of our digital services, we have a strict no-refund policy. Once a subscription fee has been processed, it is non-refundable. This applies to:
            </p>
            <ul>
              <li>Monthly subscription fees.</li>
              <li>Annual subscription fees.</li>
              <li>Fees for add-on features or additional users.</li>
              <li>Unused portions of your subscription term.</li>
            </ul>
            <p>
              By subscribing to our service, you acknowledge and agree that you will not be entitled to a refund for any payments made.
            </p>

            <h2>Exceptions</h2>
            <p>
              The only exception to our no-refund policy is in the case of a billing error on our part. If you believe you have been charged incorrectly, please contact our support team at hello@aerocall.net within 30 days of the charge. We will investigate the issue and, if a billing error is confirmed, we will issue a credit or refund for the overcharged amount.
            </p>

            <h2>How to Cancel Your Subscription</h2>
            <p>
              You can cancel your subscription at any time. To cancel, please log in to your account dashboard or contact our customer support team. When you cancel, your subscription will remain active until the end of your current billing period. You will not be charged for the next billing cycle.
            </p>
            <p>
              Please note that canceling your subscription does not entitle you to a refund for any previously paid fees.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about our Refund Policy, please contact us:
            </p>
            <ul>
              <li>By email: hello@aerocall.net</li>
            </ul>
          </div>
        </div>
      </main>
    );
  }