import React from 'react';
import "./style.scss";
import  Header from '../../components/Header/Header'
import  Footer from '../../components/Footer/Footer'



function Home() {
	return (
		<main>
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Argent Bank - Home Page</title>
                <link rel="stylesheet" href="./css/main.css" />
                <link
                rel="stylesheet"
                href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
                />
            </head>
            <body>
                <main>
                <Header />
                <div class="hero">
                    <section class="hero-content">
                    <h2 class="sr-only">Promoted Content</h2>
                    <p class="subtitle">No fees.</p>
                    <p class="subtitle">No minimum deposit.</p>
                    <p class="subtitle">High interest rates.</p>
                    <p class="text">Open a savings account with Argent Bank today!</p>
                    </section>
                </div>
                <section class="features">
                    <h2 class="sr-only">Features</h2>
                    <div class="feature-item">
                    <img src="./img/icon-chat.png" alt="Chat Icon" class="feature-icon" />
                    <h3 class="feature-item-title">You are our #1 priority</h3>
                    <p>
                        Need to talk to a representative? You can get in touch through our
                        24/7 chat or through a phone call in less than 5 minutes.
                    </p>
                    </div>
                    <div class="feature-item">
                    <img
                        src="./img/icon-money.png"
                        alt="Chat Icon"
                        class="feature-icon"
                    />
                    <h3 class="feature-item-title">More savings means higher rates</h3>
                    <p>
                        The more you save with us, the higher your interest rate will be!
                    </p>
                    </div>
                    <div class="feature-item">
                    <img
                        src="./img/icon-security.png"
                        alt="Chat Icon"
                        class="feature-icon"
                    />
                    <h3 class="feature-item-title">Security you can trust</h3>
                    <p>
                        We use top of the line encryption to make sure your data and money
                        is always safe.
                    </p>
                    </div>
                </section>
                <Footer />
                </main>
            </body>

        </main>
        );
    }
        
export default Home;