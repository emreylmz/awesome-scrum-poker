import { Sprint } from '../models'
import http from './httpService'
import { ErrorOutput } from './serviceModels'

export interface SprintStartInput {
  sprintName: string
  numberOfVoters: number
  stories: string[]
}

export interface SprintGetInput {
  sprintId: string
}

export const start = async (input: SprintStartInput): Promise<Sprint | ErrorOutput> => {
  const url = '/sprint/start'
  return (await http.post(url, input, { withCredentials: true })).data
}

export const get = async (input: SprintGetInput): Promise<Sprint | ErrorOutput> => {
  const url = '/sprint/get'
  return (
    await http.get(url, {
      params: input,
      withCredentials: true
    })
  ).data
}
