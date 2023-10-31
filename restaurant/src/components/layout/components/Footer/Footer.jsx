import React from "react";

export default function Footer() {
  return (
    <footer className="bd-footer py-4 py-md-5 mt-5 bg-body-tertiary">
      <div className="container card text-body-secondary">
        <div className="card-header">Quote</div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p>A well-known quote, contained in a blockquote element.</p>
            <footer className="blockquote-footer">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </div>
      </div>
    </footer>
  );
}
