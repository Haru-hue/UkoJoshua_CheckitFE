import classNames from 'classnames';

export const DataCard = ({ title, data, onClick, screen, cardKey }) => {
  return (
    <div
      className={classNames(
        "flex flex-col border rounded-2xl p-8 gap-4 cursor-pointer",
        { "bg-stone-700 text-white": screen === cardKey } // Apply slate background if screen matches cardKey
      )}
      onClick={onClick}
    >
      <p>{title}</p>
      <h2 className="text-3xl">{data}</h2>
    </div>
  );
};
