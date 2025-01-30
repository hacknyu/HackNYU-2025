import React from 'react';
import ig from '../../assets/iglogo.svg';
import linkedin from '../../assets/linkedinlogo.svg';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-blue-600 w-full py-2">
      <div className="flex justify-between items-center flex-wrap gap-2 px-2 max-w-7xl mx-auto">
        <div><p className="m-0 text-sm text-blue">© 2025 HACKNYU</p></div>
        <div className="space-x-4 hidden md:block">
          <a 
            href="https://www.nyu.edu/about/policies-guidelines-compliance/policies-and-guidelines/university-student-conduct-policy.html" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue no-underline text-sm hover:underline"
          >
            New York University Code of Conduct
          </a>
          <a 
            href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue no-underline text-sm hover:underline"
          >
            Major League Hacking Code of Conduct
          </a>
        </div>
        <div className="flex gap-2">
          <a href="https://www.instagram.com/hacknyu" className="text-blue">
            <img src={ig} alt="Access our Instagram" className="blue-filter" />
          </a>
          <a href="https://www.linkedin.com/company/hack-nyu" className="text-blue">
            <img src={linkedin} alt="Access our LinkedIn" className="blue-filter" />
          </a>
        </div>
      </div>
    </footer>
  );
};



