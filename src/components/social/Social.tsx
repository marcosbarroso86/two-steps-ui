import React from 'react';

const Social = () => {
  return (
     <footer className="footer text-center">
        <div className="container px-4 px-lg-5">
          <ul className="list-inline mb-5">
            <li className="list-inline-item">
              <a
                className="social-link rounded-circle text-white mr-3"
                href="https://www.linkedin.com/in/two-steps-logistics-238571254/"
                target="_blank"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a
                className="social-link rounded-circle text-white"
                href="https://www.instagram.com/twostepslog/"
                target="_blank"
              >
                <i className="bi bi-instagram"></i>
              </a>
            </li>
          </ul>
          <p className="text-muted small mb-0">Copyright © 2023</p>
        </div>
      </footer>
  )
}
export default Social

