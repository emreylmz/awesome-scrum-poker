import { Story } from './Story'
import { Voter } from './Voter'

export interface Sprint {
  id: string
  name: string
  numberOfVoters: number
  storyList: Story[]
  activeStory: Story
  inviteLink?: string
  voterList: Voter[]
}
