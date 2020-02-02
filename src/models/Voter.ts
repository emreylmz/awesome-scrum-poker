export interface Voter {
  id: string
  name: string
  point?: string
  voted?: boolean
  orderInSprint: number
  isScrumMaster?: boolean
}
