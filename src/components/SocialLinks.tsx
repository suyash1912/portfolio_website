import React from 'react';

const SocialLinks = () => {
  return (
    <div className="flex items-center justify-center gap-6 py-8">
      <a
        href="https://www.linkedin.com/in/suyashmukherjee"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 hover:scale-105"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-.88-.06-1.601-1-1.601-1 0-1.16.781-1.16 1.601v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
        <span className="font-medium">LinkedIn</span>
      </a>
      <a
        href="https://www.kaggle.com/suyashmukherjee16"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 px-6 py-3 rounded-lg bg-[#20BEFF] text-white hover:bg-[#1a9fd9] transition-all duration-300 hover:scale-105"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374c-.176.165-.33.246-.454.246-.202 0-.304-.123-.304-.368v-10.536c0-.223.082-.334.246-.334.083 0 .153.03.211.09l7.521 9.588 7.521-9.588c.058-.06.128-.09.211-.09.164 0 .246.111.246.334v10.536c0 .245-.102.368-.304.368-.124 0-.278-.082-.454-.246l-1.448-1.374-5.178 6.589c-.141.166-.305.248-.492.248h-3.139c-.164 0-.259-.049-.281-.141-.023-.092-.015-.171.024-.236l5.178-6.589-5.178-6.589c-.039-.065-.047-.144-.024-.236.022-.092.117-.141.281-.141h3.139c.187 0 .351.082.492.248l5.178 6.589 1.448-1.374c.176-.165.33-.246.454-.246.202 0 .304.123.304.368v10.536c0 .223-.082.334-.246.334-.083 0-.153-.03-.211-.09l-7.521-9.588-7.521 9.588c-.058.06-.128.09-.211.09-.164 0-.246-.111-.246-.334v-10.536c0-.245.102-.368.304-.368.124 0 .278.082.454.246l1.448 1.374 5.178-6.589c.141-.166.305-.248.492-.248h3.139c.164 0 .259.049.281.141.023.092.015.171-.024.236l-5.178 6.589 5.178 6.589c.039.065.047.144.024.236z"/>
        </svg>
        <span className="font-medium">Kaggle</span>
      </a>
    </div>
  );
};

export default SocialLinks; 