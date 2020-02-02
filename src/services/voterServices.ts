import http from './httpService'
import { ErrorOutput, SuccessOutput } from './serviceModels'

interface VoteInput {
  point: number
}

export const vote = (input: VoteInput): Promise<SuccessOutput | ErrorOutput> => {
  const url = '/voter/vote'
  return http.post(url, input)
}
