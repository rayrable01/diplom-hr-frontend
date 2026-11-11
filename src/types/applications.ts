import z from 'zod';

export const applyApplicationRequest = z.object({
  coverLetter: z.string(),
});

export const applicationSchema = z.object({
  id: z.number(),
  vacancyId: z.number(),
  candidateId: z.number(),
  resumeSnapshot: z.record(z.string(), z.unknown()),
  coverLetter: z.string().nullable().optional(),
  status: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  vacancyTitle: z.string(),
  candidateName: z.string(),
  candidateEmail: z.string(),
});

export const changeStatusRequest = z.object({
  status: z.enum([
    'pending',
    'new',
    'reviewing',
    'screening',
    'interview',
    'scored',
    'offer',
    'accepted',
    'rejected',
  ]),
});

export const userApplicationsResponse = z.array(applicationSchema);
export const hrApplicationsResponse = z.array(applicationSchema);

export type userApplicationsResponse = z.infer<typeof applicationSchema>;
export type hrApplicationsResponse = z.infer<typeof applicationSchema>;

export type ChangeStatusRequest = z.infer<typeof changeStatusRequest>;
