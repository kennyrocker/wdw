import React from 'react';

const Loading = () => {
    return (
       <div className="loading">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle fill="none" stroke="#4a4a4a" stroke-width="4" cx="50" cy="50" r="44" opacity=".5"/><circle fill="#303030" stroke="#141414" stroke-width="3" cx="8" cy="54" r="6"><animateTransform attributeName="transform" dur="2s" type="rotate" from="0 50 48" to="360 50 52" repeatCount="indefinite"/></circle></svg>
       </div>
    );
}

export default Loading;