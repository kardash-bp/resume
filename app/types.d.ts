export type PersonalDataType = {
  name: string
  role: string
  education: string[],
  contactLinks: string[],
};
export type SkillType = {
  icon: string
  text: string
}
export type ExperienceType = {
  role: string
  description: string
  current: boolean
}