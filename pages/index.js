import React, { useState } from 'react'

const Home = () => {
  const [toggle, setToggle] = useState(false)

  const Toggle = () => {
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
          <button onClick={Toggle}>
            <img src="/ham.svg" className="burger" />
          </button>
          <nav id="homeNav" style={{
            display: toggle ? 'block' : 'none',
            position: 'absolute',
            top: 0,
            left: 0
          }}>
            <ul>ABOUT US</ul>
            <ul>LEARN MORE</ul>
            <ul>DONATE NOW!</ul>
          </nav>
        </div>
      </header>

      <style jsx>{`
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
            flex-direction: row;
            align-items: center;
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
