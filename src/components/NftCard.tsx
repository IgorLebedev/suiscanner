  const Card = ({ link }: { link: string }) => {
  return (
    <div className="w-auto p-3 col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 rounded-lg bg-slate-300 transition-all hover:-translate-x-2 hover:-translate-y-2">
      <div className="flex justify-center items-center m-auto">
        <img src={link} alt='...' />
      </div>
    </div>
  );
}
    

export default Card;