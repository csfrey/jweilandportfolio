const MobileHero = () => {
  return (
    <div>
      <div className="absolute w-full text-center mt-24 z-10 text-3xl text-gray-50">
        Fitness Educator Portfolio
      </div>
      <div className="relative after:content-normal after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-violet-400 after:bg-opacity-90">
        <img className="w-full" src="/images/running.png" />
      </div>
    </div>
  );
};

export default MobileHero;
