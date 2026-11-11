import z from 'zod';

export const applicationScoreSchema = z.object({
  id: z.number(),
  applicationId: z.number(),
  score: z.number(),
  verdict: z.string(),
  confidence: z.number(),
  xaiPositiveFactors: z.array(z.string()),
  xaiNegativeFactors: z.array(z.string()),
  skillsMatch: z.object({
    matched: z.array(z.string()),
    missing: z.array(z.string()),
  }),
  calculatedAt: z.string(),
});

export const allApplicationsScoreResponseSchema = z.object({
  processedCount: z.number(),
  scoredApplications: z.array(applicationScoreSchema),
  message: z.string(),
});

export type ApplicationScore = z.infer<typeof applicationScoreSchema>;
export type allApplicationsScoreResponse = z.infer<typeof allApplicationsScoreResponseSchema>;
