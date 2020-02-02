import http from './httpService'
import { ErrorOutput, SuccessOutput } from './serviceModels'

export interface EndVotingInput {
  storyId: string
  point: number
}

export const endVoting = (input: EndVotingInput): Promise<SuccessOutput | ErrorOutput> => {
  const url = '/story/endVoting'
  return http.post(url, input)
}
