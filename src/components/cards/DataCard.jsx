export const DataCard = ({ title, data }) => {
  return (
    <div className="flex flex-col border rounded-2xl p-8 gap-4">
      <p>{title}</p>
      <h2 className="text-3xl">{data}</h2>
    </div>
  );
};
