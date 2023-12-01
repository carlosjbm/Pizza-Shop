import "./Toggle_pizza.css";

function Toggle_pizzaComponent() {
  return (
    <>
      <div className="togglebox">
        <h1 className="togglebox__redh1"> Pizza With Great Taste</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius,
          mauris id vestibulum.
        </p>
        <div className="togglebox__mov">
          <span className="togglebox__vecto--def">
            <svg
              width="114"
              height="40"
              viewBox="0 0 114 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="94" cy="20" r="19.5" stroke="#B72A23" />
              <path
                // fill-rule="evenodd"
                // clip-rule="evenodd"
                d="M87.5714 20C87.5714 19.5491 87.9512 19.1837 88.4196 19.1837H98.2469L94.6056 15.6793C94.2743 15.3605 94.2743 14.8436 94.6056 14.5248C94.9368 14.206 95.4739 14.206 95.8051 14.5248L100.894 19.4228C101.226 19.7416 101.226 20.2584 100.894 20.5772L95.8051 25.4752C95.4739 25.794 94.9368 25.794 94.6056 25.4752C94.2743 25.1564 94.2743 24.6395 94.6056 24.3207L98.2469 20.8163H88.4196C87.9512 20.8163 87.5714 20.4508 87.5714 20Z"
                fill="#B72A23"
              />
              <g opacity="0.3">
                <circle
                  cx="20"
                  cy="20"
                  r="19.5"
                  transform="matrix(-1 0 0 1 40 0)"
                  stroke="#555555"
                />
                <path
                  // fill-rule="evenodd"
                  // clip-rule="evenodd"
                  d="M26.4286 20C26.4286 19.5491 26.0488 19.1837 25.5804 19.1837H15.7531L19.3944 15.6793C19.7257 15.3605 19.7257 14.8436 19.3944 14.5248C19.0632 14.206 18.5261 14.206 18.1949 14.5248L13.1056 19.4228C12.7743 19.7416 12.7743 20.2584 13.1056 20.5772L18.1949 25.4752C18.5261 25.794 19.0632 25.794 19.3944 25.4752C19.7257 25.1564 19.7257 24.6395 19.3944 24.3207L15.7531 20.8163H25.5804C26.0488 20.8163 26.4286 20.4508 26.4286 20Z"
                  fill="#555555"
                />
              </g>
            </svg>
          </span>
          <span className="togglebox__vecto--red"></span>
        </div>
      </div>
    </>
  );
}

export default Toggle_pizzaComponent;
