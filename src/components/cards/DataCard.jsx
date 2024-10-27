export const DataCard = ({ title, data, onClick, screen }) => {
  return (
    <div className="flex flex-col border rounded-2xl p-8 gap-4" onClick={onClick}>
      <p>{title}</p>
      <h2 className="text-3xl">{data}</h2>
    </div>
  );
};
