import type { NextPage } from 'next';

const Bullseye: NextPage = () => {
  return (
    <div className="w-full h-[66px] relative rounded-[12.82px] [background:linear-gradient(220.73deg,_#c05aff,_#4d73f8)] [transform:_rotate(-90deg)]" >
      <svg width="66" height="66" viewBox="0 0 24 24" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="6" strokeWidth="1"/>
        <circle cx="12" cy="12" r="3" strokeWidth="3"/>
      </svg>
    </div>
  );
};

export default Bullseye;
