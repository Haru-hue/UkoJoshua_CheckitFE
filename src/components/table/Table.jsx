import { dateBodyTemplate, missionTemplate } from "@/constants/template"
import { Column } from "primereact/column"
import { DataTable } from "primereact/datatable"

export const Table = ({ data }) => {
    return (
        <DataTable value={data} paginator rows={5} >
            <Column field="capsule_id" header='Capsule ID'/>
            <Column field="capsule_serial" header='Capsule Name'/>
            <Column body={dateBodyTemplate} header='Original Launch Date'/>
            <Column field="status" header='Status'/>
            <Column field="type" header='Type'/>
            <Column body={missionTemplate} header='No. of Missions'/>
        </DataTable>
    )
}