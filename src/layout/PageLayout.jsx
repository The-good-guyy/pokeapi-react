function PageLayout({ children }) {
  return (
    <div className="max-w-screen-2xl flex flex-wrap items-start justify-between mx-auto p-4 bg-[#1F2544] text-[#81689D] min-h-screen w-full">
      {children}
    </div>
  );
}

export default PageLayout;
