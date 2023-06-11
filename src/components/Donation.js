export function Donation() {
    return (<section className="section-donation" id="donation">
        <div classNameName="donation-part">
            <div className="donation-heading">
                <h2 className="heading-secondary">Ways to Support Charity Hub</h2>

                <span className="subheading">
                    Join us in our cause and make a difference through:
                </span>

            </div>

            <div className="donation-box">
                <div className="donation-plan donation-plan--starter">
                    <header className="plan-header">
                        <p className="plan-name">Donation</p>

                    </header>

                    <div className="plan-sing-up">
                        <p>Your contribution can help us fund our programs and expand our reach.</p>
                    </div>
                </div>

                <div className="donation-plan donation-plan--starter">
                    <header className="plan-header">
                        <p className="plan-name">Volunteering</p>

                    </header>
                    <div className="plan-sing-up">
                        <p>Join our network of volunteers and share your skills and expertise.</p>
                    </div>
                </div>
            </div>
            <div className="donation-box ">
                <div className="donation-plan donation-plan--starter">
                    <header className="plan-header">
                        <p className="plan-name">Corporate Sponsorship</p>

                    </header>

                    <div className="plan-sing-up">
                        <p>Partner with us and align your brand with our mission and values.</p>
                    </div>
                </div>

                <div className="donation-plan donation-plan--starter">
                    <header className="plan-header">
                        <p className="plan-name">Online Shopping</p>

                    </header>
                    <div className="plan-sing-up">
                        <p>Shop through our affiliate links and we receive a portion of the sales to support our cause.</p>
                    </div>
                </div>
            </div>
            <div className="container grid">
                <aside className="plan-details">
                    {/* Prices include all applicable taxes. You can cancel at any time.
                    Both plans include the following: */}
                </aside>
            </div>
        </div>


    </section>);
}
