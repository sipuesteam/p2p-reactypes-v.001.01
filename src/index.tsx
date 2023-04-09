import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.css';

const App = () => {
  return (
    <>
      <head>
        <meta charset="utf-8" />
        <title>Place2Pay Payment System</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      </head>
      <div className="place2pay-logo">
        <h1>Welcome to Place2Pay</h1>
        <div id="copyright-clause">
          {copyrightClause()}
        </div>
      </div>
    </>
  );
};

function copyrightClause() {
  const year = new Date().getFullYear();
  return <span>Copyright © {year} Place2Pay</span>;
}

ReactDOM.render(<App />, document.getElementById('root'));
