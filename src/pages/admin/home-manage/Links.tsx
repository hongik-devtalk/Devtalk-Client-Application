const Links = () => {
  return (
    <div className="space-y-40 ml-60 mr-60 mb-[175px]">
      <h1 className="mt-60 heading-1-bold text-white">링크 관리</h1>
      <div className="w-full max-w-[1030px] min-w-[650px] mx-auto bg-grey-900 p-6 rounded-10 space-y-4">
        <h2 className="heading-2-bold text-white mb-24">문의하기 링크</h2>
        <textarea
          placeholder="링크를 입력해주세요."
          className="w-full h-48 bg-grey-700 rounded-8 px-16 py-12 text-white placeholder-grey-300 focus:outline-none resize-none"
          rows={3}
        />
      </div>
    </div>
  );
};

export default Links;
