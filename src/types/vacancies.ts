import z from 'zod';

export const vacancySchema = z.object({
  id: z.string(),
  creatorId: z.string(),
  title: z.string(),
  description: z.string(),
  requiredExperienceInYears: z.number(),
  requiredSkills: z.array(z.string()),
  salaryMin: z.number(),
  salaryMax: z.number(),
  status: z.string(),
  createdAt: z.string(),
});

export const vacancyResponseSchema = z.array(vacancySchema);

export const createVacancyRequestSchema = z.object({
  title: z.string(),
  description: z.string(),
  requiredExperienceYears: z.number(),
  requiredSkills: z.array(z.string()),
  salaryMin: z.number(),
  salaryMax: z.number(),
  status: z.string(),
});

export const createVacancyResponseSchema = z.object({
  id: z.number(),
  creatorId: z.number(),
  title: z.string(),
  description: z.string(),
  requiredExperienceYears: z.number(),
  requiredSkills: z.array(z.string()),
  salaryMin: z.number(),
  salaryMax: z.number(),
  status: z.string(),
  createdAt: z.string(),
});

export const deleteVacancyResponseSchema = z.object({
  message: z.string(),
  id: z.number(),
  status: z.string(),
});

export type Vacancy = z.infer<typeof vacancySchema>;
export type VacancyResponse = z.infer<typeof vacancyResponseSchema>;

export type CreateVacancyRequest = z.infer<typeof createVacancyRequestSchema>;
export type CreateVacancyResponse = z.infer<typeof createVacancyResponseSchema>;

export type DeleteVacancyReponse = z.infer<typeof deleteVacancyResponseSchema>;
