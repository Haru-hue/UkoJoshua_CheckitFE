import dayjs from "dayjs"

export const dateBodyTemplate = (rowData) => {
    return dayjs(rowData?.original_launch).format('DD MMMM, YYYY')
}

export const missionTemplate = (rowData) => {
    return rowData?.missions?.length
}