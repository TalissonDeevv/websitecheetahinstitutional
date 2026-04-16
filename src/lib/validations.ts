import { z } from "zod";

// Contact form schema
export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Nome deve ter ao menos 2 caracteres")
    .max(100, "Nome deve ter no máximo 100 caracteres"),
  email: z
    .string()
    .trim()
    .email("E-mail inválido")
    .max(255, "E-mail deve ter no máximo 255 caracteres"),
  subject: z
    .string()
    .trim()
    .min(3, "Assunto deve ter ao menos 3 caracteres")
    .max(200, "Assunto deve ter no máximo 200 caracteres"),
  message: z
    .string()
    .trim()
    .min(10, "Mensagem deve ter ao menos 10 caracteres")
    .max(2000, "Mensagem deve ter no máximo 2000 caracteres"),
});

export type ContactFormData = z.infer<typeof contactSchema>;

// Suggestion form schema
export const suggestionSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Nome deve ter ao menos 2 caracteres")
    .max(100, "Nome deve ter no máximo 100 caracteres"),
  email: z
    .string()
    .trim()
    .email("E-mail inválido")
    .max(255, "E-mail deve ter no máximo 255 caracteres"),
  category: z
    .string()
    .min(1, "Selecione uma categoria"),
  suggestion: z
    .string()
    .trim()
    .min(10, "Sugestão deve ter ao menos 10 caracteres")
    .max(2000, "Sugestão deve ter no máximo 2000 caracteres"),
});

export type SuggestionFormData = z.infer<typeof suggestionSchema>;

// Budget form schema
export const budgetSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Nome deve ter ao menos 2 caracteres")
    .max(100, "Nome deve ter no máximo 100 caracteres"),
  email: z
    .string()
    .trim()
    .email("E-mail inválido")
    .max(255, "E-mail deve ter no máximo 255 caracteres"),
  phone: z
    .string()
    .trim()
    .regex(/^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/, "Telefone inválido (ex: (11) 99999-9999)")
    .or(z.string().trim().min(10, "Telefone deve ter ao menos 10 dígitos").max(15)),
  company: z.string().max(200, "Nome da empresa muito longo").optional().or(z.literal("")),
  service: z.string().min(1, "Selecione um serviço"),
  description: z
    .string()
    .trim()
    .min(10, "Descreva com ao menos 10 caracteres")
    .max(3000, "Descrição deve ter no máximo 3000 caracteres"),
  budget: z.string().optional().or(z.literal("")),
  timeline: z.string().optional().or(z.literal("")),
  features: z.array(z.string()).default([]),
});

export type BudgetFormDataValidated = z.infer<typeof budgetSchema>;

// Feedback form schema
export const feedbackSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Nome deve ter ao menos 2 caracteres")
    .max(100, "Nome deve ter no máximo 100 caracteres"),
  email: z
    .string()
    .trim()
    .email("E-mail inválido")
    .max(255, "E-mail deve ter no máximo 255 caracteres"),
  type: z.string().min(1, "Selecione um tipo de feedback"),
  rating: z.string().min(1, "Selecione uma avaliação"),
  message: z
    .string()
    .trim()
    .min(10, "Mensagem deve ter ao menos 10 caracteres")
    .max(2000, "Mensagem deve ter no máximo 2000 caracteres"),
});

export type FeedbackFormData = z.infer<typeof feedbackSchema>;

// SuggestionSystem (component) schema
export const suggestionSystemSchema = z.object({
  name: z.string().max(100).optional().or(z.literal("")),
  email: z.string().email("E-mail inválido").max(255).optional().or(z.literal("")),
  suggestion: z
    .string()
    .trim()
    .min(5, "Por favor, escreva uma sugestão")
    .max(2000, "Sugestão muito longa"),
});
