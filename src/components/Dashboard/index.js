import { DataCard } from "../cards/DataCard";

export const Dashboard = () => {
  return (
    <section>
      <div className="grid grid-cols-3 gap-10">
        <DataCard title={'Total Capsules'} data={'21,324'} />
        <DataCard title={'Total Capsules'} data={'21,324'} />
        <DataCard title={'Total Capsules'} data={'21,324'} />
      </div>
      <div className="flex gap-10">
        <input className="border py-2 pr-6 pl-3 rounded-md" placeholder="status" />
        <input className="border py-2 pr-6 pl-3 rounded-md" placeholder="launch"/>
        <input className="" placeholder="type"/>
        <button>Filter</button>
      </div>
    </section>
  );
};
