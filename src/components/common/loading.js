import React from 'react';

const Loading = () => {
    return (
       <div className="loading">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle fill="none" stroke="#4a4a4a" stroke-width="6" stroke-miterlimit="15" stroke-dasharray="14.2472,14.2472" cx="50" cy="50" r="47"><animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="5s" from="0 50 50" to="360 50 50" repeatCount="indefinite"/></circle><circle fill="none" stroke="#4a4a4a" stroke-miterlimit="10" stroke-dasharray="10,10" cx="50" cy="50" r="39"><animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="5s" from="0 50 50" to="-360 50 50" repeatCount="indefinite"/></circle><g fill="#4a4a4a"><path d="M30 35h5v30h-5z"><animateTransform attributeName="transform" dur="1s" type="translate" values="0 5 ; 0 -5; 0 5" repeatCount="indefinite" begin=".1"/></path><path d="M40 35h5v30h-5z"><animateTransform attributeName="transform" dur="1s" type="translate" values="0 5 ; 0 -5; 0 5" repeatCount="indefinite" begin=".2"/></path><path d="M50 35h5v30h-5z"><animateTransform attributeName="transform" dur="1s" type="translate" values="0 5 ; 0 -5; 0 5" repeatCount="indefinite" begin=".3"/></path><path d="M60 35h5v30h-5z"><animateTransform attributeName="transform" dur="1s" type="translate" values="0 5 ; 0 -5; 0 5" repeatCount="indefinite" begin=".4"/></path><path d="M70 35h5v30h-5z"><animateTransform attributeName="transform" dur="1s" type="translate" values="0 5 ; 0 -5; 0 5" repeatCount="indefinite" begin=".5"/></path></g></svg>
       </div>
    );
}

export default Loading;