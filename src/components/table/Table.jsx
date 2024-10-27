import { Column } from "primereact/column"
import { DataTable } from "primereact/datatable"

export const Table = ({ data }) => {
    return (
        <DataTable value={data} paginator rows={5} >
            <Column field="capsule_id" header='Capsule ID'/>
            <Column field="capsule_serial" header='Capsule Name'/>
            <Column field="original_launch" header='Original Launch Date'/>
            <Column field="status" header='Status'/>
            <Column field="type" header='Type'/>
            <Column field="no_missions" header='No. of Missions'/>
        </DataTable>
    )
}