const LoadingComponent = () => {
  //   return (
  //     <div className="flex justify-center items-center">
  //       <div
  //         className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
  //         role="status"
  //       >
  //         <span className="opacity-0">Loading...</span>
  //       </div>
  //     </div>
  return (
    <div className=" mt-32">
      <div
        className="mx-auto  animate-spin radial-progress"
        style={{ "--value": "70" }}
      ></div>
    </div>
  );
};

export default LoadingComponent;
