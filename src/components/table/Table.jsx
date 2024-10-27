import { dateBodyTemplate, deleteTemplate, editTemplate, missionTemplate, statusBodyTemplate } from "@/constants/template";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";

export const Table = ({ data }) => {
  return (
    <DataTable value={data} paginator rows={5}>
      <Column field="capsule_id" header="Capsule ID" />
      <Column field="capsule_serial" header="Capsule Name" />
      <Column body={dateBodyTemplate} header="Original Launch Date" />
      <Column body={statusBodyTemplate} header="Status" />
      <Column field="type" header="Type" />
      <Column sortable body={missionTemplate} header="No. of Missions" />
      <Column body={editTemplate} />
      <Column body={deleteTemplate} />
    </DataTable>
  );
};
