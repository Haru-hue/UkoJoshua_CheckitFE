import { dateBodyTemplate, deleteTemplate, editTemplate, missionTemplate, serialBodyTemplate, statusBodyTemplate } from "@/constants/template";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";

export const Table = ({ data }) => {

  return (
    <DataTable value={data} paginator rows={5}  paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
    currentPageReportTemplate="{first} to {last} of {totalRecords}">
      <Column body={serialBodyTemplate} header="Capsule ID" />
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
