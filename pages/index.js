import React, { useState, useEffect } from 'react'


const Home = () => {
  let w
  const [toggle, setToggle] = useState(false)
  const [resize, setResize] = useState(false)
  const Toggle = () => {
    setToggle(!toggle)
  }

  // useEffect(() => {
  //   w = window.innerWidth
  //   console.log(w)
  //   if (w > 760) {
  //     setToggle(true)
  //   }
  // }, [])

  // const handleResize = () => {
  //   setResize(true)
  // }
  return (
    <div className="container">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap"
          rel="stylesheet"
        />
      </head>
      <header className="header">
        <img src="/logo-4.svg" className="logo" />
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'column',
            position: 'relative',
          }}
        >
          {/* desktop */}
          <div className="desktopNav">
            <nav id="desktopHomeNav">
                <ul>ABOUT US</ul>
                <ul>LEARN MORE</ul>
                <ul>DONATE NOW!</ul>
            </nav>
          </div>
          {/* mobile */}
          <div className="mobileNav">
            <button onClick={Toggle}>
              <img src="/ham.svg" className="burger" />
            </button>
            {toggle && (
              <nav id="homeNav">
                <ul>ABOUT US</ul>
                <ul>LEARN MORE</ul>
                <ul>DONATE NOW!</ul>
              </nav>
            )}
          </div>
        </div>
      </header>

      <main>
        <div className="section">
          <h1>Work for good, donate with a purpose</h1>
          <p>
            Go from passion project to nonprofit and get started the right way.
            Become eligible to file for 501(c)(3) tax-exempt status and more.
          </p>
          <button className="donateBtn">DONATE NOW</button>
        </div>
        <div className="section">
          <h1>Apply for clothing assistance here</h1>
          <p>
            Do you or your children need clothes? Apply now and if accepted we
            will send you a years worth of clothing.
          </p>
          <button className="applyBtn">APPLY NOW</button>
        </div>
        <div className="section">
          <h1>Work for good, donate with a purpose</h1>
          <p>
            Go from passion project to nonprofit and get started the right way.
            Become eligible to file for 501(c)(3) tax-exempt status and more.
          </p>
          <button className="donateBtn">DONATE NOW</button>
        </div>
      </main>

      <style jsx>{`
        .applyBtn,
        .donateBtn {
           padding: 0.35em 1.2em;
           margin: 1em;
           text-decoration: none;
          border-radius: 2em;
           text-align: center;
           transition: all 0.2s;
          color: #fff;
        }

        .donateBtn {
           background-color: red;
        }

        .applyBtn {
           background-color: black;
        }

        .applyBtn:hover {
          border-color: black;
          background-color: red;
          color: #fff;
        }

        .donateBtn:hover {
          border-color: red;
          background-color: black;
          color: #fff;
        }

        .section {
          margin: 3em 5em;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        h1 {
          font-size: 28px;
          text-align: center;
          font-weight: normal;
          margin: 0.5em;
          line-height: 1.4;
        }

        p {
          text-align: center;
          margin: 0.5em 1.2em;
          line-height: 1.6;
        }

        .mobileNav {
          float: right;
          position: relative;
          display: inline-block;
        }

        button {
          margin: 0.5em;
          padding: 0;
          border: none;
          background-color: none;
        }

        .logo {
          height: 6em;
          width: 6em;
          max-height: 100px;
          max-width: 100px;
        }

        #homeNav {
          position: absolute;
          background-color: #f1f1f1;
          min-width: 160px;
          overflow: auto;
          box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
          right: 0;
          z-index: 1;
        }

        .desktopNav{
          display: none !important
        }

        .burger {
          display: inline;
          height: 30px;
          width: 30px;
          max-height: 100px;
          max-width: 100px;
          padding: 0;
          margin: 0;
        }

        @media only screen and (min-width: 760px) {
          .mobileNav {
            display: none;
          }

          .desktopNav {
            display: block !important;
            width: 100% !important;
          }
          
          #desktopHomeNav {
            display: flex !important;
            flex-direction: row !important;
            align-items: center !important;
            box-shadow: none !important;
            z-index: 0 !important;
            background: none !important;
            position: relative !important

          }
        }

        .header {
          padding: 0 10px 0 10px;
          top: 0;
          width: 100%;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
        }

        ul {
          text-decoration: none;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          height: 100vh;
          width: 100vw;
          overflow-x: hidden;
          padding: 0;
          margin: 0;
          font-family: 'Roboto', sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

export default Home
