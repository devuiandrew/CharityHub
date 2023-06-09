import thumb from '../images/thumb.jpg'


export function Purpose() {
    return (<section className="section-pupose card-box-shadow" id="how">

        <div className='box-container'>
            <div className="text-box-list">
                <div className="margin-bottom-md">
                    <h2 className="heading-secondary">The Power of Giving</h2>
                    <div className="sub-text">

                        By giving to charity, you can make a real impact and change lives. Giving also has benefits for you, including:
                    </div>
                </div>
                <div className="step-text-box">

                    <div className='step-number-box'>
                        <p className="step-number">01</p>
                    </div>
                    <div>
                        <h3 className="heading-tertiary">
                            Increased Happiness
                        </h3>
                        <p className="step-description">
                            Helping others can boost your mood and sense of well-being.
                        </p>
                    </div>

                </div>

                <div className="step-text-box">
                    <div className='step-number-box'>
                        <p className="step-number">02</p>
                    </div>
                    <div>
                        <h3 className="heading-tertiary">Reduced Stress</h3>
                        <p className="step-description">
                            Giving can help lower stress levels and improve overall health.
                        </p>
                    </div>
                </div>

                <div className="step-text-box">
                    <div className='step-number-box'>
                        <p className="step-number">03</p>
                    </div>
                    <div>
                        <h3 className="heading-tertiary">Improved Sense of Purpose</h3>

                        <p className="step-description">
                            Knowing that you are making a difference can give you a sense of purpose.
                        </p>
                    </div>
                </div>

                <div className="step-text-box">
                    <div className='step-number-box'>
                        <p className="step-number">04</p>
                    </div>
                    <div>
                        <h3 className="heading-tertiary">Enhanced Social Connections</h3>

                        <p className="step-description">
                            Giving can help you build meaningful relationships with others.
                        </p>
                    </div>
                </div>

            </div>
            <div className="step-img-box">
                {/* <img src={thumb} className="step-img" alt="iPhone app
            preferences selection screen"/> */}
            </div>
        </div>
    </section>);
}
