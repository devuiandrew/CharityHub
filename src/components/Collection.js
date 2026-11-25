import React from 'react';
import ArtCollection from '../images/art.jpeg'
import HistoryCollection from '../images/historical.jpeg'
import MusicCollection from '../images/musical.jpg'



export default function Collection() {
    return (
        <section className="section-collection" id="collection">
            <div className="container center-text">
                <h2 className="heading-secondary">
                    Our Collection
                </h2>
                <span className="subheading">Explore our web museum and discover our unique collections</span>
            </div>

            <div className="container grid grid--3-cols margin-bottom-md">
                <div className="item">
                    <img src={ArtCollection} className="item-img" alt="Art collection" />
                    <div className="item-content">
                        <p className="item-title">Art Collection</p>
                        <div className="item-attributes">
                            <p>
                                Featuring works from some of the finest artists from around the world.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="item">
                    <img src={HistoryCollection} className="item-img" alt="Historical artifacts" />
                    <div className="item-content">
                        <p className="item-title">Historical Treasures</p>
                        <div className="item-attributes">
                            <p>
                                Experience the rich history of human civilization through rare artifacts.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="item">
                    <img src={MusicCollection} className="item-img" alt="Musical instruments" />
                    <div className="item-content">
                        <p className="item-title">Musical Collection</p>
                        <div className="item-attributes">
                            <p>
                                Discover the beauty and diversity of the world's music through our extensive collection of instruments and recordings.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>);
}