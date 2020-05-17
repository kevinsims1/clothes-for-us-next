import React, { useState } from 'react'

const Home = () => {
  const [toggle, setToggle] = useState(false)

  const Toggle = () => {
    console.log()
    setToggle(!toggle)
  }

  return (
    <div className="container">
      <header className="header">
        <img src="/logo-4.svg" className="logo" />
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'column',
          position: 'relative'
        }}>
          <div className='dropDown'>
            <button onClick={Toggle}>
              <img src="/ham.svg" className="burger" />
            </button>
            {toggle &&  <nav id="homeNav">
              <ul>ABOUT US</ul>
              <ul>LEARN MORE</ul>
              <ul>DONATE NOW!</ul>
            </nav>}
          </div>
          
        </div>
      </header>


      <main>
        <div>
          <h4>
            Work for good, donate with a purpose
          </h4>
          <p>
            Go from passion project to nonprofit and get 
            started the right way. Become eligible to file 
            for 501(c)(3) tax-exempt status and more.
          </p>
          <button>
            DONATE NOW
          </button>
        </div>
      </main>

      <style jsx>{`
        .dropDown{
          float: right;
          position: relative;
          display: inline-block;
        }

        button {
          margin: 0;
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

        #homeNav{
          position: absolute;
          background-color: #f1f1f1;
          min-width: 160px;
          overflow: auto;
          box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
          right: 0;
          z-index: 1;
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
          .burger {
            display: none;
          }

          #homeNav {
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
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

export default Home
