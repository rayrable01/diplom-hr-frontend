import z from 'zod';

export type CandidateStatus =
  | 'pending'
  | 'new'
  | 'reviewing'
  | 'screening'
  | 'interview'
  | 'scored'
  | 'offer'
  | 'accepted'
  | 'rejected';

export const CandidateResumeResponseSchema = z.object({
  title: z.string(),
  experienceYears: z.number(),
  expectedSalary: z.number().nullable().optional(),
  skills: z.array(z.string()),
  education: z.string().nullable().optional(),
  about: z.string().nullable().optional(),
  id: z.number(),
  userId: z.number(),
  updatedAt: z.string(),
});

export const UpdateCandidateResumeRequestSchema = z.object({
  title: z.string(),
  experienceYears: z.number(),
  expectedSalary: z.number(),
  skills: z.array(z.string()),
  education: z.string(),
  about: z.string(),
});

export type CandidateResumeResponse = z.infer<typeof CandidateResumeResponseSchema>;
export type UpdateCandidateResumeRequest = z.infer<typeof UpdateCandidateResumeRequestSchema>;
